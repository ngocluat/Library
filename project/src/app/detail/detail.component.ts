import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {RealEstateService} from "../service/real-estate.service";
import {RealEstate} from "../model/realEstate";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // @ts-ignore
  private id: string;
  // @ts-ignore
  realEstate: RealEstate;

  constructor(private activatedRoute: ActivatedRoute,
              private realEstateService: RealEstateService,
              private route: Router,) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = paramMap.get('id');
      this.getRealEstateDetail(this.id)
    });
  }


  getRealEstateDetail(id: string) {
    return this.realEstateService.findById(id).subscribe(value => {
      this.realEstate = value;
      console.log(this.realEstate.images[0])
    }, error => {
      this.route.navigateByUrl('/error');
    });
  }
}
