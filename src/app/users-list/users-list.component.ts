import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input() userList: any

  @Output() deleteOrder = new EventEmitter<number>()

  showList: boolean = false

  toggleList() {
    this.showList = !this.showList
  }

  emitDeleteOrder(userItem: number) {
    this.deleteOrder.emit(userItem)
    console.log(userItem)
  }

}
