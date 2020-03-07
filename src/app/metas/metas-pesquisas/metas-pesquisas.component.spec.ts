import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasPesquisasComponent } from './metas-pesquisas.component';

describe('MetasPesquisasComponent', () => {
  let component: MetasPesquisasComponent;
  let fixture: ComponentFixture<MetasPesquisasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasPesquisasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasPesquisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
