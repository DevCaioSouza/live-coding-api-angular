import { Component, inject } from '@angular/core';
import { UsersTableComponent } from "../users-table/users-table.component";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [UsersTableComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  private dataService = inject(DataService)

  data: any

  ngOnInit(): void {
    this.dataService.getUserList().subscribe(res => {
      this.data = res
      console.table(res)
    })
  }
}
