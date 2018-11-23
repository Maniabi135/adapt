import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls  : ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  number     = 25;
  alphabet   = [];
  industries = [
    'Business Services',
    'Education',
    'Financial Services',
    'Government',
    'Healthcare',
    'Pharmaceuticals & Biotech',
    'Manufacturing',
    'Real Estate & Construction',
    'Retail Software & Internet',
    'Telecommunications'
  ];

  footer_dir_list: any = [
    {
      'name': 'Contact Directory',
      'data': this.alphabet
    },
    {
      'name': 'Top Industries',
      'data': this.industries
    }
  ];

  footer_logo_list: any = [
    'Free Tools',
    'Enterprise',
    'Terms of Service',
    'Pricing',
    'About Us',
    'Privacy Policy',
    'FAQ',
    'Careers',
    'Blog'
  ];


  constructor() {
    for (let i = 0; i <= this.number; i++) {
      const char = String.fromCharCode(65 + i);
      this.alphabet.push(char);
    }
  }

  ngOnInit() {
  }



}
