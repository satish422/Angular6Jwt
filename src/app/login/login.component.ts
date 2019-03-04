import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import {AuthService} from '../core/auth.service';
import {TokenStorage} from '../core/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, public dialog: MatDialog,
     private authService: AuthService, private token: TokenStorage) { }

  ngOnInit() {
  }

  username : string
  password : string

  login(): void {
    console.log(this.token.getToken());
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.result.token);
        this.router.navigate(['user']);
      }
    );
  }
}
