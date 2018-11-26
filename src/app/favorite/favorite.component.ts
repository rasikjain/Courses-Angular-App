import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('is-Favorite') isFavorite: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isFavorite = !this.isFavorite;
    console.log('event clicked');
    this.click.emit(this.isFavorite);
  }
}
