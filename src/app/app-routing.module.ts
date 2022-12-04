import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/content/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./components/content/events/events.module').then(m=>m.EventsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
