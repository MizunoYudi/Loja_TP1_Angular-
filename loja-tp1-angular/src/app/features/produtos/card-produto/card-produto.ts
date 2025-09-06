import { Component, input, output, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { QuantidadeControle } from '../../../shared/quantidade-controle/quantidade-controle';
import { CurrencyPipe } from '@angular/common';
import { DescontoPipe } from '../../../shared/pipes/desconto-pipe';
import { TruncarDescricaoPipe } from '../../../shared/pipes/truncar-descricao-pipe';

@Component({
  selector: 'app-card-produto',
  imports: [QuantidadeControle, CurrencyPipe, DescontoPipe, TruncarDescricaoPipe],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  produto = input.required<Produto>();

  view = output<number>();
  add = output<{ id: number; quantity: number}>();

  qtde = signal(0);

  onView() {
    this.view.emit(this.produto().id);
  }

  onAdd() {
    this.add.emit({ id: this.produto().id, quantity: this.qtde() });
  }
}
