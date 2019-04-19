import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // private user: SocialUser;
  // private loggedIn: boolean;

  // private user: Observable<firebase.User>;
  private signUp: boolean;
  constructor(private authService: AuthService, private router: Router) { 
    this.signUp = false;
  }
  form = new FormGroup({        
    userEmail: new FormControl(''),
    password: new FormControl('')
  })

  signUpForm = new FormGroup({        
    userEmail: new FormControl(''),
    password: new FormControl(''),
    conformPassword: new FormControl('')
  })
  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  }
  onSubmit(){
    let data = this.form.value;
    console.log(data);
    this.authService.signInRegular(data.userEmail, data.password)
      .then((res) => {
         console.log(res);
   
         this.router.navigate(['order-list']);
      })
      .catch((err) => console.log('error: ' + err));
  }
  onSignUpSubmit(){
    let data = this.signUpForm.value;
    console.log(data);
    this.authService.signUpRegular(data.userEmail, data.password)
      .then((res) => {
         console.log(res);
   
         this.router.navigate(['order-list']);
      })
      .catch((err) => console.log('error: ' + err));
  }
  onSignUp(){
    if(this.signUp){
      this.signUp = false
    }else{
      this.signUp = true;
    }
  }
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
  // signOut(): void {
  //   this.authService.signOut();
  // }

  signInWithGoogle() {
    this.authService.signInWithGoogle().then((res) => {
          this.router.navigate(['order-list'])
        })
      .catch((err) => console.log(err));
  }

}
