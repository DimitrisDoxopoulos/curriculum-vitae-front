import {Routes} from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  {path: '', loadComponent: () => import('./home-page/home-page.component').then(m => m.HomePageComponent)},
  {path: 'projects', loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent)},
  {
    path: 'projects/:slug',
    loadComponent: () => import('./project-details/project-details.component').then(m => m.ProjectDetailsComponent)
  },
  {path: 'blog', loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent)},
  {
    path: 'blog/:slug',
    loadComponent: () => import('./blog-details/blog-details.component').then(m => m.BlogDetailsComponent)
  },
  {path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
];
