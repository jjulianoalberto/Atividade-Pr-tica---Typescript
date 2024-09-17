
export interface User {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
  }
  
export interface Diretor {
    nome: string;
    idade: number;
    salario?: number;
    nivelComissionamento: number;
  }
  
export type Pessoa = User | Diretor;
  