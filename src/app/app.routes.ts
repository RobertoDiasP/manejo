import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'empresa',
    loadComponent: () => import('./empresa/empresa.page').then( m => m.EmpresaPage),
    canActivate: [authGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage),
    canActivate: [authGuard]
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.page').then( m => m.ProdutosPage),
    canActivate: [authGuard]
  },
  {
    path: 'clientes',
    loadComponent: () => import('./clientes/clientes.page').then( m => m.ClientesPage),
    canActivate: [authGuard]
  },
  {
    path: 'talhao',
    loadComponent: () => import('./talhao/talhao.page').then( m => m.TalhaoPage),
    canActivate: [authGuard]
  },
  {
    path: 'viabilidade',
    loadComponent: () => import('./viabilidade/viabilidade.page').then( m => m.ViabilidadePage),
    canActivate: [authGuard]
  },
  {
    path: 'avaliacao',
    loadComponent: () => import('./avaliacao/avaliacao.page').then( m => m.AvaliacaoPage),
    canActivate: [authGuard]
  },
  {
    path: 'avaliacao-his',
    loadComponent: () => import('./avaliacao-his/avaliacao-his.page').then( m => m.AvaliacaoHisPage),
    canActivate: [authGuard]
  },
  {
    path: 'viabilidade-tools',
    loadComponent: () => import('./viabilidade-tools/viabilidade-tools.page').then( m => m.ViabilidadeToolsPage),
    canActivate: [authGuard]
  },
  {
    path: 'agenda-aplicacao',
    loadComponent: () => import('./agenda-aplicacao/agenda-aplicacao.page').then( m => m.AgendaAplicacaoPage),
    canActivate: [authGuard]
  },
  {
    path: 'balanco',
    loadComponent: () => import('./balanco/balanco.page').then( m => m.BalancoPage),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'produtos-pesq',
    loadComponent: () => import('./produtos-pesq/produtos-pesq.page').then( m => m.ProdutosPesqPage),
    canActivate: [authGuard]
  },  {
    path: 'talhao-pesq',
    loadComponent: () => import('./talhao-pesq/talhao-pesq.page').then( m => m.TalhaoPesqPage)
  },


  


];
