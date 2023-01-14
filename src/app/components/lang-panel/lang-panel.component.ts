import {Component} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {TranslateService} from "@ngx-translate/core";

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
  languages: Lang[] = [
    {languageName: 'English', languageCode: 'en'},
    {languageName: 'Русский', languageCode: 'ru'},
    {languageName: 'Тоҷикӣ', languageCode: 'tg'},
  ]
  activeLanguage: string;

  constructor(private translate: TranslateService) {
    this.activeLanguage = this.translate.store.currentLang;
  }

  changeLang(language: string): void {
    if (this.activeLanguage === language) {
      return;
    }
    this.activeLanguage = language;
    this.translate.use(this.activeLanguage);
  }
}

interface Lang {
  languageName: string,
  languageCode: string,
}
