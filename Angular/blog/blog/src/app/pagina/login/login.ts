import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField,  MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule,MatInput ,MatFormField,CommonModule, MatLabel,MatIcon ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  formLogin = new FormGroup({
    nome: new FormControl(),
    senha: new FormControl()
  });
}
