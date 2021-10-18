import { LightningElement,api, wire, track } from 'lwc';
import findAppointmentsByAccountId from '@salesforce/apex/AppointmentController.findAppointmentsByAccountId'; 
const columns = [
    { label: 'Patient', fieldName: 'Patient_Name' },
    { label: 'Appointment DateTime', fieldName: 'Start_Date_Time' },        
];
export default class PatientList extends LightningElement {
    @track data =[];
    @track columns = columns;
    @api accountId;    
    //@wire(findAppointmentsByAccountId,{accountId:'$accountId'}) patients;
    @wire(findAppointmentsByAccountId,{accountId:'$accountId'})
    app({error,data}){
        if(data){
            let currentData = [];
            data.forEach(row => {
                let rowData = {};
                rowData.Patient_Name = row.Who.Name;
                rowData.Start_Date_Time = row.StartDateTime;
                currentData.push(rowData);
            });
            this.data = currentData;
        }
        else if(error){
            window.console.log(error);
        }
    }
}