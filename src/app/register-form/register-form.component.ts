import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(public authService:AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignUpSubmit(){
    this.authService.registerUser(this.signUpUser).subscribe(
      (res) => {
        if (res.status == 200){
          this.onFormResult.emit({signedUp: true, res})
          this.router.navigate(['/home'])
        }
      },
      (err) => {
        console.log(err.json());
        this.onFormResult.emit({signedUp: false, err})
      }
    )
  }
}
