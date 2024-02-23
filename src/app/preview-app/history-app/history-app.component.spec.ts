import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HistoryAppComponent } from './history-app.component'

describe('HistoryAppComponent', () => {
  let component: HistoryAppComponent
  let fixture: ComponentFixture<HistoryAppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryAppComponent]
    })
    .compileComponents()
    
    fixture = TestBed.createComponent(HistoryAppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
