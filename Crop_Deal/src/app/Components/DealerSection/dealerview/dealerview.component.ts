import { Component, OnInit } from '@angular/core';
import { CropviewService } from 'Service/cropview.service';
import { cropview } from 'Models/cropview.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dealerview',
  templateUrl: './dealerview.component.html',
  styleUrls: ['./dealerview.component.css']
})
export class DealerviewComponent implements OnInit {

  cropviewlist: cropview[]=[];
  p:number=1;
  searchText:any;
  totalLength:any;
  page:number=1;
  constructor(private service:CropviewService) {
    this.getAll();
   }

  ngOnInit(): void {
    
  }

  getAll(){
    this.service.getAllcropview().subscribe(result => {
      this.cropviewlist = result;
    });
  }

}
