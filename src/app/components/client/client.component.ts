import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertsComponent } from "../../reusableComponent/alerts/alerts.component";
import { MyButtonComponent } from "../../reusableComponent/my-button/my-button.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, AsyncPipe, AlertsComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  ngOnInit(): void {
    this.loadClient()
    this.userList$ = this.clientService.getAllUser();
    }
  userList$ : Observable<any> = new Observable<any>
  clientObj: Client =  new Client();
  clientList: Client [] = [] ;
  clientService = inject(ClientService);
  addDate: Date = new Date();

  loadClient () {
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data;
      if (res.result) {
        alert("lOADED DATA SUCCESS");
      }else{
        alert(res.message)
      }
    })
  }
  onSaveClient (data : string) {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel) => {
      console.log(res); 
      if (res.result) {
        this.loadClient();
        this.clientObj = new Client();
      }else{
        alert(res.message)
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure You want to delete?")
    this.clientService.DeleteClientByClientId(id).subscribe((res:APIResponseModel) => {
      console.log(res); 
      if (res.result) {
        alert("Client Deleted Successfully");
        this.loadClient();

      }else{
        alert(res.message)
      }
    })
  }

  onEdit(data : Client) {
    this.clientObj= data ;
  }
}
