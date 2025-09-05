import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch blue',
      imageUrl:'images/logoifsp.png',
      promo: true
    },
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch blue',
      imageUrl:'images/logoifsp.png',
      promo: true
    },
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch blue',
      imageUrl:'images/logoifsp.png',
      promo: true
    }
  ]

  onViewProduct(id: number){
    alert(`id do produto:  ${id}`);
  }

  onAddToCart(produto: { id: number; quantity: number}) {
    alert(`Carrinho ainda não implementado. Quantidade: ${produto.quantity}`);
  }
}
