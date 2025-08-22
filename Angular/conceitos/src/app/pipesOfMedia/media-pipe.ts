import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {

  transform(value: any,): unknown {
    
    return null;
  }

}
