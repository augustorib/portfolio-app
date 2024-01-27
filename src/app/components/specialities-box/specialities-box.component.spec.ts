import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitiesBoxComponent } from './specialities-box.component';

describe('SpecialitiesBoxComponent', () => {
  let component: SpecialitiesBoxComponent;
  let fixture: ComponentFixture<SpecialitiesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialitiesBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialitiesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
