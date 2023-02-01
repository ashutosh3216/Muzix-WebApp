import { Component, ElementRef,ViewChild } from '@angular/core';
import { HttpBackend } from '@angular/common/http';

import { DialogService} from '../dialog.service/dialog';
@Component({
  selector: 'alert',
  template: `
     <div>
      <h3>Alert Dialog</h3>
    </div>
	<button class="e-btn" (click)="this.showBtn($event)">Show Alert Dialog</button>
  	<button class="e-btn" (click)="this.hideBtn($event)">Close Dialog</button>
    <div id="dialogContainer">
     <div id="alertDialog" #dialogAlert></div>
     </div>
  `,
})
export class AlertDialogComponent {
  @ViewChild("dialogAlert")
    dialogTarget!: ElementRef;
  constructor(private dialogService: DialogService) { 
  }
  
  showBtn(e:any) {
    this.dialogService.showDialog(this.dialogTarget.nativeElement, {
      content: '10% of battery remaining',
      header: 'Low Battery',
      buttons: [{ click: this.hideBtn.bind(this), buttonModel: { content: 'Dismiss', isPrimary: true } }]
    });
  }

  hideBtn(e:any) {
   this.dialogService.hideDialog();
  } 
}
