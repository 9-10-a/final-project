import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElogComponent } from './elog.component';

describe('ElogComponent', () => {
  let component: ElogComponent;
  let fixture: ComponentFixture<ElogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
