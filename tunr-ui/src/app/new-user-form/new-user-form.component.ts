import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../types/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService, private router: Router) {
    this.user = new User();
  }

  createUser() {
    this.usersService.addNewUser(this.user)
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }

  ngOnInit() {
  }

}
