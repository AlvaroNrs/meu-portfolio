import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcessoRedesComponent } from './acesso-redes/acesso-redes.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { NaoFinalizadoComponent } from './nao-finalizado/nao-finalizado.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AcessoRedesComponent,
    SobreMimComponent,
    CurriculoComponent,
    NaoFinalizadoComponent,
    TrabalhosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
