import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicBookListComponent } from './comic-book-list.component';

describe('ComicBookListComponent', () => {
  let component: ComicBookListComponent;
  let fixture: ComponentFixture<ComicBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
