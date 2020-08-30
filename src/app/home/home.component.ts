import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
// import { HomeComponent } from './home/home.component';
import { SharedDataService } from "../shared.service";
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
articles :any = [];
story :any = []
items:any =[];
items1:any = [{}];
bookmark:any = [];
commentsdata= [];
countBookmarked:number = 0;
 comments:[];
 commentss = [];
ind: number = 0;
commentsdata1: any;
cmt = [];
constructor(private api: ApiService,private data: SharedDataService,private router: Router) { }
  message;
  messages1;
  ngOnInit() {
    this.fetchStory();
  }
   
  fetchStory(){
    this.api.getstroy().subscribe((data:any)=>{
      console.log(data);
      this.story = data;
      // this.story.forEach(element => {
      //   console.log(element);
        
      // });
      this.fetchArticle();
      
    },
     error => {
      console.log(error);
      // this.errorFromSubscribe = error;
    }); 
    
  }

  fetchArticle(){
    this.story.forEach((item,index) => {
    // console.log(element);
    
    this.api.sendGetRequest(item).subscribe((data:any)=>{
      // console.log(data.title);
      this.articles = (data);
      // this.articles.push({"bookmarked": false});
      // if(this.articles.title === undefined){
      //   this.articles.title = " qwerty";
      // }
      
      
        this.items.push(this.articles);
        // console.log(this.items);
    },
     error => {
      console.log(error);
      // this.errorFromSubscribe = error;
    }); 
  });
  // this.fetchcomments(this.items);
  this.items1 = this.items;
  this.data.changeMessage1(this.items1);

  }

}