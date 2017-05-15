import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComicBookComponent } from './edit-comic-book.component';

describe('EditComicBookComponent', () => {
  let component: EditComicBookComponent;
  let fixture: ComponentFixture<EditComicBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComicBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComicBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
