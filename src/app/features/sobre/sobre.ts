import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {
  private router = inject(Router);

  exibirPromo(){
    this.router.navigate(['/produtos'], {
      queryParams: { promo: true}
    });
  }
}
