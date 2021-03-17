import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Cart} from '../../models/cart.model';
import {Favourite} from '../../models/favourite.model';
import {FavouriteService} from '../../services/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.sass']
})
export class FavouriteComponent implements OnInit {
  favourites: Favourite[] = [];
  loading = true;

  constructor(
    private favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
    this.getFavourites();
  }

  getFavourites(): void {
    this.favouriteService.getFavourites().subscribe(
      res => {
        console.log(res);
        this.favourites = res;
        this.loading = false;
      }
    );
  }
  remove(id: number): void{
    this.favouriteService.removeFromFavourites(id).subscribe(
      res => {
        this.getFavourites();
      }
    )
  }

}
