import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getLookUpTerms(groupName: string){
    return this.http.get(`${this.apiUrl + environment.base_value.look_up + '?groupNames=' + groupName}`)
  }

  //model
  getModel(){
    return this.http.get(`${this.apiUrl + environment.base_value.get_models}`)
  }

  //purchase
  getPurchase(){
    return this.http.get(`${this.apiUrl + environment.base_value.get_purchase_list}`)
  }
}
