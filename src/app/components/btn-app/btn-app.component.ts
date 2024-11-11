import {  Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-btn-app',
  standalone: true,
  imports: [ ],
  templateUrl: './btn-app.component.html',
  styleUrl: './btn-app.component.scss',

})
export class BtnAppComponent {
  @Input() value: string = "";
  @Input() name: string = "";
  @Input() disabledBtn: boolean = false;
  @Input() url: string = "";
  @Input() alt: string = "";


  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();
  
  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
