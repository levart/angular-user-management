import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser, UserRole} from "../../interfaces";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserComponent {
  @Output() addUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  addUserHandler(fullName: string, role: string){
    if(!fullName || !role) return;

    this.addUser.emit({
      fullName: fullName,
      role: role as UserRole,
      status: 'inactive'
    })

    console.log('New User Created: ', fullName, role);
  }

}
