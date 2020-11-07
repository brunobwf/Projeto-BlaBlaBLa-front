import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup;
  constructor(private FormBuilder:FormBuilder,private location:Location) { 
    this.formCadastro = this.FormBuilder.group({

    }); 
  }

  ngOnInit(): void {
  }

  onSubmit(){}

  voltar(){
    this.location.back();
  }

}
