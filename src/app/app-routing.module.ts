import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarshitComponent } from './components/harshit/harshit.component';
import { OmkarComponent } from './components/omkar/omkar.component';
import { ProgrammerComponent } from './components/programmer/programmer.component';
import { SameerComponent } from './components/sameer/sameer.component';

const routes: Routes = [
  {
    path: 'sameer',
    component: SameerComponent,
    children: [
      {
        path: 'programmer',
        component: ProgrammerComponent
      }
    ]
  },
  {
    path: 'omkar',
    component: OmkarComponent
  },
  {
    path: 'harshit',
    component: HarshitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
