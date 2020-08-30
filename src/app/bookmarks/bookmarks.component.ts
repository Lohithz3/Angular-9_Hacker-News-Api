import { Component, OnInit } from '@angular/core';
import { SharedDataService } from "../shared.service";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  message;
  bookmarkeddata = [];
  constructor(private data: SharedDataService) { }
  toggleComments = false;
  
  items1:any = [{}];

  countBookmarked:number = 0;
  loadtwomorecomments = 2;
  ngOnInit() {
    this.data.currentMessage2.subscribe(message => this.items1 = message);
    for(var i = 0; i<this.items1.length;i++){
      this.items1[i].isPanelExpanded  = false;
    }
    
    // this.data.changeMessage2(this.message);
  }
  onLoadComments(index){
    console.log(index);
    this.items1[index].isPanelExpanded  = !this.items1[index].isPanelExpanded ;
    this.toggleComments = !this.toggleComments;
    // this.items1 = this.items1;
    // this.items1[index].commentss= [{}];
    // this.fetchcomments(index);
  //   this.items1.forEach(function (newJobItem) {
  //     newJobItem.bookmarked = '';
     
  // });
 
    
  }

  onCLickBookmark(index){
    // var bookmark = [];
    console.log(index);
     
    if(this.items1[index].bookmarked = true){
      this.items1[index].bookmarked = false;
      // this.bookmark.push(this.items1[index]);
     
    }
    this.items1.forEach(element => {
      if(element.bookmarked == true){
        this.countBookmarked = this.countBookmarked + 1;
      }
    });
//     else{
//       this.items1[index].bookmarked = false;
//       this.bookmark.splice([index],1);
//       this.countBookmarked = this.countBookmarked - 1;
//     }
  

this.data.changeMessage(this.countBookmarked);
this.data.changeMessage3(this.items1);
  
  }
  load2morecomments(){
    this.loadtwomorecomments = this.loadtwomorecomments + 2;
  }
}
