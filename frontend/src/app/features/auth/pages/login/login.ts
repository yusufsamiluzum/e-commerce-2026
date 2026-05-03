import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { DemoFillComponent, DemoAccount } from '../../../../shared/components/demo-fill/demo-fill.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, DemoFillComponent],
  templateUrl: './login.html',
})
export class LoginComponent {
  activeTab: 'individual' | 'corporate' = 'individual';
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);
  
  errorMsg = '';
  isLoading = false;

  individualForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  corporateForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  readonly pass = '123Pa$$word!';

  individualDemoAccounts: DemoAccount[] = [
    { label: 'Müşteri 1', values: { email: 'customer1@test.com', password: this.pass } },
    { label: 'Müşteri 2', values: { email: 'customer2@test.com', password: this.pass } },
    { label: 'Müşteri 3', values: { email: 'customer3@test.com', password: this.pass } },
  ];

  corporateDemoAccounts: DemoAccount[] = [
    { label: 'Satıcı 1', values: { email: 'seller1@test.com', password: this.pass } },
    { label: 'Satıcı 2', values: { email: 'seller2@test.com', password: this.pass } },
    { label: 'Satıcı 3', values: { email: 'seller3@test.com', password: this.pass } },
  ];

  switchTab(tab: 'individual' | 'corporate') {
    this.activeTab = tab;
    this.errorMsg = '';
  }

  onSubmit() {
    this.errorMsg = '';
    
    if (this.activeTab === 'individual') {
      if (this.individualForm.invalid) return;
      this.isLoading = true;
      this.authService.loginIndividual(this.individualForm.value).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/catalog']);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMsg = err.error?.message || 'Giriş başarısız. Bilgilerinizi kontrol ediniz.';
        }
      });
    } else {
      if (this.corporateForm.invalid) return;
      this.isLoading = true;
      this.authService.loginCorporate(this.corporateForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.hasStore) {
            this.router.navigate(['/corporate']);
          } else {
            this.router.navigate(['/corporate/store-setup']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMsg = err.error?.message || 'Kurumsal giriş başarısız. Bilgilerinizi kontrol ediniz.';
        }
      });
    }
  }
}

