import { Component, input, output, signal } from '@angular/core';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'app-card-produto',
  imports: [],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  produto = input.required<Produto>();

  view = output<number>();
  add = output<{ id: number; quantity: number}>();

  qtde = signal(1);

  onView() {
    this.view.emit(this.produto().id);
  }

  onAdd() {
    this.add.emit({ id: this.produto().id, quantity: this.qtde() });
  }
}
