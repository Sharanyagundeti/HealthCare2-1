import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignupService } from '../signup.service';

 interface SignupData {
speciality: any;
password: any;
mobile: any;
uname: any;
role: string;
signUpTitle: string;
signUpImg: string;
 }


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  

  errorMessage: string = '';
  successMessage: string = '';

  signupType: string =''  ;
  

  userregisterForm = new FormGroup({
 
    uname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    mobileNumber:new FormControl('',[ Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]),
    speciality:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]),
  })



  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private signupService: SignupService,
              
  ){ }

  ngOnInit(): void{
    this.route.data.subscribe(data => {
      this.signupType = data ['type'];
    });
  }

  coachregister(){
    const signupData = {
      uname: '',
      password:'',
      mobile:'',
      speciality:'',
    };
    this.signupService.register(signupData).subscribe(
      response =>{
        console.log('registration success', response);
       },git 
       error =>{
        console.error('registration failed', error);
       }
    );
  }
  
}
 


