import { LearnquestionsComponent } from './users/learnquestions/learnquestions.component';
import { QuestionListComponent } from './admin/question-list/question-list.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { GivetestComponent } from './users/givetest/givetest.component';
import { UserhomeComponent } from './users/userhome/userhome.component';
import { MyscoresComponent } from './users/myscores/myscores.component';
import { AllscoresComponent } from './admin/allscores/allscores.component';

const routes: Routes = [
  { path: '',component:IndexComponent,pathMatch:'full'},
  { path: 'index', component: IndexComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminHome', component:AdminhomeComponent},
  { path: 'questionList', component: QuestionListComponent},
  { path: 'givetest', component: GivetestComponent},
  { path: 'userHome', component: UserhomeComponent},
  { path: 'myscores', component: MyscoresComponent},
  { path: 'allscores', component: AllscoresComponent},
  { path: 'learnQuestions', component: LearnquestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
