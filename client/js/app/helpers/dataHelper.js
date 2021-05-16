
class DataHelper {
    constructor() {
        throw new Error('DataHelper não pode ser instanciada')
    }

    static textoParaData(texto) { 
        
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
         
        const [ ano, mes, dia ] = texto.split('-');
        return new Date(ano, mes - 1, dia);
    }

    static dataParaTexto(data) {
        
        const [ ano, mes, dia ] = [ data.getFullYear(), data.getMonth(), data.getDay() ];
        return `${dia}/${mes + 1}/${ano}`;

    }

}