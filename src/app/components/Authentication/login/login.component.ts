import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  // tslint:disable-next-line:variable-name
  constructor(private _form_builder: FormBuilder, private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.form = this._form_builder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this._http.post('http://127.0.0.1:8000/login/', this.form.getRawValue(), {withCredentials: true}).subscribe(
      (result) => {
      // console.log(res)
      this._router.navigate(['/home']);
    });
  }
}
