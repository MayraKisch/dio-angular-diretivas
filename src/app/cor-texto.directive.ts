import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCorTexto]'
})
export class CorTextoDirective implements OnInit {
@Input() corDoTextoBase: string = "rgb(197, 88, 88)";
@Input() fonteDoTextoBase: string = "italic"
@Input() tamahoDaFonte: string | number = "1.5rem"


// toda diretiva recebe um elemento, assim preciso instanciar um elemento de referência
  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.mudarCor()
    
  }

  mudarCor (cor: string = "rgb(197, 88, 88)") {
   this.element.nativeElement.style.color = this.corDoTextoBase || cor;   
   this.element.nativeElement.style.fontWeight = this.fonteDoTextoBase;   
   this.element.nativeElement.style.fontSize = this.tamahoDaFonte;

  }
}
