import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserRole} from "../../../../interfaces";
import {UserService} from "../../../../services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {

  constructor(
    private userService: UserService
  ) {
  }

  addUserHandler(form: NgForm) {
    form.form.markAsTouched()
    if (form.invalid) return;
    const {fullName, role} = form.value;
    this.userService.addUser({
      fullName: fullName,
      role: role as UserRole,
      status: 'inactive'
    })
    form.reset()
  }

}
