import {Component, OnInit} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {LangService} from "../../services/lang.service";
import {Lang} from "../../interfaces/lang"

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
export class LangPanelComponent implements OnInit {
  languages: Lang[] = [
    {languageName: 'English', languageCode: 'en'},
    {languageName: 'Русский', languageCode: 'ru'},
    {languageName: 'Тоҷикӣ', languageCode: 'tj'},
  ]
  activeLanguage?: string;

  constructor(private langService: LangService) {
  }

  ngOnInit(): void {
    this.activeLanguage = this.langService.activeLang;
  }


  changeLang(language: string): void {
    if (this.activeLanguage === language) {
      return;
    }
    this.activeLanguage = language;
  }
}
