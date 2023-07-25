import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit { // interface onInit possui o método ngOnInit()

  constructor(
    public carrinhoService: CarrinhoService  //
  ) { }
  ngOnInit(): void {

  }


}
