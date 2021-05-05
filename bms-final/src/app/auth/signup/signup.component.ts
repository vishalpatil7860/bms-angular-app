import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

interface Guardian {
  type: string;
}

interface Citizen {
  type: string;
}

interface Gender {
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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//--------------------------------------------------------------------------------------------------  
  selectedIdType: string;
  selectedCitizenType: string;
  selectedAccountType: string;
//--------------------------------------------------------------------------------------------------
  guardianType = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  guardians: Guardian[] = [
    {type: 'Father'},
    {type: 'Husband'},
  ];
  
  citizenType = new FormControl('', Validators.required);
  selectFormControl2 = new FormControl('', Validators.required);
  citizens: Citizen[] = [
    {type: 'Minor'},
    {type: 'Normal'},
    {type: 'Senior'}
  ];
  
  genderType = new FormControl('', Validators.required);
  selectFormControl3 = new FormControl('', Validators.required);
  genders: Gender[] = [
    {type: 'Male'},
    {type: 'Female'},
    {type: 'Other'}
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
  
  
  
  maxDate;
  minDate;
  maxRegDate;
  minRegDate;
  
  
  constructor(private dateAdapter: DateAdapter<Date>, private authService: AuthService) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    
  }
  ngOnInit(): void {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.maxDate.setFullYear( this.maxDate.getFullYear() - 18 );  
    this.minDate.setFullYear( this.minDate.getFullYear() - 96 );  

    //-------------------------------------------------------------
    this.maxRegDate = new Date();
    this.minRegDate = new Date();
    // this.maxDate.setDate(this.maxDate)
  }
  
  onSubmit(form: NgForm) {
    console.log(form);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
  
}
