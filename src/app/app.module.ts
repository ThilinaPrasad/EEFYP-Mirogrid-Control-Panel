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
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {UserService} from './services/users/user.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ConnectionService} from './services/conns/connection.service';
import {AgentService} from './services/agents/agent.service';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('47920873754-145evs8v11u2sqc1feau3gsuacfm991r.apps.googleusercontent.com')
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
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
    UserService,
    ConnectionService,
    AgentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
