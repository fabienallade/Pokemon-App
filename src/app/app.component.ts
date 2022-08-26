import {AfterViewInit, Component} from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'pokemon';

  constructor() {

  }

  ngAfterViewInit() {
    M.AutoInit()
  }


  logout() {

  }
}
