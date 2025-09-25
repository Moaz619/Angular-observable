import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHttp } from './search-http';

describe('SearchHttp', () => {
  let component: SearchHttp;
  let fixture: ComponentFixture<SearchHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
