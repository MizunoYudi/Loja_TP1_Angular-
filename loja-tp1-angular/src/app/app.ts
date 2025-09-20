import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Banner } from './core/banner/banner';
import { CardProduto } from './features/produtos/card-produto/card-produto';
import { ListaProdutos } from "./features/produtos/lista-produtos/lista-produtos";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-tp1-angular');
}
