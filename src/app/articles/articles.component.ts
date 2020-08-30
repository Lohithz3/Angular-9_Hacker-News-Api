
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Articles } from '../articles';
import { SharedDataService } from "../shared.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { WireframeComponent } from '../wireframe/wireframe.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  // displayedColumns: string[] = ['name', 'age', 'status'];
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
  message;
  toggleComments = false;
  loadtwomorecomments = 2;
  messages = [];
  constructor(private api: ApiService,private data: SharedDataService,public dialog: MatDialog,private snackBar: MatSnackBar) { }

   ngOnInit() {

    

    //  this.fetchStory();
    this.data.currentMessage1.subscribe(message => this.items = message);
     this.data.currentMessage3.subscribe(message => this.message = message);
    //  this.data.changeMessage2(this.countBookmarked)
    
    this.items1 = this.items;
    this.message.forEach((element,index) => {
      if(element.bookmarked == false){
        for(var i = 0; i<this.items1.length;i++){
          if(this.items[i].id == element.id){
            this.items1[i].bookmarked =false;
          }
        }
      }
      else{
        this.messages.push(element)
      }
    });
    this.data.changeMessage2(this.messages);
    
    
     for(var i = 0; i<this.items1.length;i++){
      this.items1[i].isPanelExpanded  = false;
      if(this.items1[i].bookmarked == true){
        this.bookmark.push(this.items1[i]);
        this.countBookmarked = this.countBookmarked + 1;
      }
    }
    
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

  }
   GetMyResourceData(current,i,index){
    this.api.sendGetRequest(current).subscribe((data:any)=>{
        // do something with the current variable
        this.cmt[i]=( data);
        this.items1[index].commentss[i]=this.cmt[i].text;
              // j = j+1;
        
    });
  }
  fetchcomments(index){
    // if(this.items1[index]["kids"] && this.items1[index]["kids"].length >0){
      // var reqdata= [];
    for(var i=0;i<this.items1[index]["kids"].length;i++){
       var reqdata = this.items1[index]["kids"][i];
       this.GetMyResourceData(reqdata,i,index);
      }   
     }


    onLoadComments(index){
    this.items1[index].isPanelExpanded  = !this.items1[index].isPanelExpanded ;
    // this.toggleComments = !this.toggleComments;
    console.log(index);
    this.items1[index].commentss= [{}];
    this.fetchcomments(index);
    // this.items1.forEach(function (newJobItem) {
      
      // console.log(newJobItem);
  // });
  // console.log(this.items1[index].commentss.length)
    
  }

  onCLickBookmark(index){
    
    console.log(index);
    // this.items1[index].bookmarked = false;
    
    // this.bookmark.push(this.items1[index])
    
      
      if(this.items1[index].bookmarked != true){
        this.items1[index].bookmarked = true;
        this.bookmark.push(this.items1[index]);
        this.countBookmarked = this.countBookmarked + 1;
      }
      else{
        this.items1[index].bookmarked = false;
        this.bookmark.splice([index],1);
        this.countBookmarked = this.countBookmarked - 1;
      }
    
  
  this.data.changeMessage(this.countBookmarked);
  this.data.changeMessage2(this.bookmark);
  }

  conClickArticle(element){
    if(this.items1[element].url == undefined){
      this.snackBar.open('No url for this Url!', 'End now', {
        duration: 2000,
        // horizontalPosition: this.horizontalPosition,
        // verticalPosition: this.verticalPosition,
      });
    }
    else{
    this.openWireframeDialog(this.items1[element].url,(resule)=> {

    })
  }
  }
  openWireframeDialog(url,callback){
    const dialofRef = this.dialog.open(WireframeComponent,{
      width: '1500px',
      height: '900px',
      
      data: {
        url,
      }
    })
    dialofRef.afterClosed().subscribe(result => {
      if(result){
        callback(result);
      }
    })
  }

  load2morecomments(){
    this.loadtwomorecomments = this.loadtwomorecomments + 2;
  }

}
