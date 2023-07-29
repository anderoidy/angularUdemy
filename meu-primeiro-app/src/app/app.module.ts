import { NewComponentComponent } from './shared/new-component/new-component.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { FormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { InputComponent } from './shared/input/input.component';
import { OutputComponent } from './shared/output/output.component';


@NgModule({
    declarations: [
        AppComponent,
        TitleComponent,
        DataBidingComponent,
        DiretivasEstruturaisComponent,
        DiretivasAtributosComponent,
        NewComponentComponent,
        InputComponent,
        OutputComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ]
})
export class AppModule { }
