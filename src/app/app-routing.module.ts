import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './signup/signup.component.';
import { CategoriesComponent } from './categories/categories.component';



const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'pages/home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
      { path: 'categories', component: CategoriesComponent },
  // outras rotas
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
