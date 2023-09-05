import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';

const routes: Routes = [
  { path: 'planets/:name', component: PlanetComponent },
  { path: '', redirectTo: '/planets/mercury', pathMatch: 'full' },
  { path: '**', redirectTo: '/planets/mercury', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
