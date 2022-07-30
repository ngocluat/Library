import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RealEstate} from "../model/realEstate";
import {HouseDtoForCart} from "../dto/HouseDtoForCart";
import {CartDetailDto} from "../dto/CartDetailDto";

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<RealEstate> {
    return this.http.get<RealEstate>(`http://localhost:3000/realEstate`);
  }

  public getAllChungCu(): Observable<RealEstate> {
    return this.http.get<RealEstate>(`http://localhost:3000/realEstate?type.value=chungcu`);
  }

  public getAllShophouse(): Observable<RealEstate> {
    return this.http.get<RealEstate>(`http://localhost:3000/realEstate?type.value=shophouse`);
  }

  public getAllCondotel(): Observable<RealEstate> {
    return this.http.get<RealEstate>(`http://localhost:3000/realEstate?type.value=condotel`);
  }

  public getAlBietThu(): Observable<RealEstate> {
    return this.http.get<RealEstate>(`http://localhost:3000/realEstate?type.value=bietthu`);
  }


  public findById(id: string): Observable<RealEstate> {
    return this.http.get<RealEstate>(`http://localhost:3000/realEstate/${id}`);
  }

  addToCart(book: HouseDtoForCart, quantity: number) {
    let cartDetailDtos: CartDetailDto[] = [];
    if (localStorage.getItem('cart')) {
      // @ts-ignore
      cartDetailDtos = JSON.parse(localStorage.getItem('cart'));
    }
    let exists = false;

    cartDetailDtos.forEach(item => {
      if (item.house.houseId == book.houseId) {
        exists = true;
        if (quantity < 1 && item.quantity == 1) {
          item.quantity = 1;
        } else {
          item.quantity += quantity;
        }
      }
    });
    if (!exists && quantity > 0) {
      let cartDetailDto = {} as CartDetailDto;
      cartDetailDto.quantity = quantity;
      cartDetailDto.house = book;
      cartDetailDtos.push(cartDetailDto);
    }
    localStorage.setItem('cart', JSON.stringify(cartDetailDtos));
  }

  getCart(): CartDetailDto[] {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('cart'));
  }

  removeItemFromCart(medicine: HouseDtoForCart) {
    let cartDetailDtos: CartDetailDto[] = [];
    if (localStorage.getItem('cart')) {
      // @ts-ignore
      cartDetailDtos = JSON.parse(localStorage.getItem('cart'));
    }
    cartDetailDtos = cartDetailDtos.filter(item => item.house.houseId !== medicine.houseId);
    localStorage.setItem('cart', JSON.stringify(cartDetailDtos));
  }

}
