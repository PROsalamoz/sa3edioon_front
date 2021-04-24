import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _form_builder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this._form_builder.group({
      name: '',
      username: '',
      email: '',
      password: ''
    });
  }

  submit(): void{
    this.http.post('http://127.0.0.1:8000/register/', this.form.getRawValue()).subscribe(
      (result) => {
        alert('You are registered Now!');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
