import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-authorized',
  templateUrl: './un-authorized.component.html',
  styleUrls: ['./un-authorized.component.less']
})
export class UnAuthorizedComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login(): void {
    this.router.navigate(['login']);
  }
}
