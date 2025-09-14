import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertosPage } from './conciertos-page';

describe('ConciertosPage', () => {
  let component: ConciertosPage;
  let fixture: ComponentFixture<ConciertosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciertosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciertosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
