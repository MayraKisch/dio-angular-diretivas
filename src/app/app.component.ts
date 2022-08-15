import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'diretivas';
  count = 0;
  text: string = '';

  pessoas = [
    {
      nome: "Mayra",
      sobrenome: "Kisch",
      idade: 32
    },
    {
      nome: "Marcus",
      sobrenome: "Hüsemann",
      idade: 30
    },
    {
      nome: "Miguel",
      sobrenome: "Miguelito",
      idade: 4
    },
  ]

  constructor(){}

  ngOnInit() {

   let interval = setInterval(() => {
    this.count++;
    if(this.count === 10){
    clearInterval(interval);}
    },
    1000);

  }
  clicou(nome: string): void{

    console.log("O botão foi clicado por ", nome)
  }

}