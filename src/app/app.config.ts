import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import loaderInterceptor from './shared/interceptors/loader/loader.interceptor';

import { provideClientHydration } from '@angular/platform-browser';
import { AdviceAPIService, LoaderService } from './shared';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: loaderInterceptor, multi: true },
    provideRouter(routes),
    AdviceAPIService,
    LoaderService
  ],
};
