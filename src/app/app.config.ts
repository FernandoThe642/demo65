import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideFirebaseApp(() =>
    initializeApp({"projectId":"demo54jfsr",
      "appId":"1:471651654620:web:2dc417e33ae7154f5dcd19",
      "storageBucket":"demo54jfsr.firebasestorage.app",
      "apiKey":"AIzaSyCqpge9hS-it45_Fm1R-TsFHSmsRFl9ze0",
      "authDomain":"demo54jfsr.firebaseapp.com",
      "messagingSenderId":"471651654620"})), provideFirestore(() => getFirestore())]
};
