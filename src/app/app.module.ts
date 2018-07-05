import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './dashboard/menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './dashboard/menu-superior/menu-superior.component';
import { MenuVistaComponent } from './dashboard/menu-vista/menu-vista.component';
import { IconsModule } from './icons/icons.module';
import { ListadoComponent } from './producto/listado/listado.component';
import { BodyComponent } from './dashboard/body/body.component';
import { NuevoComponent } from './producto/nuevo/nuevo.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClienteListadoComponent} from './cliente/listado/listado.component';
import { ClientenuevoComponent } from './cliente/clientenuevo/clientenuevo.component';
import { ProgressComponent } from './progress/progress.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    MenuVistaComponent,
    ListadoComponent,
    BodyComponent,
    NuevoComponent,
    ClienteListadoComponent,
    ClientenuevoComponent,
    ProgressComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
