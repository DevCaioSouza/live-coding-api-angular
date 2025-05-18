import { Component } from '@angular/core';
import { UsersTableComponent } from "../users-table/users-table.component";

@Component({
  selector: 'app-homepage',
  imports: [UsersTableComponent],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
