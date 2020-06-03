import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './ui/aboutus.component';
import { TechnologyComponent } from './ui/technology.component';
import { BusinessComponent } from './ui/business.component';
import { ProComponent } from './ui/pro.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'pro', component: ProComponent },
  { path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
