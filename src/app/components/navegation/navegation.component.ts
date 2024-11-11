import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnAppComponent } from '../btn-app/btn-app.component';

@Component({
  selector: 'app-navegation',
  standalone: true,
  imports: [BtnAppComponent],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.scss'
})
export class NavegationComponent {
  @Output("profile") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();
  
  profile(){
    this.onSubmit.emit();
  }
}
