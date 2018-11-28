import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls  : ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  nav_head_list = ['Free Tools', 'Enterprise', 'Pricing', 'About', 'Blog', 'Get a Demo', 'Create FREE account', 'Sign In'];
  btn_list      = ['Sign Up.It\'s free!', 'Get a Demo'];
  logo          = ['assets/img/forbes.png', 'assets/img/nbc.png', 'assets/img/forbes.png', 'assets/img/nbc.png', 'assets/img/forbes.png' ]
  constructor() { }

  ngOnInit() {
  }

}
