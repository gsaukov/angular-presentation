import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliComponentComponent } from './cli-component.component';

describe('CliComponentComponent', () => {
  let component: CliComponentComponent;
  let fixture: ComponentFixture<CliComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CliComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
