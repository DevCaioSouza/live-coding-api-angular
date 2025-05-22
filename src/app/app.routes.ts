import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';

export const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'user', component: UserpageComponent}
];
