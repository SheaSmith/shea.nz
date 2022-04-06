import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BootstrapComponentsComponent } from './bootstrap-components/bootstrap-components.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'bootstrap',
    component: BootstrapComponentsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
