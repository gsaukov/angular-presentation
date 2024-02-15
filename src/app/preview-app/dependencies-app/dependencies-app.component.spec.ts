import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciesAppComponent } from './dependencies-app.component';

describe('DependenciesAppComponent', () => {
  let component: DependenciesAppComponent;
  let fixture: ComponentFixture<DependenciesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependenciesAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependenciesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
