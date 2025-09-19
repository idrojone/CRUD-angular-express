import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConciertos } from './add-conciertos';

describe('AddConciertos', () => {
  let component: AddConciertos;
  let fixture: ComponentFixture<AddConciertos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConciertos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConciertos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
