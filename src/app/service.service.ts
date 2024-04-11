import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
      

      //flavor
      addflavor(body:any){
        return this.http.post("http://localhost:8080/createFlavor",body)
      }
      getflavor(){
        return this.http.get("http://localhost:8080/getFlavors")
      }
      getflavorbyid(id:any){
        return this.http.get(`http://localhost:8080/getFlavor/${id}`)
      }
      updateflavor(id: any, newData: any) {
        return this.http.put(`http://localhost:8080/updateFlavor/${id}`, newData);
      }
      deleteflavor(id:any){
        return this.http.delete(`http://localhost:8080/deleteFlavor/${id}`)
      }

      //size
      addsize(body:any){
        return this.http.post("http://localhost:8080/createSize",body)
      }
      getsize(){
        return this.http.get("http://localhost:8080/getSizes")
      }
      getsizebyid(id:any){
        return this.http.get(`http://localhost:8080/getSize/${id}`)
      }
      updatesize(id: any, newData: any) {
        return this.http.put(`http://localhost:8080/updateSize/${id}`, newData);
      }
      deletesize(id:any){
        return this.http.delete(`http://localhost:8080/deleteSize/${id}`)
      }

      //sauce
      addsauce(body:any){
        return this.http.post("http://localhost:8080/createSauce",body)
      }
      getsauce(){
        return this.http.get("http://localhost:8080/getSauces")
      }
      getsaucebyid(id:any){
        return this.http.get(`http://localhost:8080/getSauce/${id}`)
      }
      updatesauce(id: any, newData: any) {
        return this.http.put(`http://localhost:8080/updateSauce/${id}`, newData);
      }
      deletesauce(id:any){
        return this.http.delete(`http://localhost:8080/deleteSauce/${id}`)
      }

      //topping
      addtopping(body:any){
        return this.http.post("http://localhost:8080/createTopping",body)
      }
      gettopping(){
        return this.http.get("http://localhost:8080/getToppings")
      }
      gettoppingbyid(id:any){
        return this.http.get(`http://localhost:8080/getTopping/${id}`)
      }
      updatetopping(id: any, newData: any) {
        return this.http.put(`http://localhost:8080/updateTopping/${id}`, newData);
      }
      deletetopping(id:any){
        return this.http.delete(`http://localhost:8080/deleteTopping/${id}`)
      }

      getOrderDetails(){
        return this.http.get(`http://localhost:8080/getOrderDetails-en`)
      }
}
