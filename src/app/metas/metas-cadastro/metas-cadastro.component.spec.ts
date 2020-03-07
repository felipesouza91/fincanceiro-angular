import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasCadastroComponent } from './metas-cadastro.component';

describe('MetasCadastroComponent', () => {
  let component: MetasCadastroComponent;
  let fixture: ComponentFixture<MetasCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
