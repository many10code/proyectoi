import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  ngOnInit() {
  }

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']); // Redirige a la página de inicio
  }

}
