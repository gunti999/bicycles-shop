import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketContentComponent } from './basket-content.component';

describe('BasketContentComponent', () => {
  let component: BasketContentComponent;
  let fixture: ComponentFixture<BasketContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
