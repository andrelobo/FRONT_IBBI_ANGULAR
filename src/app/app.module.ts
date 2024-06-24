import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component.';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './pages/home/home.component'; // Import HomeComponent
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AuthService } from './services/auth.service';
import { DividerModule } from 'primeng/divider';


const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'pages/home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
      { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    DividerModule
  ],
  providers: [MessageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
