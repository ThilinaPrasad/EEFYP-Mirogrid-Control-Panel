import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesSetComponent } from './sources-set.component';

describe('SourcesSetComponent', () => {
  let component: SourcesSetComponent;
  let fixture: ComponentFixture<SourcesSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
