import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPrecoComponent } from './components/card/card-preco/card-preco.component';
import { Ps5Component } from './pages/ps5/ps5.component';
import { Ps4Component } from './pages/ps4/ps4.component';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { CardInicialComponent } from './components/card-inicial/card-inicial.component';
import { CardImportanteComponent } from './components/card-importante/card-importante.component';
import { FooterComponent } from './components/card/footer/footer.component';
import { MelhoresjogosComponent } from './components/card/melhoresjogos/melhoresjogos.component';
import { NovosjogosComponent } from './components/card/novosjogos/novosjogos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPrecoComponent,
    Ps5Component,
    Ps4Component,
    CardPrincipalComponent,
    CardInicialComponent,
    CardImportanteComponent,
    FooterComponent,
    MelhoresjogosComponent,
    NovosjogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
