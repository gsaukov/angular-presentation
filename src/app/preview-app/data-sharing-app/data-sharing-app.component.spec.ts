import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DataSharingAppComponent } from './data-sharing-app.component'

describe('DataSharingAppComponent', () => {
  let component: DataSharingAppComponent
  let fixture: ComponentFixture<DataSharingAppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSharingAppComponent]
    })
    .compileComponents()
    
    fixture = TestBed.createComponent(DataSharingAppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
