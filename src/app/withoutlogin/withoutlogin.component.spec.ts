import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutloginComponent } from './withoutlogin.component';

describe('WithoutloginComponent', () => {
  let component: WithoutloginComponent;
  let fixture: ComponentFixture<WithoutloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
