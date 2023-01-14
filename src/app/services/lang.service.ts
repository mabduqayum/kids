import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangService {
  activeLang = 'en';

  constructor(private translate: TranslateService) {
    // Add languages
    translate.addLangs(['en', 'ru', 'tg']);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // get browser lang
    const browserLang = translate.getBrowserLang();
    if (browserLang) {
      this.activeLang = browserLang;
    }

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.activeLang);
  }

  changeLang(lang: string): void {
    if (this.activeLang === lang) {
      return;
    }
    this.activeLang = lang;
    this.translate.use(this.activeLang);
  }
}
