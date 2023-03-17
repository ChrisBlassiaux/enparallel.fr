import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LegalNoticesComponent } from './components/legal-notices/legal-notices.component';
import { WaitingValidationComponent } from './components/users/waiting-validation/waiting-validation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContributionsComponent } from './components/contributions/contributions.component';
import { ProfilComponent } from './components/users/profil/profil.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatsComponent } from './components/stats/stats.component';
import { FilterComponent } from './components/filter/filter.component';
import { SourcesComponent } from './components/sources/sources.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModuleModule } from "./material-module/material-module.module";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    LegalNoticesComponent,
    WaitingValidationComponent,
    DashboardComponent,
    CoursesComponent,
    ContributionsComponent,
    ProfilComponent,
    DashboardAdminComponent,
    NavbarComponent,
    StatsComponent,
    FilterComponent,
    SourcesComponent,
    ChallengesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
