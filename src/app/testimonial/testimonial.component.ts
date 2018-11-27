import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls  : ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  desc_1        = 'It has helped us tremendously with connecting to eCommerce champions who can get our nextgenparcel.com message to decision makers and reduce their shopping cart abandonment rates. I recommend it highly, thank you for such a useful tool!';
  // tslint:disable-next-line:max-line-length
  desc_2 = 'We have used adapt.io for some time now as our primary email finding tool and found it to be outstanding. It is very easy to use, have a user-friendly interface, is fast and most of all, it is accurate. We have tried other competitors in this market and have found adapt.io to be significantly better than the rest and we recommend it for any business that needs their services.';
  // tslint:disable-next-line:max-line-length
  desc_3 = 'Adapt is a very powerful tool, and their pricing is insanely good compared to other lead generation software platforms. The LinkedIn tool is very helpful, but the Google Sheets Addon is even better and so unique. Or lead gen and prospecting team absolutely love this tool.';
  testimonail = [
    {
      'name'       : 'Melanie ter Bong',
      'role'       : 'Partner and Co-Founder',
      'description': this.desc_1,
      'img'        : 'assets/img/test-1.png',
      'leaf'       : 'assets/img/test-11.png'},
    {
      'name'       : 'Sean Keough',
      'role'       : 'Executive Director',
      'description': this.desc_2,
      'img'        : 'assets/img/test-2.png',
      'leaf'       : 'assets/img/test-22.png'
    },
    {
      'name'       : 'Benjamin Westbroek',
      'role'       : 'Sales & Marketing Specialist',
      'description': this.desc_3,
      'img'        : 'assets/img/test-3.png',
      'leaf'       : 'assets/img/test-33.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
