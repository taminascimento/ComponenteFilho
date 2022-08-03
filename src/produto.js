import { LightningElement, api } from "lwc";

export default class Produto extends LightningElement {
 //variaveis com valores setados
 @api nome;
 @api preco;
 
}


	/*crie duas propriedades publicas
  
    nome e preco, mostrar seus valores no produto.html

    e chamar o componente dentro do App.
    3x com valores de produtos diferentes
  
  */
