import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {User} from './user.model';
import {UserService} from '../core/app.service';
import {Router} from '@angular/router';
import {TokenStorage} from '../core/token.storage';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource();
  constructor(private router: Router, private userService: UserService, private token: TokenStorage) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data.result;
      }
    );
  }

  logout(): void {
    this.token.signOut();
    this.router.navigate(['login']);
  }

}
