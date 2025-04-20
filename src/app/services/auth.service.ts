import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor(private auth: Auth, private router: Router) {
   
    onAuthStateChanged(this.auth, (user) => {
      Promise.resolve().then(() => this.currentUser.next(user));
    });
  }

  getUser() {
    return this.currentUser.asObservable();
  }

  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigateByUrl('/login');
  }
}
