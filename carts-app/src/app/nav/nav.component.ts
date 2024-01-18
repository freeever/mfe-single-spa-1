import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  constructor(private languageService: LanguageService,
    private translateService: TranslateService) {}

    switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  showLangSwitchFor(lang: string): boolean {
    return this.translateService.currentLang !== lang;
  }

}
