import { Component, OnInit, Inject } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';

export interface DialogData{
  url: string,
}

@Component({
  selector: 'app-wireframe',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.scss']
})
export class WireframeComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<WireframeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    // if(this.data.url == undefined){
    //   this.data.url = "";
    // }
    console.log(this.data)
  }
  onClosedialog(){
    this.dialogRef.close();
  }
  // transform(url) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }

}
