# Steps

## 1. WebEDI Admin 3.5 website
To configure notifications in Hermes it is necessary to log in to WebEDI Admin 3.5 from the following link::
* <https://admin-prod.datatranswebedi.com/login>

![](/img/steps/webediadmin.png)
 <img :src="$withBase('/img/steps/webediadmin.png')">


## 2. Hermes Notifications

Once you have logged in, select the "Notifications" option in the side menu of WebEDI Admin 3.5. <span style="color:red">_If you do not see it, you will have to request the necessary access and permissions_</span>

![](/img/steps/notifications_options.png)
 <img :src="$withBase('/img/steps/notifications_options.png')">

## 3. Associate the Trading Partner with channels.
To correctly configure notifications it is important and necessary to associate the "Trading Partner" with their respective channels. To do this we go to "AS2A Channels".

![](/img/others/data1.png)
 <img :src="$withBase('/img/others/data1.png')">

 For this example we will associate the Trading Partner "Warehouse Associates" with the corresponding channels. In this case, I assume that the channels have the same name as the trading partner (this is not always the case, channels can have any name).

We search all channels for warehouse associates.

In the channel list we verified that the channel "FWD -- Warehouse Associates Navivistaar Orders to FTP" is not associated with any trading partners. It is necessary to associate this channel to your Trading Partner in order to receive the alerts corresponding to the channel

For this we press the "edit" button

![](/img/others/searchChannel.png)
 <img :src="$withBase('/img/others/searchChannel.png')">

We select the Commercial Partner that we want to associate to the channel "FWD - Warehouse Associates Navitaar Orders to FTP" and save the changes.

![](/img/others/editChannlOwner.png)
 <img :src="$withBase('/img/others/editChannlOwner.png')">

 Now we can verify that the channel "FWD -- Warehouse Associates Navistaar Orders to FTP" will be associated with the Trading Partner "Warehouse associates" and therefore it will be possible to receive alerts associated with the channel.

 ![](/img/others/TPCHanneAssociated.png)
 <img :src="$withBase('/img/others/TPCHanneAssociated.png')">

 We click on "notifications" to return to the Main screen and be able to configure an alert.

 ![](/img/others/noti.png)
 <img :src="$withBase('/img/others/noti.png')">


## 3. Main Screen
The default screen for Hermes is a list of Partners.  From here, you choose the partner for which you want to manage alerts.

![](/img/steps/main_screen.png)
 <img :src="$withBase('/img/steps/main_screen.png')">

If you see the alert: <span style="color:red"> _Unable to authenticate with the notification API. Invalid credentials._</span> You must request the necessary access and permissions.

![](/img/steps/permission_error.png)
 <img :src="$withBase('/img/steps/permission_error.png')">

We will look for a Partner to configure notifications, we will use the "_Warehouse Associates, Inc. (dba Imperial Auto)_" partner as an example and we will click on the "_Edit_" button.

 ![](/img/steps/examplePartner.png)
 <img :src="$withBase('/img/steps/examplePartner.png')">

## 5. Partner Screen
Selecting a partner will take you to this screen, which allows management of Notification Profiles and the actual Alerts.

 ![](/img/steps/partner_screen.png)
 <img :src="$withBase('/img/steps/partner_screen.png')">

## 6. Notification Profiles
A notification profile is just a fancy way to say “email recipient list”.

We press the "_Add New Profile_" button to add the emails to which the notifications will be sent.

 ![](/img/steps/notification_profile.png)
 <img :src="$withBase('/img/steps/notification_profile.png')">

A profile is a comma-separated list of emails. Add an exclamation point in front of an email address to make it a BCC recipient.
Once the emails have been entered, press the "_Submit_" button to save the changes.

 ![](/img/steps/create_notification_profile.png)
 <img :src="$withBase('/img/steps/create_notification_profile.png')">

The notification profile was created successfully.
The "_Change History_" section will show a history of all the changes that were made.

 ![](/img/steps/success_profile.png)
 <img :src="$withBase('/img/steps/success_profile.png')">

Going back to the partners screen, we can see that a new notification profile with the corresponding emails has been added.

 ![](/img/steps/partner_screen2.png)
 <img :src="$withBase('/img/steps/partner_screen2.png')">

## 7. Alerts
An alert is an email sent to a given notification profile, containing events that occur within a certain time period and with a given criteria.

We press the "_Add New Alert_" button to create a new alert.

 ![](/img/steps/Alerts.png)
 <img :src="$withBase('/img/steps/Alerts.png')">

A modal opens in which we select the type of alert to create.

For this example we select a _Delta_ type alert.

_Delta_ by default will send notifications of documents processed `successfully` and documents processed with `errors`.

![](/img/steps/alert_type.png)
 <img :src="$withBase('/img/steps/alert_type.png')">


### 7.1 Properties

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

 ![](/img/steps/alert_submit.png)
 <img :src="$withBase('/img/steps/alert_submit.png')">

### 7.2 Filters

We press the _Add New Filter_ button to add a new filter and fill in the fields.

 ![](/img/steps/filters.png)
 <img :src="$withBase('/img/steps/filters.png')">

One or more filters can be added for each alert. For example, we will only search for errors in which the Datachanel is equal to 1073752604, which means that alerts will be sent in which the Datachanel = 1073752604 and will ignore the others. Then we save the changes.

 ![](/img/steps/add_filter.png)
 <img :src="$withBase('/img/steps/add_filter.png')">

  ![](/img/steps/add_filter_save.png)
 <img :src="$withBase('/img/steps/add_filter_save.png')">

We will verify that the new filter was added. Then we press the _Submit_ button to save the changes

 ![](/img/steps/save_changes.png)
 <img :src="$withBase('/img/steps/save_changes.png')">

Returning to the main screen we verify that a new alert has been added.

 ![](/img/steps/new_alert.png)
 <img :src="$withBase('/img/steps/new_alert.png')">

## 8. Updates
Below are some updates made.
### 8.1 Delta
_2022-08-30_ "Delta", Delta will be able to send 3 types of notifications:

_1) Only documents processed successfully._

_2) Only documents processed with errors_

_3) Both (default)_


The configuration must be done through the filters as detailed below:

**1) Only successfully processed documents.**

In order for Delta to only send notifications for **successfully** processed documents, the following filter must be added:

**Severity = 6**

![](/img/others/update1.png)
 <img :src="$withBase('/img/others/update1.png')">

**2) Only documents processed with errors.**

In order for Delta to only send notifications for documents processed with **errors**, the following filter must be added:

**Severity = 3**

![](/img/others/update2.png)
 <img :src="$withBase('/img/others/update2.png')">

**3) Both (Default)**

In order for delta to send notifications of documents processed successfully and documents processed with errors, no additional filters need to be added as Delta will send these two types of notification by default. 

### 8.2 DataChannel filter
_2022-12-13_ "DataChannel-filter", A dropdown menu with all available "Data Channels" has been implemented. _[channel name](data channel id)_.

In this way the user will be able to select an available data channel without having to add it manually.

![](/img/others/datachannel_update.png)
 <img :src="$withBase('/img/others/datachannel_update.png')">
