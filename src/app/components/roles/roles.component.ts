import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  http = inject(HttpClient);
  roleList: IRole [] = [];

  // ngOnInit(): void {
  //   this.getAllRoles();
  // }
  ngOnInit(): void {
    console.log('RolesComponent initialized');
    this.getAllRoles();
  }
  
  getAllRoles() {
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel) =>{
    this.roleList = res.data;
    });

  }










  // firstName: string = "Angular Tutorial";
  // angularVersion: string = "Version 18";
  // version: number = 18;
  // isActive: boolean =false;
  // currentDate: Date = new Date();
  // inputType: string = "checkbox ";
  // selectedState: string = '';

  // showWelcomeAlert () {
  //   alert("welcome to angular 18 tutorials");
  // }
  // showMessage(message: string) {
  //   alert(message)
  // }
}
