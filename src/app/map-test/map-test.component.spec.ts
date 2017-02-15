/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapTestComponent } from './map-test.component';

describe('MapTestComponent', () => {
  let component: MapTestComponent;
  let fixture: ComponentFixture<MapTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
