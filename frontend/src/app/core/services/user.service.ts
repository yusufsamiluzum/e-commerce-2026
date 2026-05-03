import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserProfileDto {
  id: number;
  fullName: string;
  email: string;
  gender: string;
  roleType: string;
  status: string;
  createdAt: string;
  age?: number;
  city?: string;
  membershipType?: string;
}

export interface UserProfileUpdateRequest {
  fullName?: string;
  gender?: string;
  age?: number;
  city?: string;
}

export interface UserPreferenceDto {
  emailNotifications: boolean;
  smsNotifications: boolean;
  theme: string;
  language: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/users`;

  getProfile(): Observable<UserProfileDto> {
    return this.http.get<UserProfileDto>(`${this.apiUrl}/profile`);
  }

  updateProfile(request: UserProfileUpdateRequest): Observable<UserProfileDto> {
    return this.http.put<UserProfileDto>(`${this.apiUrl}/profile`, request);
  }

  getMyPreferences(): Observable<UserPreferenceDto> {
    return this.http.get<UserPreferenceDto>(`${this.apiUrl}/me/preferences`);
  }

  updateMyPreferences(dto: UserPreferenceDto): Observable<UserPreferenceDto> {
    return this.http.put<UserPreferenceDto>(`${this.apiUrl}/me/preferences`, dto);
  }
}
