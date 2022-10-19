import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: unknown, pre: string = "Mr."): unknown {
    return `${pre} ${value}`;
  }

}
