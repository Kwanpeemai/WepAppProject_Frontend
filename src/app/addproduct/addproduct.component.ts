import { Component, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogpopupComponent } from '../dialogpopup/dialogpopup.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private service:ServiceService,public dialog: MatDialog){}
  public menu:string = "size";
  public page:string = "add";

  ngOnInit(){
    if(this.menu == "flavor"){
      this.getdata();
    }
    if(this.menu == "size"){
      this.getdata_size();
    }
    if(this.menu == "topping"){
      this.getdata_topping();
    }
    if(this.menu == "sauce"){
      this.getdata_sauce();
    }
  }
  //flavor flow data
  public datas: any[] = [];
  public flavors: any[] = [];
  public name_th:string = "";
  public name_en:string = "";
  public price:number = 0;
  public stock:number = 0;
  adddata(){
    let body = {
      "flavors":[
      {
          "flavor_name_th":this.name_th,
          "flavor_name_en":this.name_en,
          "flavor_price":this.price,
          "flavor_stock":this.stock,
      }]}
    console.log(body)
    this.service.addflavor(body).subscribe(res=>{
      alert('Add Flavor Product Success!!');
    })
  }
  getdata(){
    this.service.getflavor().subscribe(res=>{
      for(let i=0 ;i<Object.values(res).length;i++){
        this.datas.push(Object.values(res)[i]);
      }
      this.convertData_flavor(this.datas);
    })
  }
  convertData_flavor(data:any){
    let _data = []
    for(let i=0;i<data.length;i++){
      _data.push({
        'id':data[i]['flavor_id'],
        'name_th':data[i]["flavor_name_th"],
        'name_en':data[i]["flavor_name_en"],
        'price':data[i]["flavor_price"],
        'stock':data[i]["flavor_stock"],
      })
    }
    this.flavors = _data;
  }
  deleteflavors(id:any){
    this.service.deleteflavor(id).subscribe(res=>{
      alert('Delete Flavor Product No.'+id+' Success!!');
    })
  }

  //size flow data
  public size_datas: any[] = [];
  public sizes: any[] = [];
  public size_name_th:string = "";
  public size_name_en:string = "";
  public size_price:number = 0;
  public size_stock:number = 0;

  adddata_size(){
    let body = {
      "sizes":[
      {
          "size_name_th":this.size_name_th,
          "size_name_en":this.size_name_en,
          "size_price":this.size_price,
          "size_stock":this.size_stock,
      }]}
    console.log(body)
    this.service.addsize(body).subscribe(res=>{
      alert('Add Size Product Success!!');
    })
  }

  getdata_size(){
    this.service.getsize().subscribe(res=>{
      for(let i=0 ;i<Object.values(res).length;i++){
        this.size_datas.push(Object.values(res)[i]);
      }
      this.convertData_size(this.size_datas);
    })
  }
  convertData_size(data:any){
    let _data = []
    for(let i=0;i<data.length;i++){
      _data.push({
        'id':data[i]['size_id'],
        'name_th':data[i]["size_name_th"],
        'name_en':data[i]["size_name_en"],
        'price':data[i]["size_price"],
        'stock':data[i]["size_stock"],
      })
    }
    this.sizes = _data;
    console.log("data :",_data);
  }

  deletesize(id:any){
    this.service.deletesize(id).subscribe(res=>{
      alert('Delete Size Product No.'+id+' Success!!');
    });
  }


  //topping flow data
  public topping_datas: any[] = [];
  public toppings: any[] = [];
  public topping_name_th:string = "";
  public topping_name_en:string = "";
  public topping_price:number = 0;
  public topping_stock:number = 0;

  adddata_topping(){
    let body = {
      "toppings":[
      {
          "tp_name_th":this.topping_name_th,
          "tp_name_en":this.topping_name_en,
          "tp_price":this.topping_price,
          "tp_stock":this.topping_stock,
      }]}
    console.log(body)
    this.service.addtopping(body).subscribe(res=>{
      console.log(res);
      alert('Add Topping Product Success!!');
    })
  }

  getdata_topping(){
    this.service.gettopping().subscribe(res=>{
      for(let i=0 ;i<Object.values(res).length;i++){
        this.topping_datas.push(Object.values(res)[i]);
      }
      this.convertData_topping(this.topping_datas);
    })
  }
  convertData_topping(data:any){
    let _data = []
    for(let i=0;i<data.length;i++){
      _data.push({
        'id':data[i]['topping_id'],
        'name_th':data[i]["tp_name_th"],
        'name_en':data[i]["tp_name_en"],
        'price':data[i]["tp_price"],
        'stock':data[i]["tp_stock"],
      })
    }
    this.toppings = _data;
    console.log("data :",_data);
  }

  deletetopping(id:any){
    this.service.deletetopping(id).subscribe(res=>{
      alert('Delete Topping Product No.'+id+' Success!!');
    });
  }

  //sauce flow data
  public sauce_datas: any[] = [];
  public sauces: any[] = [];
  public sauce_name_th:string = "";
  public sauce_name_en:string = "";
  public sauce_price:number = 0;
  public sauce_stock:number = 0;

  adddata_sauce(){
    let body = {
      "sauces":[
      {
          "sauce_name_th":this.sauce_name_th,
          "sauce_name_en":this.sauce_name_en,
          "sauce_price":this.sauce_price,
          "sauce_stock":this.sauce_stock,
      }]}
    console.log(body)
    this.service.addsauce(body).subscribe(res=>{
      alert('Add Sauce Product Success!!');
    })
  }

  getdata_sauce(){
    this.service.getsauce().subscribe(res=>{
      for(let i=0 ;i<Object.values(res).length;i++){
        this.sauce_datas.push(Object.values(res)[i]);
      }
      this.convertData_sauce(this.sauce_datas);
    })
  }
  convertData_sauce(data:any){
    let _data = []
    for(let i=0;i<data.length;i++){
      _data.push({
        'id':data[i]['sauce_id'],
        'name_th':data[i]["sauce_name_th"],
        'name_en':data[i]["sauce_name_en"],
        'price':data[i]["sauce_price"],
        'stock':data[i]["sauce_stock"],
      })
    }
    this.sauces = _data;
  }

  deletesauce(id:any){
    this.service.deletesauce(id).subscribe(res=>{
      alert('Delete Sauce Product No.'+id+' Success!!');
    });
  }
  
  
  
  changePageAdd(){
    this.page = "add"
  }

  changePageView(){
    this.page = "view"
  }

  changePageAdmin(){
    this.page = "admin";
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.service.getOrderDetails().subscribe(res=>{
      for(let i=0 ;i<Object.values(res).length;i++){
        this.topping_datas.push(Object.values(res)[i]);
      }
      this.convertData_details(this.topping_datas);
    })
  }

  public order_details : any [] = []; 
  convertData_details(data:any){
    let _data = []
    for(let i=0;i<data.length;i++){
      _data.push({
        'id':data[i]['order_id'],
        'menu_size':data[i]["size_name_en"],
        'menu_flavor':data[i]["flavor_name_en"],
        'menu_topping':data[i]["tp_name_en"],
        'menu_sauce':data[i]["en_name_en"],
        'price':data[i]["price"],
        'check1':false,
        'check2':false
      })
    }
    this.order_details = _data;
    console.log("data :",this.order_details);
  }

  toggleCheck1(index: number) {
    this.order_details[index].check1 = !this.order_details[index].check1;
  }
  toggleCheck2(index: number) {
    this.order_details[index].check2 = !this.order_details[index].check2;
  }

  openDialog(id:any,page:any) {
    const dialogRef = this.dialog.open(DialogpopupComponent, {
      data: { id: id , page: page},
      panelClass: 'blur-dialog-panel', 
      autoFocus: false,
      hasBackdrop: true 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  call_api(menu:any){
    if(menu == "flavor"){
      this.getdata();
    }
    if(menu == "size"){
      this.getdata_size();
    }
    if(menu == "topping"){
      this.getdata_topping();
    }
    if(menu == "sauce"){
      this.getdata_sauce();
    }
  }
}
