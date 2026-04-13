import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService, UserPreferenceDto } from '../../../../core/services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { shareReplay, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-my-preferences',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './my-preferences.html'
})
export class MyPreferences implements OnInit {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  preferencesForm!: FormGroup;

  // null → yükleniyor | object → dolu
  isLoaded   = signal<boolean>(false);
  apiError   = signal<string>('');
  isSaving   = signal<boolean>(false);
  saveSuccess = signal<boolean>(false);
  saveError   = signal<string>('');

  ngOnInit(): void {
    this.preferencesForm = this.fb.group({
      emailNotifications: [true],
      smsNotifications:   [false],
      theme:    ['LIGHT'],
      language: ['TR']
    });

    this.userService.getMyPreferences().pipe(
      shareReplay(1),
      catchError(() => {
        this.apiError.set('Tercihler yüklenirken bir hata oluştu.');
        this.isLoaded.set(true); // Hata olsa bile skeleton'ı kaldır
        return of(null);
      })
    ).subscribe(prefs => {
      if (prefs) {
        this.preferencesForm.patchValue({
          emailNotifications: prefs.emailNotifications,
          smsNotifications:   prefs.smsNotifications,
          theme:    prefs.theme,
          language: prefs.language
        });
        this.preferencesForm.markAsPristine();
      }
      this.isLoaded.set(true);
    });
  }

  /** Tema card seçici */
  selectTheme(value: string): void {
    this.preferencesForm.get('theme')!.setValue(value);
    this.preferencesForm.markAsDirty();
  }

  /** Dil card seçici */
  selectLanguage(value: string): void {
    this.preferencesForm.get('language')!.setValue(value);
    this.preferencesForm.markAsDirty();
  }

  /** Toggle değeri kolayca oku */
  get emailOn(): boolean { return !!this.preferencesForm.get('emailNotifications')?.value; }
  get smsOn():   boolean { return !!this.preferencesForm.get('smsNotifications')?.value; }
  get theme():   string  { return this.preferencesForm.get('theme')?.value ?? 'LIGHT'; }
  get language():string  { return this.preferencesForm.get('language')?.value ?? 'TR'; }

  savePreferences(): void {
    if (this.preferencesForm.invalid || this.isSaving()) return;

    this.isSaving.set(true);
    this.saveSuccess.set(false);
    this.saveError.set('');

    const updatedPrefs: UserPreferenceDto = this.preferencesForm.value;

    this.userService.updateMyPreferences(updatedPrefs).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.saveSuccess.set(true);
        this.preferencesForm.markAsPristine();
        setTimeout(() => this.saveSuccess.set(false), 3000);
      },
      error: (err) => {
        this.isSaving.set(false);
        this.saveError.set('Tercihler kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.');
        setTimeout(() => this.saveError.set(''), 4000);
      }
    });
  }
}
