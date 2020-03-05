export class Produto {
    
    constructor(
        public codigo: number,
        public descricao: string,
        public registroAnvisa: string,
        public controlado: boolean,
        public codigoGrupo: number
    ) {
    }

}