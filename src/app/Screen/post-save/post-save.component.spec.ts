import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PostSaveComponent} from './post-save.component';

describe('PostSaveComponent', () => {
  let component: PostSaveComponent;
  let fixture: ComponentFixture<PostSaveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PostSaveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
