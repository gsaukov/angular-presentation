import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ConclusionAppComponent } from './conclusion-app.component'

describe('ConclusionAppComponent', () => {
  let component: ConclusionAppComponent
  let fixture: ComponentFixture<ConclusionAppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConclusionAppComponent]
    })
    .compileComponents()
    
    fixture = TestBed.createComponent(ConclusionAppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
