# Steps

## 1. WebEDI Admin 3.5 website
To configure notifications in Hermes it is necessary to log in to WebEDI Admin 3.5 from the following link::
* <https://admin-prod.datatranswebedi.com/login>

![](/img/steps/webediadmin.png)
 <img :src="$withBase('/img/steps/webediadmin.png')">


## 2. Hermes Notifications

Once you have logged in, select the "Notifications" option in the side menu of WebEDI Admin 3.5. <span style="color:red">_If you do not see it, you will have to request the necessary access and permissions_</span>

 <img :src="$withBase('/img/steps/notifications_options.png')">



## 3. Main Screen
The default screen for Hermes is a list of Partners.  From here, you choose the partner for which you want to manage alerts.

 <img :src="$withBase('/img/steps/main_screen.png')">

If you see the alert: <span style="color:red"> _Unable to authenticate with the notification API. Invalid credentials._</span> You must request the necessary access and permissions.

 <img :src="$withBase('/img/steps/permission_error.png')">

We will look for a Partner to configure notifications, we will use the "_Warehouse Associates, Inc. (dba Imperial Auto)_" partner as an example and we will click on the "_Edit_" button.

 <img :src="$withBase('/img/steps/examplePartner.png')">


## 4. Partner Screen
Selecting a partner will take you to this screen, which allows management of Notification Profiles and the actual Alerts.

 <img :src="$withBase('/img/steps/partner_screen.png')">

## 5. Notification Profiles
A notification profile is just a fancy way to say “email recipient list”.

We press the "_Add New Profile_" button to add the emails to which the notifications will be sent.

 <img :src="$withBase('/img/steps/notification_profile.png')">

A profile is a comma-separated list of emails. Add an exclamation point in front of an email address to make it a BCC recipient.
Once the emails have been entered, press the "_Submit_" button to save the changes.

 <img :src="$withBase('/img/steps/create_notification_profile.png')">

The notification profile was created successfully.
The "_Change History_" section will show a history of all the changes that were made.

 <img :src="$withBase('/img/steps/success_profile.png')">

Going back to the partners screen, we can see that a new notification profile with the corresponding emails has been added.

 <img :src="$withBase('/img/steps/partner_screen2.png')">

## 6. Alerts
An alert is an email sent to a given notification profile, containing events that occur within a certain time period and with a given criteria.

We press the "_Add New Alert_" button to create a new alert.

 <img :src="$withBase('/img/steps/Alerts.png')">

A modal opens in which we select the type of alert to create.

For this example we select a _Delta_ type alert.

![](/img/steps/alert_type.png)
 <img :src="$withBase('/img/steps/alert_type.png')">


### 6.1 Properties

We will complete the following fields, which are detailed below:

**Title** : Used in the subject line on email notifications.

**Notification Profile** : Select the emails that will receive this alert.

**Schedule** : Select the schedule when this alert should trigger.

**Enabled** : Set to `NO` to disable this alert.

**Template** : Select the report template to use for this alert.

**Relative Start** : Select the earliest time to include events for this alert, or `No Limit` to get everything as far back as possible.

**Relative End** : Select the latest time to include events for this alert, or `No Limit` to get everything up to the most recently available data.

**Exclude Previous Alerted Results** : Set to `NO` to avoid getting duplicate results in overlapping alerts.  Set to `YES` to ensure missed events get caught and alerted on.

**Relative Context** : Select the time from which the relative start and end should be calculated. The `Now` selection will use the time at which the scheule is triggered.

Press the _Submit_ button to save any changes made.

 <img :src="$withBase('/img/steps/alert_submit.png')">

### 6.2 Filters

We press the _Add New Filter_ button to add a new filter and fill in the fields.

 <img :src="$withBase('/img/steps/filters.png')">

One or more filters can be added for each alert. For example, we will only search for errors in which the Datachanel is equal to 1073752604, which means that alerts will be sent in which the Datachanel = 1073752604 and will ignore the others. Then we save the changes.

 <img :src="$withBase('/img/steps/add_filter.png')">

We will verify that the new filter was added. Then we press the _Submit_ button to save the changes

 <img :src="$withBase('/img/steps/save_changes.png')">

Returning to the main screen we verify that a new alert has been added.

 <img :src="$withBase('/img/steps/new_alert.png')">

