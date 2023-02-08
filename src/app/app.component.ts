import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kids';

  constructor(private translate: TranslateService) {
    // Add languages
    translate.addLangs(['en', 'ru', 'tg']);

    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');

    // get browser lang
    const browserLang = translate.getBrowserLang() ?? 'en';

    // get lang from localstorage if available
    const langInStorage = localStorage.getItem('lang') ?? browserLang;

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(langInStorage);

    // update local storage when language changed
    translate.onLangChange.subscribe((langEvent) => {
      localStorage.setItem('lang', langEvent.lang);
    })
  }
}
