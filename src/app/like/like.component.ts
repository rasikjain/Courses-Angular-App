import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('likesCount') likesCount: number;
  // tslint:disable-next-line:no-input-rename
  @Input('isActive') isActive: boolean;

  onClick() {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
