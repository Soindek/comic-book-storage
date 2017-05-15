import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl, FormArray, Validators, FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';

import {Comic} from '../shared/comic';
import {HttpService} from '../shared/http.service';

@Component({
  selector: 'app-comic-book-edit',
  templateUrl: './edit-comic-book.component.html',
  styleUrls: ['./edit-comic-book.component.css']
})
export class EditComicBookComponent implements OnInit {
  id: number;
  editMode = false;
  comicForm: FormGroup;
  isMultiple = false;
  writers = ['Al Feldstein', 'Dennis O\'Neil', 'Edmond Hamilton', 'Gardner Fox', 'Jack Kirby', 'Jim Shooter', 'Joe Gill',
             'John Byrne', 'Otto Binder', 'Roy Thomas', 'Stan Lee', 'Steve Ditko'];
  formErrors = {
    'title': '',
    'coverUrl': '',
    'publicationDate': '',
    'writers': ''
  };
  validationMessages = {
    'title': {
      'required':   'Title is required.',
      'minlength':  'Title must be at least 10 characters long.',
      'maxlength':  'Title cannot be more than 255 characters long.'
    },
    'coverUrl': {
      'required':   'Cover photo URL is required.',
      'pattern':    'Must be a valid URL, please check it.'
    },
    'publicationDate': {
      'required':   'Publication Date is required.'
    },
    'writers': {
      'required':   'Must be choose least one writer.'
    }
  };

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private location: Location,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm(new Comic(null, '', '', '', [], '', '', ''));  // random
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          if (this.editMode) {
            this.httpService.getComic(this.id).then((comic: Comic) => this.updateFormValues(comic));
          }
        }
      );
    /*this.comicForm = this.builder.group({
      'writers': [null, Validators.compose([Validators.required, Validators.pattern('.+')])]
    });*/
    this.comicForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.comicForm) { return; }
    const form = this.comicForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    if (this.editMode) {
      this.httpService.update(this.initComic());
    } else {
      this.httpService.create(this.initComic());
    }
    this.goBack();
  }

  private initComic(): Comic {
    let id: number = this.comicForm.get('id').value;
    let title: string = this.comicForm.get('title').value;
    let coverUrl: string = this.comicForm.get('coverUrl').value;
    let publicationDate: string = this.comicForm.get('publicationDate').value;
    // let writers: string[] = (<FormArray>this.comicForm.get('writers')).controls.map((control: FormControl) => control.value);
    let publisher: string = this.comicForm.get('publisher').value;
    let genre: string = this.comicForm.get('genre').value;
    let excerpt: string = this.comicForm.get('excerpt').value;
    return new Comic(id, title, coverUrl, publicationDate, [], publisher, genre, excerpt);
  }

  goBack(): void {
    this.location.back();
  }

  delComic(): void {
    this.httpService
      .delete(this.id)
      .then(() => {
        this.goBack();
      });
  }

  private updateFormValues(comic: Comic): void {
    this.comicForm.get('id').setValue(comic.id);
    this.comicForm.get('title').setValue(comic.title);
    this.comicForm.get('coverUrl').setValue(comic.coverUrl);
    this.comicForm.get('publicationDate').setValue(comic.publicationDate);
    this.comicForm.get('writers').setValue(comic.writtenBy);
    this.comicForm.get('publisher').setValue(comic.publisher);
    this.comicForm.get('genre').setValue(comic.genre);
    this.comicForm.get('excerpt').setValue(comic.excerpt);
  }

  private initForm(comic: Comic): void {

    const regexForUrl = '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?';

    this.comicForm = new FormGroup({
      'id': new FormControl(comic.id),
      'title': new FormControl(comic.title, [
        Validators.minLength(10),
        Validators.maxLength(255)
      ]),
      'coverUrl': new FormControl(comic.coverUrl, [
        Validators.pattern(regexForUrl)
      ]),
      'publicationDate': new FormControl(comic.publicationDate),
      // 'writers': new FormArray([null, Validators.compose([Validators.required,Validators.pattern('.+')])]),
      'writers': new FormControl(comic.writtenBy),
      // 'writers': new FormArray(comic.writtenBy, Validators.required),
      // 'writers': new FormArray(comic.writtenBy.map((writer: string) => new FormControl(writer)), Validators.required),
      'publisher': new FormControl(comic.publisher),
      'genre': new FormControl(comic.genre),
      'excerpt': new FormControl(comic.excerpt)
    });

    this.builder.group(this.comicForm);
  }


}
