import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signUp = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  getUser = () => this.auth.authState;

  signOut = () => this.auth.signOut();
  
}
