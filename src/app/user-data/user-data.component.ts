import { Component, inject, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-data',
  imports: [],
  standalone: true,
  template: `
    <p>This component serves only to cache the user data that comes from the api,
      and then store it on a "data" variable, which is an observer
    </p>
  `
})
export class UserDataComponent implements OnInit {

  private dataService = inject(DataService)

  @Output() data: any

  //variable that stores data


  ngOnInit(): void {
    this.dataService.getUserList().subscribe(res => this.data = res)
  }

}
