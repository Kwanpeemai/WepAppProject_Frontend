import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dialogpopup',
  templateUrl: './dialogpopup.component.html',
  styleUrls: ['./dialogpopup.component.css']
})
export class DialogpopupComponent {
  constructor(public dialogRef: MatDialogRef<DialogpopupComponent>,@Inject(MAT_DIALOG_DATA) public id: any,public service:ServiceService){}

  ngOnInit() {
    console.log(this.id); // ค่าที่ถูกส่งมาจาก Component ที่เรียก MatDialog
    console.log(this.api_data);
    this.getdatabyid(this.id.id);
  }

  closepopup(){
    this.dialogRef.close();
  }

  public api_data : any [] = [];
  public ids : number = 0;
  public name_th:string = "";
  public name_en:string = "";
  public price:number = 0;
  public stock:number = 0;
  public data_update : any = "";

  getdatabyid(id:any){
    if(this.id.page == "flavor"){
      this.service.getflavorbyid(id).subscribe(res=>{
        for(let i=0 ;i<Object.values(res).length;i++){
          this.api_data.push(Object.values(res)[i]);
        }
        this.convertData_apidata(this.api_data);
      })
    }
    if(this.id.page == "size"){
      this.service.getsizebyid(id).subscribe(res=>{
        for(let i=0 ;i<Object.values(res).length;i++){
          this.api_data.push(Object.values(res)[i]);
        }
        this.convertData_apidata(this.api_data);
      })
    }
    if(this.id.page == "sauce"){
      this.service.getsaucebyid(id).subscribe(res=>{
        for(let i=0 ;i<Object.values(res).length;i++){
          this.api_data.push(Object.values(res)[i]);
        }
        this.convertData_apidata(this.api_data);
      })
    }
    if(this.id.page == "topping"){
      this.service.gettoppingbyid(id).subscribe(res=>{
        for(let i=0 ;i<Object.values(res).length;i++){
          this.api_data.push(Object.values(res)[i]);
        }
        this.convertData_apidata(this.api_data);
      })
    }
  }


  convertData_apidata(data:any){
    console.log(data)
    let _data = []
    this.ids = data[0];
    this.name_th = data[1];
    this.name_en = data[2];
    this.price = data[3];
    this.stock = data[4];
  }


  convertDataUpdate(id:any,name_th:any,name_en:any,price:any,stock:any){
    let _data :any = ""
    if(this.id.page == "flavor"){
      _data = ({
        'flavor_id': id,
        'flavor_name_th':name_th,
        'flavor_name_en':name_en,
        'flavor_price':price,
        'flavor_stock':stock,
      })
    }else if(this.id.page == "size"){
      _data = ({
        'size_id': id,
        'size_name_th':name_th,
        'size_name_en':name_en,
        'size_price':price,
        'size_stock':stock,
      })
    }else if(this.id.page == "sauce"){
      _data = ({
        'sauce_id': id,
        'sauce_name_th':name_th,
        'sauce_name_en':name_en,
        'sauce_price':price,
        'sauce_stock':stock,
      })
    }else if(this.id.page == "topping"){
      _data = ({
        'topping_id': id,
        'tp_name_th':name_th,
        'tp_name_en':name_en,
        'tp_price':price,
        'tp_stock':stock,
      })
    }
    this.data_update = _data;
    console.log("data :",this.data_update);
    this.updateapi(id,this.data_update);
  }

  updateapi(id:any,update:any){
    console.log('API UPDATE IS : ',update)
    if(this.id.page == "flavor"){
      this.service.updateflavor(id,update).subscribe(res=>{
        alert('Update Flavor Product No.'+id+' Success!!');
      })
    }
    else if(this.id.page == "size"){
      this.service.updatesize(id,update).subscribe(res=>{
        alert('Update Size Product No.'+id+' Success!!');
      })
    }
    else if(this.id.page == "sauce"){
      this.service.updatesauce(id,update).subscribe(res=>{
        alert('Update Sauce Product No.'+id+' Success!!');
      })
    }
    else if(this.id.page == "topping"){
      this.service.updatetopping(id,update).subscribe(res=>{
        alert('Update Topping Product No.'+id+' Success!!');
      })
    }
  }

}
