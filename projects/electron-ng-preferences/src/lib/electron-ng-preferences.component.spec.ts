import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronNgPreferencesComponent } from './electron-ng-preferences.component';

describe('ElectronNgPreferencesComponent', () => {
  let component: ElectronNgPreferencesComponent;
  let fixture: ComponentFixture<ElectronNgPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronNgPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronNgPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
