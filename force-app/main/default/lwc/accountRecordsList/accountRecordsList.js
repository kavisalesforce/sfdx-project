/*
Display Doctor accounts in lightning home page
To fetch doctor patient appointment from Events for each doctor
*/
import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class AccountRecordsList extends LightningElement {
    @wire(getAccounts) accounts;
    accountidfrmparent;
    handleClick(event){
        event.preventDefault();
        this.accountidfrmparent = event.target.dataset.accountid;
    }
}