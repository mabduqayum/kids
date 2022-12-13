import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)},
  {path: 'main', redirectTo: ''},
  {path: 'shapes', loadChildren: () => import('./pages/shapes/shapes.module').then(m => m.ShapesModule)},
  {path: 'compare', loadChildren: () => import('./pages/compare/compare.module').then(m => m.CompareModule)},
  {path: 'coins', loadChildren: () => import('./pages/coins/coins.module').then(m => m.CoinsModule)},
  { path: 'compare', loadChildren: () => import('./pages/compare/compare.module').then(m => m.CompareModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
