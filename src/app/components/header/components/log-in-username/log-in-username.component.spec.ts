import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInUsernameComponent } from './log-in-username.component';

describe('LogInUsernameComponent', () => {
  let component: LogInUsernameComponent;
  let fixture: ComponentFixture<LogInUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
