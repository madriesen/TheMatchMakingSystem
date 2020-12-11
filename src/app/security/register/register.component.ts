import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Router} from "@angular/router";
import { User } from 'src/app/models/user.model';
import { RegisterService } from 'src/app/services/register.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DatePipe],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private _registerService: RegisterService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  @Input() location: string;
  @Output() chooseLocation = new EventEmitter<string>();
  choose(l: string)
  {
    this.chooseLocation.emit(l);
  }


submitted: boolean= false
userModel: User =  new User();

register()
  {
    this.submitted = true;
    this.userModel.roleId = 1;
    this._registerService.register(this.userModel)

  }


}
