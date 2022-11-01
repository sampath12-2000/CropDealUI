import { Component, OnInit, Input } from '@angular/core';
import { CroponsaleService } from 'Service/croponsale.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CropService } from 'Service/crop.service';
import { CropOnSale } from 'Models/croponsale.model';


@Component({
  selector: 'app-add-croponsale',
  templateUrl: './add-croponsale.component.html',
  styleUrls: ['./add-croponsale.component.css']
})
export class AddCroponsaleComponent implements OnInit {
  croplist: any;
  userId: any;
  croptype: any = ['Vegetable', 'Fruit'];

  constructor(public serv: CropService, public service: CroponsaleService, private route: Router) { }

  ngOnInit() {
    this.getcrop();
  }

  cropform = new FormGroup({

    cropId: new FormControl('', [Validators.required]),
    cropName: new FormControl('', [Validators.required]),
    cropType: new FormControl('', [Validators.required]),
    cropQty: new FormControl('', [Validators.required]),
    cropPrice: new FormControl('', [Validators.required]),
    farmerId:new FormControl('',[Validators.required])
  })

  get form(){
   
    return this.cropform.controls;
  }

  changeRole(role:any) {
    console.log(role.target.value);
  }

  getcrop(){
    this.serv.getAllCrop().subscribe(data=>{
      this.croplist=data;
    },(err)=>{
     alert('Some other ')
    });
  }

    addcroponSale(){
      var croponsale = new CropOnSale();
      croponsale.cropId = this.cropform.value.cropId,
      croponsale.cropName=this.cropform.value.cropName,
      croponsale.cropPrice=this.cropform.value.cropPrice,
      croponsale.cropQty=this.cropform.value.cropQty,
      croponsale.cropType=this.cropform.value.cropType,
      this.userId =localStorage.getItem('userId')
      croponsale.farmerId=this.userId;
      this.service.postCropOnSale(croponsale).subscribe(result=>{
        if(result==null){
         alert("Crop is posted on sale Sucessfully");
         this.route.navigate(['/onSale'])
        }else{
          alert("something went Wrong");
        }
      })
    }
  
}


