import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'home', pathMatch:'full',
  },
 
  {
    path:'signup/coaches',
    component:SignupComponent,
    data: { type:'coaches' },
    
  },
  {
    path:'signup/users',
    component:SignupComponent,
    data: { type:'users' },
  },

  {
    path:'login/coaches',
    component:LoginComponent
  },
  {
    path:'login/users',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
