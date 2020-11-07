import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public titulo: string = "TITULO";
  public varPop: number;
  public texto: string = "TEXTO";
  constructor() { }

  ngOnInit(): void {
  }

  exibirModal(varPop) {
    this.varPop = varPop;
    if (this.varPop == 1) {
      this.titulo = "Faça novos amigos";
      this.texto = "Encontre outras pessoas para praticar diálogos em inglês e faça novos amigos."
    } else if (this.varPop == 2) {
      this.titulo = "Treine o seu speak";
      this.texto = "Ouça os áudios, leias as frases em inglês e tente repeti-las em seguida. Converse com seus amigos e forme grupos de conversação."
    }else if(this.varPop == 3){
      this.titulo = "Chegue ao topo do ranking";
      this.texto = "Ao completar tarefas e lições você ganhará pontos, esteja a frente de seus amigos!";
    }else if(this.varPop == 4){
      this.titulo = "Divirta-se enquanto aprende";
      this.texto = "Através de lições interativas e dicas para seu dia-a-dia a plataforma tem o intuito de proporcionar diversão enquanto você pratica o idioma.";
    }

  }

}
