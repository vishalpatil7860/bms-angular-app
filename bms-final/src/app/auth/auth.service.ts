import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;


    constructor(private router: Router, private afAuth: AngularFireAuth) {}

    registerUser(authData: AuthData) {
       this.afAuth.createUserWithEmailAndPassword(
           authData.email,
           authData.password
       ).then(result => {
           console.log(result);
           this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/login']);
       }).catch(error => {
           console.log(error);
       }); 
        
    }


    login(authData: AuthData) {
        this.afAuth.signInWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
            console.log(result);
            this.authSuccessfully();
        }).catch(error => {
            console.log(error);
        }); 

    }

    logout() {
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;


    }

   
    
    isAuth() {
        return this.isAuthenticated;
    }

    private authSuccessfully() {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/welcome']); 
    }

}