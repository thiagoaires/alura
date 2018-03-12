class ConversorXML {

    static converte(objeto) {
        // converte um objeto em XML
    }
}

let conversor = new ConversorXML(); //nao vai deixar dar new, pois o conversor é estatico, e so pode dar new em classes construtoras
conversor.converte({nome: 'Guaraci', idade: 40});