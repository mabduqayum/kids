import {Component} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'lang-panel',
  templateUrl: './lang-panel.component.html',
  styleUrls: ['./lang-panel.component.scss'],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    NgForOf
  ],
  standalone: true
})
export class LangPanelComponent {
  languages = ['English', 'Русский', 'Тоҷикӣ',]
  activeLanguage = 'English';

  changeLang(language: string): void {
    if (this.activeLanguage === language) {
      return;
    }
    this.activeLanguage = language;
  }
}
