# Hermes Supplement

## notification_schedules = Alerts
In the UI, an “Alert” record corresponds in the database to a **notification_schedules** record.  We’re working with some generic terms here but we also need to use some of these terms to describe components that are performing real world actions, so as a result some of the verbage is stepping on itself and can lead to confusion.  For example, using the name “message” a system that sends messages can be confusing if you’re using a queue system that relies on its own internal messaging system, so which “message” are we talking about?

A Notification Schedule is a scheduled job that “notifies” when it encounters any events matching its filters.  Hence the term “notification schedule”.  But the term Notification Schedule is a bit generic, not self-evident, and certainly not quick to say.  So for the UI, the concept has been simplified to “Alert”.  

## alerts = Alert Logs
So then what are **alerts** and **alerts_events** in the database?  When a notification schedule executes, and actually produces an alert- that is to say, it sends emails to the appropriate destinations containing the formatted notification- then it records the historic action of that alert, and this goes into the **alerts** table.  Furthermore, the alert in question must be associated with 1 or more events in the database, otherwise no notification would be sent at all.  So, any events that are shown in the notification must also be associated with the given alert, so we have the option to ignore those alerts later to eliminate duplicate alerts.  Hence the **alerts_events** table is a join table between **alerts** and events.

## Notification Filters
A notification filter combines a valid field with a comparison operator and a value.  Valid fields are in the **valid_fields** table.  The way notification filters are used when searching for events to notify on, requires some complex joins.  The heavy lifting of pulling events that match a notification schedule is done by **getDetailsForCriteriaFilter** in **src/Service/Events**.  

For any given notification schedule, there must be a notification filter value for each valid field.  This is because the filtering and column inclusion in the alert are not currently separate from each other.  However, the user does not need to explicitly create an empty filter for each column.  Instead, the system silently adds passthru filters, where the comparison operator is ??.  This tells the system to join the event details table to pull that information, but not to try to perform any equivalence tests against it.   For this reason, you’ll see something like the screenshot below in the notification_filters table. 

![](/img/others/01.png)

The user has only created a filter that valid  11  is equal to the value “AS2A”.  The remaining fields are automatically turned into passthru filters.  If the passthru filters were not added, then the event query would only return record sets with valid field 11.  This is an area for potential improvement.

![](/img/others/02.png)

Here’s the main query in **getDetailsForCriteriaFilter**.  The :type property is populated by the source type of the given notification schedule.  The :partner, likewise is a property on the notification schedule.  The $excludeWhere clause is either left blank when the notification does not exclude previously alerted events, or conversely, looks like the screenshot below, where $nsId is the id of the notification schedule.  So, while a single event could be picked up by multiple different notification schedules that just happen to have overlapping interests, the $excludeWhere clause only deals with situations where you don’t want the same event alerted multiple times from the same notification schedule.

![](/img/others/03.png)

For example, you could have a notification schedule that reports on 850s, and a separate one that reports on ALL documents.  Between these two alerts, you will see duplicated data, even if each one is set to exclude previous results.  However, with exclude previous results enabled, you should never see duplicated results within each individual notification schedule.

The **$momentStart** and **$momentEnd** clause should be self explanatory, they’re just the date boundary criteria for the notification schedule.

The **$filterJoins** and **$filterColumns** are the interesting bits to this query.  Have a look at the next page, there’s an example of what the whole query looks like for the SLS delta alert:

```sql
SELECT 
 e.id,e.source_type,e.partner,e.qualifier,e.identifier,
 _t0.`value` as `Database` ,
 _t1.`value` as `DataChannel` ,
 _t2.`value` as `Str1` ,
 _t3.`value` as `BatchTitle` ,
 _t4.`value` as `ContentSize` ,
 _t5.`value` as `Module`,
e.moment
FROM events e
JOIN event_details  _t0 
ON  _t0.event = e.id AND (_t0.valid_field = 11 AND (( _t0.value = 'AS2A')))  
JOIN event_details  _t1 
ON _t1.event = e.id AND (
  _t1.valid_field = 10 AND (
  ( _t1.value = '1073742170') 
  OR ( _t1.value = '1073744406') 
  OR ( _t1.value = '1073744760') 
  OR ( _t1.value = '1073744907') 
  OR ( _t1.value = '1073746113') 
  OR ( _t1.value = '1073746175') 
  OR ( _t1.value = '1073747070') 
  OR ( _t1.value = '1073747800') 
  OR ( _t1.value = '1073747946') 
  OR ( _t1.value = '1073748275') 
  OR ( _t1.value = '1073748313') 
  OR ( _t1.value = '1073748333') 
  OR ( _t1.value = '1073748948') 
  OR ( _t1.value = '1073749112') 
  OR ( _t1.value = '1073749139') 
  OR ( _t1.value = '1073750094')) 
)  
JOIN event_details  _t2 ON  _t2.event = e.id AND (  _t2.valid_field = 5 AND TRUE )  
JOIN event_details  _t3 ON  _t3.event = e.id AND (  _t3.valid_field = 6 AND TRUE )  
JOIN event_details  _t4 ON  _t4.event = e.id AND (  _t4.valid_field = 7 AND TRUE )  
JOIN event_details  _t5 ON  _t5.event = e.id AND (  _t5.valid_field = 25 AND TRUE ) 
WHERE e.partner = :partner
AND e.moment >= '1969-12-31 00:00:00' 
AND e.moment < '2021-01-28 00:00:00' 
_
AND e.source_type = :type	
ORDER BY e.id


```

Check out the legend and you’ll see that the big JOIN mess in green is all the **$filterJoins** clause.  The last few of the joins are there to include the columns in the output, and since the query is created dynamically, we have to have some clause inside the last parenthesis.  In the case of fields that we’re not filtering on, we just use a static **TRUE** statement.  Have a look at the huge list of OR clauses.  Ors are achieved in the UI by setting the same filter = to multiple values as separate filters.  See the screenshot below.  

![](/img/others/04.png)

We have multiple instances of DataChannel = something.  Internally, this is interpreted as an OR.  In fact, any combination of comparisons against the same field is joined with an OR.  This might be insufficient for some advanced querying if you want to check for this field > x AND < y, so this is an area for potential improvement.

## Data Miners
Hermes only reports notifications from its own database.  In order for external system logs to be visible to Hermes, a data miner for that external system, or “source type”, must be implemented.  

Currently, there are 3 data miners implemented:
* Delta
* Mapper
* Adapter

A Data Miner must be a subclass of the **src/Service/LogMiner** class.  Typically you’ll implement a log miner, and a separate class for querying the logs.  This means you could effectively mine text file logs for one system, not just databases.  The log miner expects records to be normalized, and it simply uses the input data to create rows in the **events** and **event_details** tables.  So, your service that queries the external system could be reading log files, database rows, or any other data structure.  

So, in the case of Delta we have **src/Service/DeltaLogMiner** which is the subclass of LogMiner, and src/**Service/DeltaEventLogs** which is the DBQuery abstraction layer for getting those logs from the delta db.  Likewise, for Mapper there’s **MapperLogMiner** and **MapperEventLogs**, and similar for Adapter.  

One thing to note, with the Adapter Notification Schedules, at the time of this writing only the Otterbox 832 and 816 are connected to the logging tables that this source type mines from.  This is because the **webedi30.AdapterReport** table was created specifically to meet requirements of the Otter Purchasing Portal.  Other adapters can certainly write to this table as well, but currently only the 832/816 adapters for Otter are using it.




