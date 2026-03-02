import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/imagens',
    pathMatch: 'full',
  },
  {
    path: 'empresa',
    loadComponent: () => import('./empresa/empresa.page').then( m => m.EmpresaPage),
    
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage),
    
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.page').then( m => m.ProdutosPage),
    
  },
  {
    path: 'clientes',
    loadComponent: () => import('./clientes/clientes.page').then( m => m.ClientesPage),
    canActivate: [authGuard]
  },
  {
    path: 'talhao',
    loadComponent: () => import('./talhao/talhao.page').then( m => m.TalhaoPage),
    
  },
  {
    path: 'viabilidade',
    loadComponent: () => import('./viabilidade/viabilidade.page').then( m => m.ViabilidadePage),
   
  },
  {
    path: 'avaliacao',
    loadComponent: () => import('./avaliacao/avaliacao.page').then( m => m.AvaliacaoPage),
    
  },
  {
    path: 'avaliacao-his',
    loadComponent: () => import('./avaliacao-his/avaliacao-his.page').then( m => m.AvaliacaoHisPage),
    
  },
  {
    path: 'viabilidade-tools',
    loadComponent: () => import('./viabilidade-tools/viabilidade-tools.page').then( m => m.ViabilidadeToolsPage),
  
  },
  {
    path: 'agenda-aplicacao',
    loadComponent: () => import('./agenda-aplicacao/agenda-aplicacao.page').then( m => m.AgendaAplicacaoPage),
    
  },
  {
    path: 'balanco',
    loadComponent: () => import('./balanco/balanco.page').then( m => m.BalancoPage),
    
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'produtos-pesq',
    loadComponent: () => import('./produtos-pesq/produtos-pesq.page').then( m => m.ProdutosPesqPage),
    canActivate: [authGuard]
    
  },
  {
    path: 'talhao-pesq',
    loadComponent: () => import('./talhao-pesq/talhao-pesq.page').then( m => m.TalhaoPesqPage)
  },
  {

    path: 'mapa',
    loadComponent: () => import('./mapa/mapa.page').then( m => m.MapaPage)
  },
  {
    path: 'mapa-calor',
    loadComponent: () => import('./mapa-calor/mapa-calor.page').then( m => m.MapaCalorPage)
  },
  {
    path: 'painel-talhao',
    loadComponent: () => import('./painel-talhao/painel-talhao.page').then( m => m.PainelTalhaoPage)
  },
  {
    path: 'talhao-detalhes/:id',
    loadComponent: () => 
      import('./talhao-detalhes/talhao-detalhes.page')
      .then(m => m.TalhaoDetalhesPage)
  },
  {
    path: 'imagens',
    loadComponent: () => import('./imagens/imagens.page').then( m => m.ImagensPage)
  }




  


];
