import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_book_price';
  display=false;

  books=[
    {id:1,name:'Asp.net',Price:'25000'},
    {id:2,name:'Java',Price:'20000'},
    {id:3,name:'Angular',Price:'35000'},
    {id:4,name:'SQL',Price:'21000'}
  ]
  
  obj={
    data:"hi"
  }

  public ngOnInit():void{
    $(document).ready(function(){
      $(document).ready(function(){
        var div=$("div");
        div.animate({left:'100px'},"slow");
        div.animate({fontSize:'5em'},"slow")
      });
    });
  }
}

