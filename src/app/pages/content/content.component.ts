import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/data.fake';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // Propriedades para armazenar os dados do artigo
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";

  // Identificador privado inicializado como "0"
  private id: string | null = "0";

  // Construtor injetando o serviço ActivatedRoute para obter informações da rota
  constructor(
    private route: ActivatedRoute
  ) { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
    // Observa mudanças nos parâmetros da rota para atualizar o ID
    this.route.paramMap.subscribe(value =>
      this.id = value.get("Id")
    );

    // Chama o método para configurar os valores do componente com base no ID atualizado
    this.setValuesToComponent(this.id);
  }

  // Método para configurar os valores do componente com base no ID fornecido
  setValuesToComponent(id: string | null) {
    // Filtra o artigo com o ID correspondente da fonte de dados fictícia (dataFake)
    const result = dataFake.filter(
      article => article.id == id
    )[0];

    // Atribui os valores do artigo às propriedades do componente
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
