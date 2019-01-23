import { Component , OnInit} from '@angular/core';
import { MyNewServiceService } from './my-new-service.service';
import { from } from 'rxjs';
import { MyNewEnum } from './my-new-enum.enum';
import {MyNewInterface } from './my-new-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 0;
  fast = 100;
  toggle: any;
  constructor(private modalService: MyNewServiceService ) {
    this.modalService.openInfoModal();
    console.log(MyNewEnum);
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
  openInfoModal() {
    this.modalService.openInfoModal();
  }
}
