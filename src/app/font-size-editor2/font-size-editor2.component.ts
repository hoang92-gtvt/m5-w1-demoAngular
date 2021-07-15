import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor2',
  templateUrl: './font-size-editor2.component.html',
  styleUrls: ['./font-size-editor2.component.scss']
})
export class FontSizeEditor2Component implements OnInit {
  fontSize2 = 20;
  constructor() { }

  ngOnInit(): void {
  }
  changeFontSize(fontSize: any){
      this.fontSize2 = fontSize;
  }
}
