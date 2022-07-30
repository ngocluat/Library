import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RealEstate} from "../model/realEstate";

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


}
