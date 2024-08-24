import {Routes} from '@angular/router';
import {AuthGuard} from "../guards/auth.guard";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'blogs',
    loadComponent: () => import('./blog-list/blog-list.component').then(m => m.BlogListComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'blogs/new',
    loadComponent: () => import('./blog-form/blog-form.component').then(m => m.BlogFormComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'blogs/:slug/edit',
    loadComponent: () => import('./blog-form/blog-form.component').then(m => m.BlogFormComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    loadComponent: () => import('./project-list/project-list.component').then(m => m.ProjectListComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/new',
    loadComponent: () => import('./project-form/project-form.component').then(m => m.ProjectFormComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:slug/edit',
    loadComponent: () => import('./project-form/project-form.component').then(m => m.ProjectFormComponent),
    canActivate: [AuthGuard]
  },
  {path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)}
];
