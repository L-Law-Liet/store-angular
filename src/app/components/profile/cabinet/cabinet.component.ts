import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../../services/order.service';
import {OrderItem} from '../../../models/order-item.model';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.sass']
})
export class CabinetComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  loading = true;
  orderItems: OrderItem[] = [];

  constructor(
    private fb: FormBuilder,
    public auth: UserService,
    private orderService: OrderService
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
        this.form.get('name')?.setValue(this.auth.user.name);
        this.form.get('phone')?.setValue(this.auth.user.phone);
        this.orderService.getOrderItems().subscribe(
          res => {
            this.orderItems = res;
            console.log(res);
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
          this.auth.updateUser();
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
        this.auth.updateUser();
      }
    );
  }

  topUp(balance: any){
    this.auth.topUpBalance(parseInt(balance)).subscribe(
      res => {
        console.log(res);
        alert('Success!')
        this.auth.updateUser();
      }
    );
  }


}
