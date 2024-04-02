import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
  // pure: false
})
export class ColorPipe implements PipeTransform {

  colors: any = ['red', 'green', 'yellow', 'pink', 'orange', 'red', 'green', 'yellow', 'pink', 'orange']

  transform(arg: string): string {
    return this.colors[this.random()];
  }

  random(): number {
    return Math.round(Math.random() * 10)
  }

}
