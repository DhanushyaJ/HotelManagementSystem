import { Component } from '@angular/core';
import { AdminFunctionsService } from './admin-functions.service';

@Component({
  selector: 'app-admin-function',
  templateUrl: './admin-function.component.html',
  styleUrl: './admin-function.component.css'
})
export class AdminFunctionComponent {
  adminMenu :String='';
  adminDetail:any;
  allAdmin:any;

  constructor(private adminFuncService:AdminFunctionsService){

  }

  goto(input:String){
      this.adminMenu=input;
  }
  
  createAdmin(input:any){
    console.warn(input);
    this.adminFuncService.createAdmin(input).subscribe((result)=>{
      alert(result);
    })
  }

  deleteAdmin(input:any){
    console.warn(input);
    this.adminFuncService.deleteAdmin(input).subscribe((result) =>{
      alert(result);
    })
  }

  viewAdmin(input:any){
    console.warn(input);
    this.adminFuncService.viewAdmin(input).subscribe((result)=>{
      console.log(result);
      return this.adminDetail=result;
    });
  }

  viewAllAdmin(){
    this.adminFuncService.viewAllAdmin().subscribe((result) =>{
      console.log(result);
      return this.allAdmin=result;
    })
  }

}
