import { Component } from '@angular/core';
import {IUser, UserRole, UserStatus} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: IUser[] = [
    {
      fullName: 'John Doe',
      role: 'user',
      status: 'active',
    }
  ]

  addUser(user: IUser) {
    this.users.push(user)
    console.log('New User Created: ', user);
  }

  changeStatus(status: UserStatus, index: number) {
    console.log('User status changed: ', status, index);
    this.users[index] = {...this.users[index], status};
  }

  changeRole(role: UserRole, index: number) {
    console.log('User role changed: ', role, index);
    this.users[index] = {...this.users[index], role};
  }
}
