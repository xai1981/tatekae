/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppFormComponent } from './app-form.component';
import { AccountComponent } from '../account/account.component';
import { AccountService } from '../../services/account.service';

describe('AppFormComponent', () => {
  let component: AppFormComponent;
  let fixture: ComponentFixture<AppFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountService,
      ]
      declarations: [
        AppFormComponent,
        AccountComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
