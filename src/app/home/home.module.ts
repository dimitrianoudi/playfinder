import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [HomeComponent, SearchComponentComponent, SearchResultComponent],
})
export class HomeModule {}
