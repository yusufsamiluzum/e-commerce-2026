import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  activeTab = signal<'INDIVIDUAL' | 'CORPORATE'>('INDIVIDUAL');
  isLoading = signal(false);
  errorMessage = signal('');

  individualForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  corporateForm: FormGroup = this.fb.group({
    companyName: ['', Validators.required],
    taxId: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  setTab(tab: 'INDIVIDUAL' | 'CORPORATE') {
    this.activeTab.set(tab);
    this.errorMessage.set('');
  }

  onSubmit() {
    if (this.activeTab() === 'INDIVIDUAL' && this.individualForm.invalid) return;
    if (this.activeTab() === 'CORPORATE' && this.corporateForm.invalid) return;

    this.isLoading.set(true);
    this.errorMessage.set('');

    if (this.activeTab() === 'INDIVIDUAL') {
      this.authService.registerIndividual(this.individualForm.value).subscribe({
        next: () => {
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.errorMessage.set(err.error?.message || 'Registration failed. Check your data.');
          this.isLoading.set(false);
        },
        complete: () => this.isLoading.set(false)
      });
    } else {
      this.authService.registerCorporate(this.corporateForm.value).subscribe({
        next: () => {
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.errorMessage.set(err.error?.message || 'Registration failed. Check your data.');
          this.isLoading.set(false);
        },
        complete: () => this.isLoading.set(false)
      });
    }
  }
}