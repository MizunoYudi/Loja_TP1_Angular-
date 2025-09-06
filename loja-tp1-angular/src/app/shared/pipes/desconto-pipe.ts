import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desconto',
  pure: true
})
export class DescontoPipe implements PipeTransform {

  transform(valor: number, percentual: number): number {
    const perc = Math.min(Math.max(percentual, 0), 100);
    const desc = valor * (1 - perc / 100);
    return Math.round(desc * 100) / 100;
  }

}
