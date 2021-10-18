/*
Controller which fetches the appointment details of doctor
and patients from Events
*/
public with sharing class AppointmentController {
@AuraEnabled(cacheable=true)
public static List<Event> findAppointmentsByAccountId(String accountId){
    return [SELECT Id,Who.Name,StartDateTime
            FROM Event
            WHERE AccountId=:accountId
            LIMIT 20];
}
}
