import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
interface Duration {
  type: number;
}

interface Citizen {
  type: string;
}

interface Loan {
  type: string;
}

interface MaritalStatus {
  type: string;
}

interface Account {
  type: string;
}
interface ID {
  type: string;
}

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  
  selectedLoanType: string;

  //----------------------------------------
  loanDuration = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  durations: Duration[] = [
    {type: 5},
    {type: 10},
    {type: 15},
    {type: 20}
  ];
  
  citizenType = new FormControl('', Validators.required);
  selectFormControl2 = new FormControl('', Validators.required);
  citizens: Citizen[] = [
    {type: 'Minor'},
    {type: 'Normal'},
    {type: 'Senior'}
  ];
  
  loanType = new FormControl('', Validators.required);
  selectFormControl3 = new FormControl('', Validators.required);
  loans: Loan[] = [
    {type: 'Education'},
    {type: 'Personal'},
    {type: 'Home'}
  ];
  
  maritalStatusType = new FormControl('', Validators.required);
  selectFormControl4 = new FormControl('', Validators.required);
  maritalStatuses: MaritalStatus[] = [
    {type: 'Married'},
    {type: 'Single'},
  ];
  
  accountType = new FormControl('', Validators.required);
  selectFormControl5 = new FormControl('', Validators.required);
  accounts: Account[] = [
    {type: 'Savings'},
    {type: 'Salary'},
    
  ];
  
  idType = new FormControl('', Validators.required);
  selectFormControl6 = new FormControl('', Validators.required);
  ids: ID[] = [
    {type: 'PAN Card'},
    // {type: 'Aadhaar Card'},
    
  ];
  
  
  
  minApplyDate;
  maxApplyDate;
  maxIssueDate;
  minIssueDate;
  
  
  constructor(private dateAdapter: DateAdapter<Date>, public dialog: MatDialog) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    
  }
  ngOnInit(): void {
    this.maxApplyDate = new Date();
    //
    // this.maxIssueDate = new Date();
    this.minIssueDate = new Date();
    // this.maxDate.setDate(this.maxDate)
  }
  

  updateDetails() {

  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
