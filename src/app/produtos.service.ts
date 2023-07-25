import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos :IProduto [] = produtos;         //variavel da classe IProduto e inicializou valores vetor "produtos[]"

  constructor() { }

  getALL(){                             //método   
    return this.produtos;               //acessando variavel da classe dentro do método
  }

  getOne(produtoId: number){
    return this.produtos.find(produto=> produto.id = produtoId)
  }
}
