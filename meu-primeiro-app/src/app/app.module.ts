import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { InputComponent } from './shared/input/input.component';
import { NewComponentComponent } from './shared/new-component/new-component.component';
import { OutputComponent } from './shared/output/output.component';

@NgModule({
    declarations: [
      AppComponent,
      TitleComponent,
      DataBidingComponent,
      DiretivasEstruturaisComponent,
      DiretivasAtributosComponent,
    ],

    imports:[
      SharedModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule
    ],

    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {

}
