import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
          else {
            this.userDetails = null;
          }
        }
      );
  }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
  signInRegular(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }
  signUpRegular(email, password) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
  }
  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
   }
  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
}
