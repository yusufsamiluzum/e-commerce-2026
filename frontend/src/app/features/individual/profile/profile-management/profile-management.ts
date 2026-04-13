import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService, UserProfileUpdateRequest } from '../../../../core/services/user.service';

@Component({
  selector: 'app-profile-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-management.html'
})
export class ProfileManagement implements OnInit {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  profileForm!: FormGroup;

  // signal tabanlı state — null: yükleniyor, false: hazır
  isLoading = signal<boolean>(true);
  isSaving  = signal<boolean>(false);
  saveSuccess = signal<boolean>(false);
  saveError   = signal<string>('');

  ngOnInit() {
    this.profileForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      gender:   ['MALE'],
      age:      [null, [Validators.min(18), Validators.max(120)]],
      city:     ['']
    });

    this.userService.getProfile().subscribe({
      next: (profile) => {
        this.profileForm.patchValue({
          fullName: profile.fullName,
          gender:   profile.gender || 'MALE',
          age:      profile.age,
          city:     profile.city
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.saveError.set('Profil bilgileri yüklenirken bir hata oluştu.');
        this.isLoading.set(false);
      }
    });
  }

  onSubmit() {
    if (this.profileForm.invalid || this.isSaving()) return;

    this.isSaving.set(true);
    this.saveSuccess.set(false);
    this.saveError.set('');

    const request: UserProfileUpdateRequest = this.profileForm.value;

    this.userService.updateProfile(request).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.saveSuccess.set(true);
        this.profileForm.markAsPristine(); // "dirty" sıfırlanır → buton tekrar disabled
        setTimeout(() => this.saveSuccess.set(false), 3000);
      },
      error: () => {
        this.isSaving.set(false);
        this.saveError.set('Profil güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    });
  }
}
