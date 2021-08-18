import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valObj = {
    email: 'hemanthvhs@gmail.com',
    password: 'test1234'
  };

  login(loginForm: NgForm) {
    console.log(loginForm.value);
  }
}
