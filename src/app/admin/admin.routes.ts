import {Routes} from '@angular/router';
import {authGuard} from "../guards/auth.guard";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'blogs',
    loadComponent: () => import('./blog-list/blog-list.component').then(m => m.BlogListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'blogs/new',
    loadComponent: () => import('./blog-form/blog-form.component').then(m => m.BlogFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'blogs/:slug/edit',
    loadComponent: () => import('./blog-form/blog-form.component').then(m => m.BlogFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'projects',
    loadComponent: () => import('./project-list/project-list.component').then(m => m.ProjectListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'projects/new',
    loadComponent: () => import('./project-form/project-form.component').then(m => m.ProjectFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'projects/:slug/edit',
    loadComponent: () => import('./project-form/project-form.component').then(m => m.ProjectFormComponent),
    canActivate: [authGuard]
  },
  {path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)}
];
