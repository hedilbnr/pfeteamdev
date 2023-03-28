import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


    onSubmit() {
      // Vérifiez les informations d'identification de l'utilisateur ici
      // Si la connexion est réussie, naviguez vers le tableau de bord
      this.router.navigate(['/dashboard']);
    }
    
    // TODO: Implement login logic here
  }

