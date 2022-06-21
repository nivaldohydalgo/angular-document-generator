import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-doc-print',
    templateUrl: './doc-print.component.html',
    styleUrls: ['./doc-print.component.css']
})
export class DocPrintComponent implements OnInit {

    private numPagina = 0

    constructor() { }

    ngOnInit(): void {
    }

    contador() {
        this.numPagina++
        console.log('contador> numPagina: ', this.numPagina)
    }

    montaCabecalho() {
        var numAtual = this.numPagina
        if ( numAtual == 1 ) {
            return 'Este é o cabeçalho da PRIMEIRA PAGINA'
        } else {
            return 'Este é o cabeçalho das paginas seguintes...'
        }
    }

}
