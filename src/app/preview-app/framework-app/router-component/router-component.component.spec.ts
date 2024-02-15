import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterComponentComponent } from './router-component.component';

describe('RouterComponentComponent', () => {
  let component: RouterComponentComponent;
  let fixture: ComponentFixture<RouterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
