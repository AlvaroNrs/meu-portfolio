import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { NaoFinalizadoComponent } from './nao-finalizado/nao-finalizado.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';

const routes: Routes = [
  /*Para rotas vazias, a propriedade pathMatch é necessária. Deve ter o valor 'full' para que seja pego todo o
  caminho da url (e não apenas 'https://...')*/
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreMimComponent},
  {path: 'curriculo', component: CurriculoComponent},
  {path: 'trabalhos', component: TrabalhosComponent},
  {path: 'nao-finalizado', component: NaoFinalizadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
