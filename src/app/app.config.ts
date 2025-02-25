import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // ✅ Enable fetch API
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ Optional, for smoother UI

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), // ✅ Enables fetch API for better performance
    provideAnimations() // ✅ Optional: Angular animations support
  ]
};
