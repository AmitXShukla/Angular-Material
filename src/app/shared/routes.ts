import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

export const APP_ROUTES = RouterModule.forRoot([
    { path: 'aboutus', component: AboutusComponent },
    { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
    //{ path: 'footer', component: FooterComponent }
    { path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
]);