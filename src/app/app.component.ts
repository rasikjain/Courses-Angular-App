import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-app';
  post = {
    title: 'Title',
    isFavorite: true
  };
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  };

  onFavoriteChange(isFavorite) {
    console.log('Favorite Changed:', isFavorite);
  }
}
