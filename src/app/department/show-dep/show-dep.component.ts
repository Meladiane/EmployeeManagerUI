import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  DepartmentList:any = [];
  ModalTitle:string = "" ;
  ActivateAddEditDep: boolean;
  dep: any;
  
  constructor(private sharedService: SharedService) {
    this.ActivateAddEditDep = false;
   }

  ngOnInit(): void {
    this.refreshDepartmentList();
  }
  addClick(){
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDep = true;

    console.log("ActivateAddEditDep: " + this.ActivateAddEditDep );
  }
  closeClick(){
    this.ActivateAddEditDep = false;
  }
  refreshDepartmentList(){
    this.sharedService.getDepList().subscribe( data => {
      this.DepartmentList = data;
    });
  }


}
