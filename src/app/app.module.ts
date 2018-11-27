import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    ChangePasswordComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
