import { Component, OnInit } from '@angular/core';
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

  private location: string;

  public setLocation(location: string): void {
    this.location = location;
  }

  public getLocation(): string {
    return this.location;
  }


submitted: boolean= false
userModel: User =  new User();

register()
  {
    this.submitted = true;
    this.userModel.roleId = 1;
    //this.userModel.dob = this.datePipe.transform('')
    this._registerService.register(this.userModel)
    
    console.log(this.userModel.dob)

  }


}
