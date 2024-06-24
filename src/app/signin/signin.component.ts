import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [MessageService]
})
export class SigninComponent implements OnInit {
  error = '';
  loginForm!: FormGroup;
  loading = false;
  returnUrl!: string;
  submitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    if (this.authService.userValue) {
      this.router.navigate(['pages/home']);
    }
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.authService.login(this.f['username'].value, this.f['password'].value)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Signin Successful' });
          setTimeout(() => {
            this.router.navigate(['pages/home']);
          }, 2000);
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Signin Failed' });
          this.loading = false;
        });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Pegar a URL de retorno dos parâmetros da rota ou definir para a página inicial
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'pages/home';
  }
}
