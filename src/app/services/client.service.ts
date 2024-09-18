import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) {}
  
  getClientProject(): Observable<APIResponseModel>  {
    return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.CLIENT_PROJECT);
  }

  getAllClients(): Observable<APIResponseModel> {
      return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_CLIENTS)
  }
  getAllEmployees():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_EMP)
  }
  getAllUser (): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.org/users")
  }

  addUpdate (obj: Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + constant.API_METHOD.ADD_UPDATE_CLIENTS, obj)
  }
  DeleteClientByClientId(id :number):Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + constant.API_METHOD.DELETE_CLIENTS+ id)
  }
  addUpdateClientProject(obj: Client) {
    return this.http.post<APIResponseModel>(environment.API_URL + constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECTS, obj)
  }

}
