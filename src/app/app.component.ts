import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor() {}

  ngOnInit() {
    console.log('Remove Duplicate:' + this.removeDuplicates('welcome'));
    console.log('Reverse:' + this.reverseString('welcome'));
  }

  removeDuplicates(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      if (result.indexOf(str[i]) < 0) {
        result += str[i];
      }
    }
    return result;
  }

  reverseString(str) {
    return str.split('').reverse().join('');
  }
}
