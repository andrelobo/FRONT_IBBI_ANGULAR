import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: string | null = null;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.signupForm.value).subscribe(
      (response: any) => {
        console.log('Usuário registrado com sucesso:', response);
        this.router.navigate(['/login']);
        this.loading = false;
      },
      (error: any) => {
        this.error = `Erro ao registrar: ${error}`;
        console.error(this.error);
        this.loading = false;
      }
    );
  }
}
