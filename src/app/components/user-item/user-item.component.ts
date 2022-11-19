import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {IUser, UserRole, UserStatus} from "../../interfaces";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent implements OnChanges{
  @Input() user?: IUser;
  @Output() statusChanged: EventEmitter<UserStatus> = new EventEmitter<UserStatus>();
  @Output() roleChanged: EventEmitter<UserRole> = new EventEmitter<UserRole>();

  changeStatus(status: UserStatus) {
    console.log('Change Status: ', status);
    this.statusChanged.emit(status)
  }

  changeRole(role: UserRole) {
    console.log('Change role: ', role);
    this.roleChanged.emit(role)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
