import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DealComponent } from './deal/deal.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from './footer/footer.component';
import { IconContainersComponent } from './icon-containers/icon-containers.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedComponent,
    NewsletterComponent,
    ArrivalsComponent,
    DealComponent,
    ReviewsComponent,
    BlogsComponent,
    FooterComponent,
    IconContainersComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
