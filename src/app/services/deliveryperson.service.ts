import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverypersonService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";
  constructor(private http: HttpClient) { }

  addDeliveryPerson(val:any){
    return this.http.post(this.APIUrl + '/deliveryperson/',val);
  }

  updateDeliveryPerson(val:any){
    return this.http.put(this.APIUrl + '/deliveryperson/',val);
  }

  deleteDeliveryPerson(val:any){
    return this.http.delete(this.APIUrl + '/deliveryperson/'+val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }
  getDeliveryPersonList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/deliveryperson/');
  }

}
