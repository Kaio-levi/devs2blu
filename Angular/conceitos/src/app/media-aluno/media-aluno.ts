import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-aluno',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './media-aluno.html',
  styleUrl: './media-aluno.css'
})
export class MediaAluno {
    aluno = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nota1: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(10)]),
      nota2: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(10)]),
      nota3: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(10)])
    }) 
}
