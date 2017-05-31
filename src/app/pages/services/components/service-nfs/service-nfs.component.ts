import { check } from '@angular/tsc-wrapped/src/tsc';
import { group } from '@angular/core/core';
import {  ApplicationRef, Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { DynamicFormControlModel, DynamicFormService, DynamicCheckboxModel,
          DynamicInputModel, DynamicSelectModel, DynamicTextAreaModel,
          DynamicCheckboxGroupModel } from '@ng2-dynamic-forms/core';


import { EntityConfigComponent } from '../../../common/entity/entity-config/';
import { GlobalState } from '../../../../global.state';
import { RestService, WebSocketService, UserService } from '../../../../services/';
import * as _ from 'lodash';

import { Subscription } from 'rxjs';

@Component ({
    selector: 'nfs-edit',
    template: ` <entity-config [conf]="this"></entity-config>`,
    providers: [UserService]
})

export class ServiceNFSComponent {
  protected resource_name: string = 'services/nfs';
  private entityEdit: EntityConfigComponent;
  protected route_success: string[] = ['services'];

  protected formModel: DynamicFormControlModel[] = [
    new DynamicInputModel({
    id: 'nfs_srv_servers',
    label: 'Number of servers:',
    }),
    new DynamicCheckboxModel({
      id: 'nfs_srv_udp',
      label: 'Serve UDP NFS clients:',
    }),
    new DynamicCheckboxGroupModel({
      id: 'nfs_srv_bindip',
      label: 'Bind IP Addresses:',
      group: [],
    }),
    new DynamicCheckboxModel({
      id: 'nfs_srv_allow_nonroot',
      label: 'Allow non-root mount:',
    }),
    new DynamicCheckboxModel({
      id: 'nfs_srv_v4',
      label: 'Enable NFSv4:',
    }),
    new DynamicCheckboxModel({
      id: 'nfs_srv_v3_v4',
      label: 'NFSv3 ownership model for NFSv4:',
    }),
    new DynamicCheckboxModel({
      id: 'nfs_srv_v4_krb',
      label: 'Require Kerberos for NFSv4:',
    }),
    new DynamicInputModel({
        id: 'nfs_srv_mountd_port',
        label: 'mountd(8) bind port:',
    }),
    new DynamicInputModel({
        id: 'nfs_srv_rpcstatd_port',
        label: 'rpc.statd(8) bind port:',
    }),
    new DynamicInputModel({
        id: 'nfs_srv_rpclockd_port',
        label: 'rpc.lockd(8) bind port:',
    }),
    new DynamicCheckboxModel({
      id: 'nfs_srv_16',
      label: 'Support >16 groups:',
    }),
    new DynamicCheckboxModel({
      id: 'log_mntd_requests',
      label: 'Log mountd(8) requests:',
    }),
    new DynamicCheckboxModel({
      id: 'log_rpc_statd_lockd_requests',
      label: 'Log rpc.statd(8) and rpc.lockd(8)',
    }),
  ];

private nfs_srv_bindip: DynamicCheckboxGroupModel;
constructor(protected router: Router, protected route: ActivatedRoute, protected rest: RestService,
                protected ws: WebSocketService, protected formService: DynamicFormService,
                protected _injector: Injector, protected _appRef: ApplicationRef,
                protected _state: GlobalState, protected userService: UserService) {

  }

  preInit(entityEdit: any){
    this.rest.get('network/interface/', {}).subscribe((res) => {
      this.nfs_srv_bindip = <DynamicCheckboxGroupModel>this.formService.findById('nfs_srv_bindip', this.formModel);
      res.data.forEach((item) => {

      });
    });
  }

  afterInit(entityEdit: any) {
    this.entityEdit = entityEdit;
  }

}



