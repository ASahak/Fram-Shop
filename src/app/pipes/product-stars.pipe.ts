import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productStars'
})
export class ProductStarsPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    let _middleStar = [];
        for(let _elem in args[0]){
          _middleStar.push(Number(args[0][_elem]))
        }
        for (let i = 0; i < 5; i++) {
            args[1].children[i].classList.remove('appreciated')
            if(_middleStar.length > 0 && i < Math.round(_middleStar.reduce((a, b)=>a+b)/_middleStar.length))
            args[1].children[i].classList.add('appreciated')
        }
  }

}
