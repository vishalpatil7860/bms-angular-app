import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoanComponent } from "./loan/loan.component";
import { UpdateDetailsComponent } from "./update-details/update-details.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    { path:'', component: WelcomeComponent},
    { path:'signup', component: SignupComponent},
    { path:'login', component: LoginComponent},
    { path:'loan', component: LoanComponent},
    { path:'welcome', component: WelcomeComponent},
    { path:'updateDetails', component: UpdateDetailsComponent}


]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}