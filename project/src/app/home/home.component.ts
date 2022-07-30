import {Component, OnInit} from '@angular/core';
import {RealEstate} from "../model/realEstate";
import {RealEstateService} from "../service/real-estate.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  realEstate: RealEstate[] | undefined;

  constructor(private  realEstateService: RealEstateService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllChungCu();
  }


  public getAll() {
    this.realEstateService.getAll().subscribe(data => {

        // @ts-ignore
        this.realEstate = data;
      }
    );
  }

  public getAllChungCu() {
    this.realEstateService.getAllChungCu().subscribe(data => {
        // @ts-ignore
        this.realEstate = data;
      }
    );
  }

  public getAllCondotel() {
    this.realEstateService.getAllCondotel().subscribe(data => {
        // @ts-ignore
        this.realEstate = data;
      }
    );
  }

  public getAllShophouse() {
    this.realEstateService.getAllShophouse().subscribe(data => {
        // @ts-ignore
        this.realEstate = data;
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
      }
    );

  }


  addItemToCart(item: any) {
    this.realEstateService.addToCart(item, 1);
    this.showMessageSuccess(item.bookName);
  }

  showMessageSuccess(medicineName: string) {
    this.toastr.success('Đã thêm thành công ' + medicineName + ' vào giỏ hàng', 'Thông báo', {
      timeOut: 2000,
      progressBar: true,
    });
  }

}
