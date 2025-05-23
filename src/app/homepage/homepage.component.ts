import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersTableComponent } from "../users-table/users-table.component";
import { DataService } from '../services/data.service';
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { UsersListComponent } from "../users-list/users-list.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, UsersTableComponent, RegistrationFormComponent, UsersListComponent, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  private dataService = inject(DataService)

  data$: any[] = []

  onDeleteItem(value: number) {
    const newData$ = this.data$.filter(obj => obj.id !== value)
    this.data$ = newData$
    console.log('Valor recebido: ', value)
    console.log('valor do newData$: ', newData$)
  }

  onAddUser(value: any){
    value.id = 1
    this.data$.unshift(value)
    console.log(value)
  }

  ngOnInit(): void {
    this.dataService.getUserList().subscribe(res => {
      this.data$ = res
      console.log(res)
    })
  }

}
