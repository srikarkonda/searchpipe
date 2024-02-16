import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../app.component';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: User[], keyword:string): User[] {
    let result:User[] = []
    value.forEach(data=>{
      if(data.firstName.toLowerCase().includes(keyword.toLowerCase()) || 
      data.lastName.toLowerCase().includes(keyword.toLowerCase()) || 
      data.dept.toLowerCase().includes(keyword.toLowerCase()) )
      {
        result.push(data)
      }
    })
    return result;
  }

}
