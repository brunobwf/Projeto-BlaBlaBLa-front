import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';

const routes : Routes = [
    { path: '', loadChildren: () => import('./landing-page/landing-page.module').then((m) => m.LandingPageModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
    { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then((m) => m.CadastroModule) }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
