import { EmptyRouteComponent } from './../../../mfe1/src/app/empty-route/empty-route.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'carts', loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule) },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/carts-app' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
