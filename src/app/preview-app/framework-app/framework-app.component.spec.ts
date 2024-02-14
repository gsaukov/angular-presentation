import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkAppComponent } from './framework-app.component';

describe('FrameworkAppComponent', () => {
  let component: FrameworkAppComponent;
  let fixture: ComponentFixture<FrameworkAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworkAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameworkAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
