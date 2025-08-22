import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-media',
  imports: [FormsModule],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class Media {
  nota1:number = 0;
  nota2:number = 0;
  nota3:number = 0;
  media:number | undefined;

  calcularMedia(){
    this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
    
  }
}
