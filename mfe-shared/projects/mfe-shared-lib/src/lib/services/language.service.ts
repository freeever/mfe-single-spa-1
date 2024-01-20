import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  DEFAULT_LANGUAGE: string = 'en';
  LANGUAGE_CACHE: string = 'mfe-language';

  private currentLang$: BehaviorSubject<string>;

  constructor() {
    // Check if there is a language stored in localStorage
    const storedLang = localStorage.getItem(this.LANGUAGE_CACHE);
    
    // Initialize the BehaviorSubject with the stored language or default to 'en'
    this.currentLang$ = new BehaviorSubject<string>(storedLang || this.DEFAULT_LANGUAGE);
  }

  setLanguage(lang: string) {
    this.currentLang$.next(lang);
    localStorage.setItem(this.LANGUAGE_CACHE, lang);
  }

  getLanguage() {
    return this.currentLang$.asObservable();
  }
}