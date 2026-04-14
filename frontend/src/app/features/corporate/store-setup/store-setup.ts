import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CorporateService } from '../services/corporate.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-store-setup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './store-setup.html'
})
export class StoreSetup {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private corporateService = inject(CorporateService);
  private authService = inject(AuthService);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  storeForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    description: [''],
    baseCurrency: ['USD', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
  });

  currencies = [
    { code: 'USD', label: 'US Dollar ($)' },
    { code: 'EUR', label: 'Euro (€)' },
    { code: 'TRY', label: 'Turkish Lira (₺)' },
    { code: 'GBP', label: 'British Pound (£)' },
    { code: 'JPY', label: 'Japanese Yen (¥)' }
  ];

  onSubmit() {
    if (this.storeForm.invalid) return;

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.corporateService.createStore(this.storeForm.value).subscribe({
      next: () => {
        this.successMessage.set('Mağazanız başarıyla oluşturuldu! Yönlendiriliyorsunuz...');
        // hasStore durumunu güncelle
        this.authService.hasStore.set(true);
        localStorage.setItem('has_store', 'true');
        
        setTimeout(() => {
          this.router.navigate(['/corporate/dashboard']);
        }, 1500);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.error?.message || 'Mağaza oluşturulurken bir hata oluştu.');
      }
    });
  }
}
