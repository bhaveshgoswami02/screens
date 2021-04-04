import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'earn',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'earn',
    loadChildren: () => import('./pages/earn/earn.module').then( m => m.EarnPageModule)
  },
  {
    path: 'earn-detail',
    loadChildren: () => import('./pages/earn-detail/earn-detail.module').then( m => m.EarnDetailPageModule)
  },
  {
    path: 'newest-earner',
    loadChildren: () => import('./pages/newest-earner/newest-earner.module').then( m => m.NewestEarnerPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'new-in-shop',
    loadChildren: () => import('./pages/new-in-shop/new-in-shop.module').then( m => m.NewInShopPageModule)
  },
  {
    path: 'newest-earner-card',
    loadChildren: () => import('./pages/newest-earner-card/newest-earner-card.module').then( m => m.NewestEarnerCardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'show-some-love',
    loadChildren: () => import('./pages/show-some-love/show-some-love.module').then( m => m.ShowSomeLovePageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'shop-detail',
    loadChildren: () => import('./pages/shop-detail/shop-detail.module').then( m => m.ShopDetailPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./pages/overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'history-detail',
    loadChildren: () => import('./pages/history-detail/history-detail.module').then( m => m.HistoryDetailPageModule)
  },
  {
    path: 'size-modal',
    loadChildren: () => import('./pages/size-modal/size-modal.module').then( m => m.SizeModalPageModule)
  },
  {
    path: 'filter-modal',
    loadChildren: () => import('./pages/filter-modal/filter-modal.module').then( m => m.FilterModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
