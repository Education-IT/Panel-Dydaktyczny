import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HashLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SubjectService } from './services/subject.service';
import { GiphyService } from './services/giphy.service';
import { NasaService } from './services/nasa.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentViewComponent,
    TeacherViewComponent,
    LoginComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, SubjectService, GiphyService, NasaService, LocalStorageService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
