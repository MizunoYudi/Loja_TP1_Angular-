import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TruncarDescricao',
  pure: true
})
export class TruncarDescricaoPipe implements PipeTransform {

  transform(descricao: string){
    let desc;
    
    if(descricao.length > 20){
      return descricao.substring(0, 20) + "...";
    }
    return desc;
  }

}
