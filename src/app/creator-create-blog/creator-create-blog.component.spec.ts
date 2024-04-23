import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorCreateBlogComponent } from './creator-create-blog.component';

describe('CreatorCreateBlogComponent', () => {
  let component: CreatorCreateBlogComponent;
  let fixture: ComponentFixture<CreatorCreateBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorCreateBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatorCreateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
