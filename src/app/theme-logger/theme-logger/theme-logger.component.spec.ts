import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLoggerComponent } from './theme-logger.component';

describe('ThemeLoggerComponent', () => {
  let component: ThemeLoggerComponent;
  let fixture: ComponentFixture<ThemeLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
