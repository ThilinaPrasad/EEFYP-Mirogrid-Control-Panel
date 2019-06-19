import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsSetComponent } from './agents-set.component';

describe('AgentsSetComponent', () => {
  let component: AgentsSetComponent;
  let fixture: ComponentFixture<AgentsSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
