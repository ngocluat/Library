import {Component, OnInit} from '@angular/core';
import {RealEstate} from "../model/realEstate";
import {RealEstateService} from "../service/real-estate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  realEstate: RealEstate[] | undefined;

  constructor(private  realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.getAll();
  }


  public getAll() {
    this.realEstateService.getAll().subscribe(data => {

        // @ts-ignore
        this.realEstate = data;
        console.log(data)
      }
    );
  }

  public getAllChungCu() {
    this.realEstateService.getAllChungCu().subscribe(data => {
        // @ts-ignore
        this.realEstate = data;
        console.log(data)
      }
    );
  }

  public getAllCondotel() {
    this.realEstateService.getAllCondotel().subscribe(data => {
        // @ts-ignore
        this.realEstate = data;
        console.log(data)
      }
    );
  }

  public getAllShophouse() {
    this.realEstateService.getAllShophouse().subscribe(data => {
        // @ts-ignore
        this.realEstate = data;
        console.log(data)
      }
    );

  }

  public getAlBietThu() {
    this.realEstateService.getAlBietThu().subscribe(data => {
        if (data == null ) {
          alert(123)
        }
        // @ts-ignore
        this.realEstate = data;
        console.log(data)
      }
    );

  }


}
