import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { PostComponent } from './components/posts/post/post.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { NewPostModule } from './components/posts/new-post/new-post.module';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewPostModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
