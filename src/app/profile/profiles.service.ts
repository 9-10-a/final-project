import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Profile } from './profiles.model';

const BACKEND_URL = environment.apiUrl + '/profiles/';

@Injectable({ providedIn: 'root' })
export class ProfilesService {
  private profiles: Profile[] = [];
  private profilesUpdated = new Subject<Profile[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getProfiles() {
    this.http
      .get<{ message: string; profiles: any }>(BACKEND_URL)
      .pipe(
        map(profileData => {
          return profileData.profiles.map(profile => {
            return {
              id: profile._id,
              firstName: profile.firstName,
              lastName: profile.lastName,
              motivation: profile.motivation,
              creator: profile.creator
            };
          });
        })
      )
      .subscribe(transformedProfiles => {
        this.profiles = transformedProfiles;
        // informs the rest of the app about the update
        this.profilesUpdated.next([...this.profiles]);
      });
  }

  getProfileUpdateListener() {
    return this.profilesUpdated.asObservable();
  }

  // get profile by id
  getProfile(id: string) {
    return this.http.get<{
      _id: string;
      firstName: string;
      lastName: string;
      motivation: string;
      creator: string;
    }>(BACKEND_URL + id);
  }

  // add new profile
  addProfile(
    firstName: string,
    lastName: string,
    motivation: string,
    creator: string
  ) {
    const profile: Profile = {
      id: null,
      firstName: firstName,
      lastName: lastName,
      motivation: motivation,
      creator: creator
    };
    this.http
      .post<{ message: string; profileId: string }>(BACKEND_URL, profile)
      .subscribe(responseData => {
        // routing after a profile is saved - Service needs router module for this
        this.router.navigate(['/profile']);
      });
  }

  // update specific profile by id
  updateProfile(
    id: string,
    firstName: string,
    lastName: string,
    motivation: string,
    creator: string
  ) {
    // tslint:disable-next-line:no-shadowed-variable
    const profile: Profile = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      motivation: motivation,
      creator: creator
    };
    this.http.put(BACKEND_URL + id, profile).subscribe(response => {
      // routing after a profile is saved - Service needs router module for this
      this.router.navigate(['/profile']);
    });
  }

  deleteProfile(profileId: string) {
    return this.http.delete(BACKEND_URL + profileId);
  }
}
