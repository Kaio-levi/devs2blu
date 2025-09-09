import { Component } from '@angular/core';
import { Language, TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pagina',
  imports: [TranslateModule],
  templateUrl: './pagina.html',
  styleUrl: './pagina.css'
})
export class Pagina {

  //constructor
  constructor(private translate:TranslateService) {
    
  //obter o idioma do navegador
  const idiomaNavegador = navigator.language;

  //definir o idioma da pagina
  translate.use(idiomaNavegador);
  }

  //metodo para alterar o idioma
  alterarIdioma(idioma:Language){
    this.translate.use(idioma);
  }

}
