import { TestBed } from '@angular/core/testing';

import { AppDbProductsService } from './app-db-products.service';

describe('AppDbProductsService', () => {
  let service: AppDbProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDbProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
