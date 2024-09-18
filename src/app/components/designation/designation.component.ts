import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { error } from 'console';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  isLoader: boolean = true;
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesigination().subscribe((result: APIResponseModel) =>{
      this.designationList = result.data;
      this.isLoader = false;
    }, error => {
      alert("API error/ Network down");
      this.isLoader = true;

    })
  }
}
