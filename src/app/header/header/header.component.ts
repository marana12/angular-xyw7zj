import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public background_img:string='https://firebasestorage.googleapis.com/v0/b/photogo-angular.appspot.com/o/icon-png%2Fmenu-icon%2Fic_launcher-hdpi.png?alt=media&token=0a627b17-18de-4588-98f4-8f8962269d11';
 
  constructor() {
   }

  ngOnInit() {
  }

}