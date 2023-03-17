import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/users/login/login.component";
import {RegistrationComponent} from "./components/users/registration/registration.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {ContributionsComponent} from "./components/contributions/contributions.component";
import {ProfilComponent} from "./components/users/profil/profil.component";
import {DashboardAdminComponent} from "./components/admin/dashboard-admin/dashboard-admin.component";
import {LegalNoticesComponent} from "./components/legal-notices/legal-notices.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'connexion',
    component:  LoginComponent
  },
  {
    path: 'inscription',
    component:  RegistrationComponent
  },
  {
    path: 'tableau-de-bord',
    component:  DashboardComponent
  },
  {
    path: 'formations',
    component:  CoursesComponent
  },
  {
    path: 'contributions',
    component:  ContributionsComponent
  },
  {
    path: 'profil',
    component:  ProfilComponent
  },
  {
    path: 'admin',
    component:  DashboardAdminComponent
  },
  {
    path: 'mentions-legales',
    component:  LegalNoticesComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
