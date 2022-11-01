import { Component, OnInit } from '@angular/core';
import { CropOnSale } from 'Models/croponsale.model';
import { Crop } from 'Models/crop.model';
import { CroponsaleService } from 'Service/croponsale.service';


@Component({
  selector: 'app-croponsale',
  templateUrl: './croponsale.component.html',
  styleUrls: ['./croponsale.component.css']
})
export class CroponsaleComponent implements OnInit {

  croponsalelist : CropOnSale[]=[];
  croplist:Crop[]=[];
  p:number=1;
  searchText:any;
  totalLength:any;
  page:number=1;
  

  constructor(private service:CroponsaleService) {
    this.getAll();
   }

  ngOnInit(): void {
  }

  getAll(){
    this.service.getAllCropOnSale().subscribe(result => {
      this.croponsalelist = result;
    });
  }
  delete(cropId: any) {
    if (confirm("Do you want remove?")) {
      this.service.deleteCropOnSale(cropId).subscribe(result => {
        this.getAll();
      });
}
}
}
