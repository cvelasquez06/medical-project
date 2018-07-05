import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $( '.ptoggle' ).click(function() {
      $('[data-item="' + this.id + '"]').toggle( 'slow' );
        $(this).toggleClass('down');
    });
  }

}
