import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';

@Component({
  selector: 'app-log-in-username',
  templateUrl: './log-in-username.component.html',
  styleUrls: ['./log-in-username.component.scss']
})
export class LogInUsernameComponent implements OnInit {

  constructor(public auth: AuthorizationService) { }

  ngOnInit(): void {
  }

}
