 import { Component}  from "@angular/core";


 @Component({
    standalone: true,
  selector: 'app-profile',
  template: "<h1>Dymamic Profile Template</h1>",
  styles: [
    `
      :host {
        display: block;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 10px;
        background-color: #f1f1f1;
        color: #333;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }
    `
  ]

})

export class ProfileComponent{
  title = 'trang';
}