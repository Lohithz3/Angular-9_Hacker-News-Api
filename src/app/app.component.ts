
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedDataService } from "./shared.service";
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackernews';


constructor(private api: ApiService,private data: SharedDataService) { }
  message;
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  ngAfterContentChecked() {

   
  }
  onclickhome(){
    // location.reload();
    this.message = [];
  }
  
}

