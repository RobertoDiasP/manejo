import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'empresa',
    loadComponent: () => import('./empresa/empresa.page').then( m => m.EmpresaPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.page').then( m => m.ProdutosPage)
  },
  {
    path: 'clientes',
    loadComponent: () => import('./clientes/clientes.page').then( m => m.ClientesPage)
  },
  {
    path: 'talhao',
    loadComponent: () => import('./talhao/talhao.page').then( m => m.TalhaoPage)
  },
  {
    path: 'viabilidade',
    loadComponent: () => import('./viabilidade/viabilidade.page').then( m => m.ViabilidadePage)
  },  {
    path: 'avaliacao',
    loadComponent: () => import('./avaliacao/avaliacao.page').then( m => m.AvaliacaoPage)
  },
  {
    path: 'avaliacao-his',
    loadComponent: () => import('./avaliacao-his/avaliacao-his.page').then( m => m.AvaliacaoHisPage)
  },
  {
    path: 'viabilidade-tools',
    loadComponent: () => import('./viabilidade-tools/viabilidade-tools.page').then( m => m.ViabilidadeToolsPage)
  },
  {
    path: 'agenda-aplicacao',
    loadComponent: () => import('./agenda-aplicacao/agenda-aplicacao.page').then( m => m.AgendaAplicacaoPage)
  },
  {
    path: 'balanco',
    loadComponent: () => import('./balanco/balanco.page').then( m => m.BalancoPage)
  },

];
