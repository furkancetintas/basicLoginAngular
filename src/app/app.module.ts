import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductAddComponent } from './modules/product-add/product-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductAddComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
