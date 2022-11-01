import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crop } from 'Models/crop.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(private http:HttpClient) { }

  formData: Crop = new Crop();
  readonly baseUrl ='https://localhost:7214/api/Crop';

  postCrop(cropId:any){
    return this.http.post(this.baseUrl,cropId)
  }

  getCrop(cropId:any){
    return this.http.get<Crop>(this.baseUrl+'/'+cropId)
  }

  getAllCrop():Observable<Crop[]>{
    return this.http.get<Crop[]>(this.baseUrl)
  }

  updateCrop(cropId:number){
    return this.http.put<Crop>(this.baseUrl+'/',cropId)
  }

  deleteCrop(cropId:number){
    return this.http.delete<Crop>(this.baseUrl+'/'+cropId)
  }



}
