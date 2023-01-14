import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.warnMobileUsers();
  }

  private warnMobileUsers(): void {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      return;
    }
    alert('This website is only intended for desktop use only!!!')
  }
}
