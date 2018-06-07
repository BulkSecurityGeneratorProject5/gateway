import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from '../shared';
import { SkuService } from '../sku/sku.service';

import { HOME_ROUTE, HomeComponent } from './';
import { TableComponent } from '../table/table.component';

@NgModule({
    imports: [
        GatewaySharedModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
        TableComponent
    ],
    entryComponents: [
    ],
    providers: [
    SkuService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayHomeModule {}
