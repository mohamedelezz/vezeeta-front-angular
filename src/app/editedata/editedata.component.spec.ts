import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedataComponent } from './editedata.component';

describe('EditedataComponent', () => {
  let component: EditedataComponent;
  let fixture: ComponentFixture<EditedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
