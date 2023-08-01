import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ExpEduComponent } from './components/exp-edu/exp-edu.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyToClipboardDirective } from './shared/copy-to-clipboard.directive';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CustomScrollbarComponent } from './components/custom-scrollbar/custom-scrollbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroBannerComponent,
    ExpEduComponent,
    TimelineComponent,
    SkillsComponent,
    WorksComponent,
    SidebarComponent,
    AboutComponent,
    FooterComponent,
    CopyToClipboardDirective,
    WelcomeComponent,
    CustomScrollbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
