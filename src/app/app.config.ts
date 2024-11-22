import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideHotToastConfig } from '@ngneat/hot-toast';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), 
    provideAnimationsAsync(), provideHotToastConfig(),
    provideFirebaseApp(() => initializeApp({"projectId":"angular-sign-up-924c5","appId":"1:926289436096:web:ac1c775079605fb72bbc25","storageBucket":"angular-sign-up-924c5.firebasestorage.app","apiKey":"AIzaSyBie59OO05qtl0wix_uqaUb8X1wQQ0cRrY","authDomain":"angular-sign-up-924c5.firebaseapp.com","messagingSenderId":"926289436096"})), provideAuth(() => getAuth())]
};