import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view/student-view.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: 'student-view' , component: StudentViewComponent},
  {path: 'teacher-view' , component: TeacherViewComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'portfolio' , component: PortfolioComponent},
  {path: '' , redirectTo: '/portfolio',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
