import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPesquisasComponent } from './categoria-pesquisas.component';

describe('CategoriaPesquisasComponent', () => {
  let component: CategoriaPesquisasComponent;
  let fixture: ComponentFixture<CategoriaPesquisasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaPesquisasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaPesquisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
