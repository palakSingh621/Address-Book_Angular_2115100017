import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showLoginForm: boolean = true;

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
