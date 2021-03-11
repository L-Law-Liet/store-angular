import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(private service: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: ''
    });
  }
  register(): void{
    this.form.disable();
    this.service.register(this.form.getRawValue()).subscribe(res => {
        console.log(res);
        this.router.navigate(['/'])
      },
      error => {
      this.form.enable();
      this.form.setErrors(error.error.errors);
      console.log(this.form.errors);
      }
    );
  }
}
