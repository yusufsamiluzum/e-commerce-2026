import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../core/services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.html'
})
export class UserProfile {
  private userService = inject(UserService);

  profile = toSignal(
    this.userService.getProfile().pipe(
      catchError(() => of(null))
    ),
    { initialValue: null }
  );
}
