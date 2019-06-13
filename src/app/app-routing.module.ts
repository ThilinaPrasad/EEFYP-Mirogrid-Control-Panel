import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ProjectPageComponent} from './components/project-page/project-page.component';
import {AboutPageComponent} from './components/about-page/about-page.component';
import {OperationalResultsPageComponent} from './components/operational-results-page/operational-results-page.component';
import {GoogleSigninComponent} from './components/google-signin/google-signin.component';
import {AuthguardServiceService} from './services/auth/authguard-service.service';

const routes: Routes = [{path: '' , component: HomePageComponent},
  {path: 'project' , component: ProjectPageComponent},
  {path: 'operational' , component: OperationalResultsPageComponent, canActivate: [AuthguardServiceService]},
  {path: 'about' , component: AboutPageComponent},
  {path: 'signin' , component: GoogleSigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
