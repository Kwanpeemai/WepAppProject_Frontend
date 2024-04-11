import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // count = 0;
  // stars1 : string = '';
  // star1 : string[] = [];
  // star2 : string[] = [];
  // title = 'star';
  // calStar1(_count:number){
  //   let n = _count;
  //   let string = "";
  //   let string1 = "";
  //   this.stars1 = "";
  //   this.star1 = [];

  //   this.star1.push("Star 1 : "+ n)
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 0; j < i; j++) {
  //       string += ("*");
  //       string1 += ("*");
  //     }
  //     string += ("\n");
  //     this.star1.push(string1)
  //     string1 = " "
  //   }
  //   for (let i = 1; i <= n - 1; i++) {
  //     for (let j = 0; j < n - i; j++) {
  //       string += ("*");
  //       string1 += ("*");
  //     }
  //     this.star1.push(string1)
  //     string += ("\n");
  //     string1 = " "
  //   }

  //   this.star1.push("Star 2 : "+ n)
  //   for (let i = 1; i <= n-1; i++) {
  //     for (let j = 0; j <= n - i; j++) {
  //       string += "*";
  //       string1 += "*";
  //     }
  //     for (let k = 0; k < i; k++) {
  //       string += " ";
  //       string1 += " ";
  //     }
  //     string += "\n";
  //     this.star1.push(string1)
  //     string1 = ""
  //   }
  //   //ส่วนล่าง
  //   for (let i = 1; i <= n ; i++) {

  //     for (let j = 0; j < i; j++) {
  //       string += "*";
  //       string1 += "*"
  //     }
  //     string1 += " ";
  //     for (let k = 0; k < n - i; k++) {
  //       string += " ";
  //       string1 += " ";
  //     }
  //     string += "\n";
  //     this.star1.push(string1)
  //     string1 = ""
  //   }
  //   this.stars1 = string;
  //   console.log(this.star1);
  //   console.log(this.stars1);
  // }

  // calStar(_count:number){
  //   let n = _count;
  //   let string = "";
  //   let string1 = "";
  //   //ส่วนบน
  //   for (let i = 1; i <= n-1; i++) {
  //     for (let j = 0; j <= n - i; j++) {
  //       string += "*";
  //       string1 += "*";
  //     }
  //     for (let k = 0; k < i; k++) {
  //       string += " ";
  //       string1 += " ";
  //     }
  //     string += "\n";
  //     this.star2.push(string1)
  //     string1 = ""
  //   }
  //   //ส่วนล่าง
  //   for (let i = 1; i <= n ; i++) {

  //     for (let j = 0; j < i; j++) {
  //       string += "*";
  //       string1 += "*"
  //     }
  //     string1 += " ";
  //     for (let k = 0; k < n - i; k++) {
  //       string += " ";
  //       string1 += " ";
  //     }
  //     string += "\n";
  //     this.star2.push(string1)
  //     string1 = ""
  //   }
  //   this.stars2 = string;
  //   console.log(this.star2);
  //   console.log(this.stars2);
  // }
}
