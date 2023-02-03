import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/token.interceptor';
import { BreadcrumbsService } from './services/breadcrumbs/breadcrumbs.service';
import { DataService } from './services/data.service';
import { NotificationService } from './services/notification.service';
import { ThemeService } from './services/themes/theme.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './material-module';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from "ngx-slick-carousel";
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { HomeComponent } from './modules/general/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    SharedModule,
    NgbDatepickerModule,
    SlickCarouselModule,
    MatModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
    NgbModule,
  ],
  providers: [TokenInterceptor, BreadcrumbsService, ThemeService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, NotificationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
