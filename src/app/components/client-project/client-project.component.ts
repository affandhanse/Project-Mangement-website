import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/client';
import { DatePipe } from '@angular/common';
import { AlertsComponent } from "../../reusableComponent/alerts/alerts.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, AlertsComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit{
  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
    this.addProjectList();
    const name = this.firstName();
  }

  firstName = signal("Angular 18");
  projectList = signal<ClientProject []>([]);
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  clientsrv= inject(ClientService);
  getAllEmployee() {
    this.clientsrv.getAllEmployees().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data ;
    })
  };
  getAllClient() {
    this.clientsrv.getAllClients().subscribe((result: APIResponseModel) => {
      this.clientList = result.data ;
    })
  };
  onSaveForm() {
     const formValue = this.projectForm.value;
     this.clientsrv.addUpdateClientProject(formValue).subscribe((res:APIResponseModel) => {
      if (res.result){
        alert("Project Updated Successfully")
      }else {
        alert(res.message)
      }
     })


  }
  changeFirstName() {
    this.firstName.set("React native")
  }
  addProjectList() {
    this.clientsrv.getClientProject().subscribe((res:APIResponseModel) =>{
      this.projectList.set(res.data)
    })
  }



  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });
}
