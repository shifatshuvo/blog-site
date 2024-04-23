import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorAuthComponent } from './creator-auth.component';

describe('CreatorAuthComponent', () => {
  let component: CreatorAuthComponent;
  let fixture: ComponentFixture<CreatorAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
