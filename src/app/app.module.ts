import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const approutes :Routes =[
{path:'list',
component:SessionItemListComponent
},

{path:'admin',
loadChildren:"./admin/admin.module#AdminModule"
},
{path:'', redirectTo:'/list',
pathMatch :'full',
},
{path:'**' ,
component:PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes,{enableTracing:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
