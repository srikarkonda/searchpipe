import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { SearchPipe } from "./pipe/search.pipe";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatTableModule, SearchPipe,FormsModule]
})
export class AppComponent {
  title = 'User Details';
  search:string=''
  users: User[] = [
    {
      firstName: 'John',
      lastName:'Doe',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2015-12-11')
    },
    {
      firstName: 'Amy',
      lastName: 'Watson',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2013-07-23'),
    },
    {
      firstName: 'Shrishti',
      lastName: 'Sharma',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2019-10-20'),
    }]
    dataSource = this.users;
    displayedColumns: string[] = ['firstName', 'lastName', 'dept', 'salary','doj'];
}

export interface User {
  firstName: string
  lastName: string
  dept: string
  salary: number
  doj: Date
}
