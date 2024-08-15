import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/public', pathMatch: 'full'},
  {path: 'public', loadChildren: () => import('./public/public.routes').then(m => m.PUBLIC_ROUTES)},
  {path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)}
];
