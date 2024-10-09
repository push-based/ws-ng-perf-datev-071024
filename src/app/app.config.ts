import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFastSVG } from '@push-based/ngx-fast-svg';

import { routes } from './app.routes';
import { readAccessInterceptor } from './read-access.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(), withInterceptors([readAccessInterceptor])),
    provideRouter(routes),
    provideFastSVG({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
      defaultSize: '12',
    }),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://image.tmdb.org/t/p/w${config.width ?? 300}${config.src}`;
      },
    },
    provideExperimentalZonelessChangeDetection(),
    // provideClientHydration(withEventReplay()),
  ],
};
