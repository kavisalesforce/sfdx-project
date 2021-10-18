/*
Controller class to display doctors in Lightning home page
*/
public with sharing class AccountController {
    public String accountId{get;set;}
    public Account actObj{get;set;}
    public AccountController() {
        actObj = new Account();        
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        Id accRecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByDeveloperName().get('Doctor').getRecordTypeId();
        return [SELECT Id,Name,Phone from Account where RecordTypeId=:accRecordTypeId limit 20];    
    }   
}
