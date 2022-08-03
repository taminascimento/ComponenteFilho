//importar da biblioteca lwc, o api
// o api permite que o atributo desejado se torne publico
//ou seja, receba dados de fora (do pai)


import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
 //decorando para receber dados do pai
 //@api nomePorp
 @api nome;

}
