import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color( valor: string ) { // setter
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();  
  };

  // @Input() mensaje: string = 'Sebastian';

  @Input() set mensaje( valor: string) {
    // this.htmlElement.nativeElement.innerHTML = valor;
    this._mensaje = valor;
    this.setMensaje();
  };

  @Input() set valido( valor: boolean) {
    if( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  };
  
  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.color) {
    //   this.setColor();
    // }
    // if (changes.mensaje) {
    //   this.setMensaje();
    // }
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClass();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
