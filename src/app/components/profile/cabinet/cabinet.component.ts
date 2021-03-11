import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';

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
    this.auth.getUser().subscribe(
      res => {
        this.auth.user = res;
        this.loading = false;
      }
    );
    this.form = this.fb.group({
      name: '',
      phone: ''
    });

  }

}
