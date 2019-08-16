import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbPaginationModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterbarComponent } from './components/footerbar/footerbar.component';
import {AppRoutingModule} from './app-routing.module';
import * as $ from 'jquery';
import { FloatingBtnComponent } from './components/floating-btn/floating-btn.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { OperationalResultsPageComponent } from './components/operational-results-page/operational-results-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SourcesSetComponent } from './components/sources-set/sources-set.component';
import { AgentsSetComponent } from './components/agents-set/agents-set.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {HttpClientModule} from '@angular/common/http';
import {GoogleLoginService} from './services/auth/google-login.service';
import { GoogleSigninComponent } from './components/google-signin/google-signin.component';
import {AuthguardServiceService} from './services/auth/authguard-service.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {FormsModule} from '@angular/forms';
import {AddUserService} from './services/add-user.service';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('768229157076-0pf7fsda7gsae2ek56afnqvfar3rq1qf.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FooterbarComponent,
    FloatingBtnComponent,
    ProjectPageComponent,
    OperationalResultsPageComponent,
    AboutPageComponent,
    SourcesSetComponent,
    AgentsSetComponent,
    GoogleSigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpClientModule,
    SnotifyModule,
    NgxPageScrollCoreModule.forRoot({duration: 200, scrollOffset: 70}),
    NgxPageScrollModule,
    FormsModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    GoogleLoginService,
    AuthguardServiceService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    AddUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
