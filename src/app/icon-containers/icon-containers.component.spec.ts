import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconContainersComponent } from './icon-containers.component';

describe('IconContainersComponent', () => {
  let component: IconContainersComponent;
  let fixture: ComponentFixture<IconContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconContainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
