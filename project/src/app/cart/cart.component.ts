import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {CartDetailDto} from "../dto/CartDetailDto";
import {RealEstateService} from "../service/real-estate.service";
import {HouseDtoForCart} from "../dto/HouseDtoForCart";


@Component({
  selector: 'app-detail',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {
  display = 'none';
  cartDetails: CartDetailDto [] = [];
  total = 0;

  constructor(private title: Title,
              private realEstateService: RealEstateService) {
    scrollBy(0, 0);
  }

  ngOnInit(): void {
    this.title.setTitle('Cart - Book');
    this.cartDetails = this.realEstateService.getCart();
    this.total = this.getTotal();
    window.scrollBy(0, 0);
  }

  getTotal(): number {
    let total = 0;
    if (this.cartDetails != null) {
      this.cartDetails.forEach(item => {
        // @ts-ignore
        total += (item.quantity * item.house.housePrice);
      });
    }
    return total;
  }

  removeItem(medicine: HouseDtoForCart) {
    this.realEstateService.removeItemFromCart(medicine);
    this.cartDetails = this.realEstateService.getCart();
    this.total = this.getTotal();
  }
}
