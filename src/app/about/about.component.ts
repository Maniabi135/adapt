import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about_data = [
    {
      'title': 'Exact Targeting',
      'icon': 'assets/img/icon-1.png',
      'desc': 'Advanced filters & Confidence Scores build powerful prospecting lists in seconds.'
    },
    {
      'title': 'Quality Records',
      'icon': 'assets/img/icon-2.png',
      'desc': 'The Adapt community of 100,000+ users contribute millions of quality contacts.'
    },
    {
      'title': 'Free Tools',
      'icon': 'assets/img/icon-3.png',
      'desc': 'The Adapt community of 100,000+ users contribute millions of quality contacts.'
    },
    {
      'title': 'No Bouncing',
      'icon': 'assets/img/icon-4.png',
      'desc': 'The Adapt community of 100,000+ users contribute millions of quality contacts.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}











