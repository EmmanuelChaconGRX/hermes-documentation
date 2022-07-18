# Hermes Delta Alert URLs for QA/Testing/Auditing

### List All Profile IDs:

<https://hermes.datatranswebedi.com/delta/profiles/all>

* The profile IDs should be used in substitution of the ??? characters in the URLs below.  Example profile IDs are mil, sls, and tcs.

### Show Config for Profile:
<https://hermes.datatranswebedi.com/delta/profile/???>

* Replace the ??? with a valid profile id. 
* This will show the full configuration of the profile, including the channel numbers, regex patterns for matching/replacing, and most importantly the dev and prod email recipients.


### Show ECS Channel Names Used By Profile:
<https://hermes.datatranswebedi.com/delta/profile/???/channels>

* Replace the ??? with a valid profile id.
* Use this to audit the channel names that we should be monitoring in the alerts.  As channels are added and removed, this list should be checked for accuracy.  If a discrepancy is found, dev will need to modify the configuration.


### Run Alert Report With Dev Recipients:
<https://hermes.datatranswebedi.com/delta/profile/???/runalert>

* Replace the ??? with a valid profile id.
* This will trigger the report but only for dev recipients.  The only way to trigger the report for production recipients is via the normally scheduled process, or to have dev manually re-run it.


### Run Alert Report With Dev Recipients, Interval of Last 30 Days:
<https://hermes.datatranswebedi.com/delta/profile/???/runalert/30days>

* Replace the ??? with a valid profile id.
* Use this URL to check a wider time range for testing/auditing purposes.
