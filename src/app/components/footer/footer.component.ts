import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public thisYear:number = null;
  public copyYear        = {};
  constructor() { }

  ngOnInit() {
    this.thisYear = new Date().getUTCFullYear()
    this.copyYear["year"] = this.thisYear;
  }

}
