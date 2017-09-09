import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import { Angular2TokenService } from "angular2-token";

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

  constructor(private tokenAuthSerivce:Angular2TokenService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignUpSubmit(){
    this.tokenAuthSerivce.registerAccount(this.signUpUser).subscribe(
      (res) => {
        if (res.status == 200){
          console.log(res);
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
