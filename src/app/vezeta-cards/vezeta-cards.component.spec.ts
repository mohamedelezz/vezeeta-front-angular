import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezetaCardsComponent } from './vezeta-cards.component';

describe('VezetaCardsComponent', () => {
  let component: VezetaCardsComponent;
  let fixture: ComponentFixture<VezetaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VezetaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VezetaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
