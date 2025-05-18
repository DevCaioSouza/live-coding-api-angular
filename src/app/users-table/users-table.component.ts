import { Component } from '@angular/core';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-users-table',
  imports: [UserDataComponent],
  standalone: true,
  template: `

      <table class="users-table">

        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        <tr>
          <td>1</td>
          <td>Carlos</td>
          <td>carlos.bol</td>
        </tr>

      </table>

  `,
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent {



}
