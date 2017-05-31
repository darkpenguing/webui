import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Service } from './components/service.component';
import { Services } from './services.component';
import { routing }       from './services.routing';
import { EntityModule } from '../common/entity/entity.module';
import { ServiceSSHComponent } from './components/service-ssh';
import { ServiceAFPComponent } from './components/service-afp';
import { ServiceDCComponent } from './components/service-dc';
import { ServiceFTPComponent } from './components/service-ftp';
import { ServiceLLDPComponent } from './components/service-lldp';
import { ServiceRSYNCComponent } from './components/service-rsync';
import { ServiceSMARTComponent } from './components/service-smart';
import { ServiceNFSComponent } from './components/service-nfs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    EntityModule,
    routing
  ],
  declarations: [
    Service,
    Services,
    ServiceSSHComponent,
    ServiceAFPComponent,
    ServiceDCComponent,
    ServiceFTPComponent,
    ServiceLLDPComponent,
    ServiceRSYNCComponent,
    ServiceSMARTComponent,
    ServiceNFSComponent
  ],
  providers: [
  ]
})
export class ServicesModule {}
