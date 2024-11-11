import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BtnAppComponent } from '../../components/btn-app/btn-app.component';
import { NavegationComponent } from '../../components/navegation/navegation.component';
import { RepositoryService } from '../../services/repository.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [BtnAppComponent, NavegationComponent],
  providers: [
    RepositoryService
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements AfterViewInit {
  username: string | null = '';

  @ViewChild('mainContent') mainContent!: ElementRef; // Referência ao conteúdo principal

  constructor(
    private router: Router,
    private RepositoryService: RepositoryService,
    private toastService: ToastrService
  ){}

  submit() {
    this.RepositoryService.profile().subscribe({
      next: () => {
        this.toastService.success("Get funcionando!");
      },
      error: () => this.toastService.error("Get error!"),
    });
  }

  ngOnInit() {
    // Recupera o nome do usuário do sessionStorage
    this.username = sessionStorage.getItem('username');
    this.RepositoryService.profile().subscribe({
      error: () => this.router.navigate(["login"]),
    });
  }

  ngAfterViewInit() {
    // Espera que a animação do texto termine
    const animatedContainer = document.getElementById('animatedContainer');

    // Define o tempo de animação (4 segundos neste exemplo)
    const animationDuration = 1000;

    // Após a duração da animação, exibe o conteúdo principal e oculta a animação
    setTimeout(() => {
      if (animatedContainer) {
        animatedContainer.style.display = 'none'; // Esconde a animação
      }
      if (this.mainContent) {
        this.mainContent.nativeElement.style.display = 'block'; // Exibe o conteúdo principal
      }
    }, animationDuration);
  }

  setTrue(){
    true;
  }
}
