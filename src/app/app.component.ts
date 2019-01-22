import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 0;
  fast = 100;
  toggle: any;
  constructor() {
  }
  ngOnInit() {

  }
  add() {
    this.title++;
  }
  togglefn(value) {
    console.log(value);
    this.toggle = value;
  }
}
