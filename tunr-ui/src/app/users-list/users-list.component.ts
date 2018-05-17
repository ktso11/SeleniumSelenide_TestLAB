import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../types/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((response) => {
        this.users = response;
      });
  }

  deleteUser(idToDelete: string, indexToDelete: number) {
    this.usersService.deleteUser(idToDelete)
      .subscribe((response) => {
        this.users.splice(indexToDelete, 1);
      });
  }

}
