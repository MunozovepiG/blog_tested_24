import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

close: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.close =! this.close
  }

}
