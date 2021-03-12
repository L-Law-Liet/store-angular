import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.sass']
})
export class CabinetComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  loading = true;

  constructor(
    private fb: FormBuilder,
    public auth: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      phone: '',
      image: ''
    });
    this.getUser();
  }

  getUser(): void{
    this.auth.getUser().subscribe(
      res => {
        this.auth.user = res;
        this.form.get('name')?.setValue(res.name);
        this.form.get('phone')?.setValue(res.phone);
        this.loading = false;
      }
    );
  }

  // @ts-ignore
  changeAvatar(event): void{
    if (event.target.files && event.target.files[0]){
      const image = <File>event.target.files[0];

      console.log(image);
      this.auth.setAvatar(image).subscribe(
        res => {
          this.getUser();
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  updateProfile(): void{
    this.auth.updateProfile(this.form.getRawValue()).subscribe(
      res => {
        this.getUser();
      }
    );
  }

}
