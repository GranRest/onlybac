import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasgComponent } from './cuentasg.component';

describe('CuentasgComponent', () => {
  let component: CuentasgComponent;
  let fixture: ComponentFixture<CuentasgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentasgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
