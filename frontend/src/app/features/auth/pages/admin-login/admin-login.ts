import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { DemoFillComponent, DemoAccount } from '../../../../shared/components/demo-fill/demo-fill.component';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, DemoFillComponent],
  templateUrl: './admin-login.html',
})
export class AdminLoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);
  
  errorMsg = '';
  isLoading = false;

  adminForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  adminDemoAccounts: DemoAccount[] = [
    { label: 'Admin', values: { email: 'admin@test.com', password: '123Pa$$word!' } },
  ];

  onSubmit() {
    this.errorMsg = '';
    if (this.adminForm.invalid) return;
    
    this.isLoading = true;
    this.authService.loginAdmin(this.adminForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err.error?.message || 'Yetkisiz erişim. Lütfen bilgilerinizi kontrol ediniz.';
      }
    });
  }
}

