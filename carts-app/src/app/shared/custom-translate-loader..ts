import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { assetUrl } from '../../single-spa/asset-url';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  public getTranslation(lang: string): Observable<any> {
    const path = assetUrl(`/i18n/${lang}.json`);
    return this.http.get(path);
  }
}