import { TestBed } from '@angular/core/testing';

import { ProductServiceHttp } from './product-service-http';

describe('ProductServiceHttp', () => {
  let service: ProductServiceHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
