import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInContentComponent } from './log-in-content.component';

describe('LogInContentComponent', () => {
  let component: LogInContentComponent;
  let fixture: ComponentFixture<LogInContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
