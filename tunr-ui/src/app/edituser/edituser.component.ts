import { User } from './../types/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  sub: Subscription;
  id: any;
  user: User;
  constructor(private usersService: UsersService,private router:Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.usersService.get(id)
      .subscribe(response => this.user = response)
      console.log(`Grabbed '${id}'`);
    });

  }

    edit() {
      console.log(this.user)
      this.usersService.editUser(this.user)
    
        .subscribe((response) => {
          this.router.navigate(['/']);
        });
    }

}
