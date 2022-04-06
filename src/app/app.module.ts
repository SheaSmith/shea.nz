import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BootstrapComponentsComponent } from './bootstrap-components/bootstrap-components.component';
import { ThemingService } from './services/theming.service';
import { Win95HomeComponent } from './themes/win95/win95-home/win95-home.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { Win95NotFoundComponent } from './themes/win95/win95-not-found/win95-not-found.component';
import { MedievalHomeComponent } from './themes/medieval/medieval-home/medieval-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    BootstrapComponentsComponent,
    Win95HomeComponent,
    Win95NotFoundComponent,
    MedievalHomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(
      {
        sanitize: SecurityContext.NONE,
        markedOptions: {
          provide: MarkedOptions,
          useFactory: markedOptionsFactory,
        },
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [
    ThemingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  renderer.table = (header: string, body: string) => {
    return `<table class="table"><thead>${header}</thead><tbody>${body}</tbody></table>`
  };

  renderer.checkbox = (checked: boolean) => {
    return `<div class="custom-control custom-checkbox" style="display: inline"><input type="checkbox" ${checked ? 'checked' : ''} class="custom-control-input"><label class="custom-control-label"></label></div>`
  }
  
  renderer.image = (href: string, title: string, text: string) => {
    return `<img src="${href}" alt="${text}" title="${title}" class="img-fluid" />`
  }

  return {
    renderer: renderer,
  };
}