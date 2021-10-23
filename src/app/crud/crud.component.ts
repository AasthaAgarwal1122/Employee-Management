import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  newEmployeeClicked = false;
  employees = [
    {name:'Aastha',phone:8609998398,email:'aastha@gmail.com',id:'e11'},
    {name:'Sayari',phone:1234567890,email:'sayari@gmail.com',id:'e12'},
    {name:'Swati',phone:9877654321,email:'swati@gmail.com',id:'e13'}
  ];
  color:any;

  constructor() { }

  ngOnInit(): void {
  }

  model:any ={};
  model2:any ={};
  addEmployee(){
    this.employees.push(this.model);
    this.model = {}
  }

  deleteEmployee(i:any){
    this.employees.splice(i);
    console.log(i);
  }
  myValue:any;

  editEmployee(editEmployeeInfo:any){
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.phone = this.employees[editEmployeeInfo].phone;
    this.model2.email = this.employees[editEmployeeInfo].email;
    this.model2.id = this.employees[editEmployeeInfo].id;
    this.myValue =editEmployeeInfo;
  }
  updateEmployee(){
    let editEmployeeInfo = this.myValue;
    for(let i=0;i<this.employees.length;i++){
      if(i==editEmployeeInfo){
        this.employees[i]=this.model2;
        this.model2={}
      }
    }
  }
  addNewEmployeeBtn(){
    this.newEmployeeClicked = !this.newEmployeeClicked;

  }
  changeColorOne(){
    this.color= !this.color;
    if(this.color){
      return '#ffffff';
    }
    else{
      return '#f6f6f6';
    }
  }

}
