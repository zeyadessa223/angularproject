import { Component } from '@angular/core';
import { UserchartComponent } from '../userchart/userchart.component';
import { UserratesComponent } from '../userrates/userrates.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserchartComponent, UsersComponent, UserratesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
