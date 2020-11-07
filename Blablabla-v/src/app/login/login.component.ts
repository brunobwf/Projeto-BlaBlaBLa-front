import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, private location:Location) { 
    this.formLogin = this.formBuilder.group({

      username:['',[Validators.required]],
      password:['',[Validators.required]]
    }); 
  }

  ngOnInit(): void {
  }

  onSubmit(){}

  voltar(){
    this.location.back();
  }

}
