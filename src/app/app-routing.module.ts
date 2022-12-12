import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'main', redirectTo: ''},
  {path: 'shapes', loadChildren: () => import('./shapes/shapes.module').then(m => m.ShapesModule)},
  {path: 'compare', loadChildren: () => import('./compare/compare.module').then(m => m.CompareModule)},
  {path: 'coins', loadChildren: () => import('./coins/coins.module').then(m => m.CoinsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
