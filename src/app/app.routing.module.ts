import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './components/discount/discount.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomPreloadingService } from './appServices/custom-preloading.service';
import { StandaloneComponent } from './components/standalone/standalone.component';

const routes: Routes = [
  {
    path: 'discount',
    loadChildren: () =>
      import('./components/discount/discount.module').then(
        (m) => m.DiscountModule
      ),
    component: DiscountComponent,
  },
  {
    path: 'manageuser',
    component: ManageuserComponent,
  },
  {
    path: 'standalone',
    component: StandaloneComponent,
  },
  {
    path: 'products',
    data: { preload: true },
    loadChildren: () =>
      import('./components/products/products.module').then(
        (m) => m.ProductsModule
      ),
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {
    console.log('Routing Module');
  }
}
