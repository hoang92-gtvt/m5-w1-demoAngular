import { Component, OnInit } from '@angular/core';
export interface Pet{
  name?: String;
  image?: String;
}


@Component({
  selector: 'app-hoang',
  templateUrl: './hoang.component.html',
  styleUrls: ['./hoang.component.scss']
})
export class HoangComponent implements OnInit {
  public height:number = 10;
  public weight:number = 20;
  public area = this.height*this.weight;
  constructor() { }

  ngOnInit(): void {
  }

}
