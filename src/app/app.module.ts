import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Periciones HTTP
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';
import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// Importar las rutas
import { RouterModule } from '@angular/router';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, {useHash: true} ),
    HttpClientModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
