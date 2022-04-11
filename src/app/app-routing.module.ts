import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { IndexPagComponent } from './index-pag/index-pag.component';
import { IndexPagAppComponent } from './index-pag-app/index-pag-app.component';
import { SignUpComponent } from './index-pag/sign-up/sign-up.component';
import { IndexProfileComponent } from './index-profile/index-profile.component';
import { IndexChatComponent } from './index-chat/index-chat.component';
import { IndexGroupsComponent } from './index-groups/index-groups.component';
import { IndexConfigComponent} from './index-config/index-config.component';


const routes: Routes = [
  {path: '', component: IndexPagComponent},
  {path: 'Home', component: IndexPagAppComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'Profile', component: IndexProfileComponent},
  {path: 'Chat', component: IndexChatComponent},
  {path: 'Group', component: IndexGroupsComponent},
  {path: 'Config', component: IndexConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
