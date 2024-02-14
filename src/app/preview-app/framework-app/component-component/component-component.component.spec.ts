import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComponentComponent } from './component-component.component';

describe('ComponentComponentComponent', () => {
  let component: ComponentComponentComponent;
  let fixture: ComponentFixture<ComponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
