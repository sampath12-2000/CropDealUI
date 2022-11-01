import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CropService } from 'Service/crop.service';
import { Router } from '@angular/router';
import { Crop } from 'Models/crop.model';

@Component({
  selector: 'app-addcrop',
  templateUrl: './addcrop.component.html',
  styleUrls: ['./addcrop.component.css']
})
export class AddcropComponent implements OnInit {

  constructor( public service:CropService, private route: Router) { }

  ngOnInit(): void {
  }

  cropaddform = new FormGroup({
    cropName: new FormControl('', [Validators.required]),
    cropImage:new FormControl('',[Validators.required])
  })

  get form(){
   
    return this.cropaddform.controls;
  }

  addcrop(){
    var crop = new Crop();
    crop.cropName=this.cropaddform.value.cropName;
    crop.cropImage = this.cropaddform.value.cropImage;
    this.service.postCrop(crop).subscribe(result=>{
      if(result==null){
       alert("Crop is Added Sucessfully");
       this.route.navigate(['/crop'])
      }else{
        alert("something went Wrong");
      }
    })
  }


}
