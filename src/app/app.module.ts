import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexPagComponent } from './index-pag/index-pag.component';
import { LogInComponent } from './index-pag/log-in/log-in.component';
import { SignUpComponent } from './index-pag/sign-up/sign-up.component';
import { IndexPagAppComponent } from './index-pag-app/index-pag-app.component';
import { LeftBarNAComponent } from './index-pag-app/left-bar-n-a/left-bar-n-a.component';
import { RightBarCFCComponent } from './index-pag-app/right-bar-cf-c/right-bar-cf-c.component';
import { UpNavBarComponent } from './index-pag-app/up-nav-bar/up-nav-bar.component';
import { CenterSectionPublicationComponent } from './index-pag-app/center-section-publication/center-section-publication.component';
import { SectionAccountComponent } from './index-pag-app/left-bar-n-a/section-account/section-account.component';
import { SectionNotificationComponent } from './index-pag-app/left-bar-n-a/section-notification/section-notification.component';
import { SectionChatComponent } from './index-pag-app/right-bar-cf-c/section-chat/section-chat.component';
import { SectionFConnectedComponent } from './index-pag-app/right-bar-cf-c/section-f-connected/section-f-connected.component';
import { IndexProfileComponent } from './index-profile/index-profile.component';
import { SectionFeedComponent } from './index-profile/section-feed/section-feed.component';
import { SectionInfoPhotoProfileComponent } from './index-profile/section-info-photo-profile/section-info-photo-profile.component';
import { UpNavBarProfileComponent } from './index-profile/up-nav-bar-profile/up-nav-bar-profile.component';
import { SectionPhotoFriendsComponent } from './index-profile/section-photo-friends/section-photo-friends.component';
import { LeftPhotosComponent } from './index-profile/section-photo-friends/left-photos/left-photos.component';
import { RightFriendsComponent } from './index-profile/section-photo-friends/right-friends/right-friends.component';
import { SectionPublicationsComponent } from './index-profile/section-publications/section-publications.component';
import { IndexConfigComponent } from './index-config/index-config.component';
import { IndexGroupsComponent } from './index-groups/index-groups.component';
import { IndexChatComponent } from './index-chat/index-chat.component';
import { SectionAllChatsComponent } from './index-chat/section-all-chats/section-all-chats.component';
import { UpNavBarChatComponent } from './index-chat/up-nav-bar-chat/up-nav-bar-chat.component';
import { SectionChatsComponent } from './index-chat/section-chats/section-chats.component';
import { SectionFActiveComponent } from './index-chat/section-f-active/section-f-active.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexPagComponent,
    LogInComponent,
    SignUpComponent,
    IndexPagAppComponent,
    LeftBarNAComponent,
    RightBarCFCComponent,
    UpNavBarComponent,
    CenterSectionPublicationComponent,
    SectionAccountComponent,
    SectionNotificationComponent,
    SectionChatComponent,
    SectionFConnectedComponent,
    IndexProfileComponent,
    SectionFeedComponent,
    SectionInfoPhotoProfileComponent,
    UpNavBarProfileComponent,
    SectionPhotoFriendsComponent,
    LeftPhotosComponent,
    RightFriendsComponent,
    SectionPublicationsComponent,
    IndexConfigComponent,
    IndexGroupsComponent,
    IndexChatComponent,
    SectionAllChatsComponent,
    UpNavBarChatComponent,
    SectionChatsComponent,
    SectionFActiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
