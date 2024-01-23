import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './../../../mfe-shared/projects/mfe-shared-lib/src/lib/services/language.service';
import { Component, DestroyRef, inject } from '@angular/core';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  destroyRef = inject(DestroyRef);

  constructor(private languageService: LanguageService,
    private translateService: TranslateService) {
      this.initLanguage();
    }

    switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  showLangSwitchFor(lang: string): boolean {
    return this.translateService.currentLang !== lang;
  }

  gotoApp(url: string): void {
    navigateToUrl(url);
  }

  initLanguage(): void {
    this.languageService.getLanguage().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(lang => {
      this.translateService.setDefaultLang(lang);
      this.translateService.use(lang)
    })
  }}
