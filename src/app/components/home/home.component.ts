import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  ngOnInit(): void {
this.selected=new Date()

  }


  selected!: Date | null;


  truelement:boolean=false

  onclick(data:boolean){
    this.truelement=!data
  }
  isBar = false


  barFunction(){

    this.isBar=!this.isBar

  }

}
