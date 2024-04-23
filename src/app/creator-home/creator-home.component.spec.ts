import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorHomeComponent } from './creator-home.component';

describe('CreatorHomeComponent', () => {
  let component: CreatorHomeComponent;
  let fixture: ComponentFixture<CreatorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
