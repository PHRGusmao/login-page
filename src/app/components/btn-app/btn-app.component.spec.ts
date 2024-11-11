import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAppComponent } from './btn-app.component';

describe('BtnAppComponent', () => {
  let component: BtnAppComponent;
  let fixture: ComponentFixture<BtnAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
