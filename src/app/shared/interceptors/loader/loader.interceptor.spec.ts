import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpInterceptorFn } from '@angular/common/http';

import { LoaderInterceptor } from './loader.interceptor';

describe('loaderInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => {
    const loaderInterceptor = TestBed.inject(LoaderInterceptor);
    const handler: HttpHandler = next as unknown as HttpHandler; // Convertir 'next' al tipo correcto
    return loaderInterceptor.intercept(req, handler);
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderInterceptor],
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
