import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpositionsComponent } from './jobpositions.component';

describe('JobpositionsComponent', () => {
  let component: JobpositionsComponent;
  let fixture: ComponentFixture<JobpositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobpositionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobpositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
