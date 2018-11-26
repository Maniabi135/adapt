import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls  : ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  desc        = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  testimonail = [
    {
      'name'       : 'Melanie ter Bong',
      'role'       : 'Partner and Co-Founder',
      'description': this.desc,
      'img'        : 'assets/img/test-1.png',
      'leaf'       : 'assets/img/test-11.png'},
    {
      'name'       : 'Sean Keough',
      'role'       : 'Executive Director',
      'description': this.desc,
      'img'        : 'assets/img/test-2.png',
      'leaf'       : 'assets/img/test-22.png'
    },
    {
      'name'       : 'Benjamin Westbroek',
      'role'       : 'Sales & Marketing Specialist',
      'description': this.desc,
      'img'        : 'assets/img/test-3.png',
      'leaf'       : 'assets/img/test-33.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
