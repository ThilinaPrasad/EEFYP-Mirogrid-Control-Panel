import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalResultsPageComponent } from './operational-results-page.component';

describe('OperationalResultsPageComponent', () => {
  let component: OperationalResultsPageComponent;
  let fixture: ComponentFixture<OperationalResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
