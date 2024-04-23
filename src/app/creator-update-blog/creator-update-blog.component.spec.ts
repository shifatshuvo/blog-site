import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorUpdateBlogComponent } from './creator-update-blog.component';

describe('CreatorUpdateBlogComponent', () => {
  let component: CreatorUpdateBlogComponent;
  let fixture: ComponentFixture<CreatorUpdateBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorUpdateBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatorUpdateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
