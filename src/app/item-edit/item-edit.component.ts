import { Component, OnInit } from '@angular/core';

import { Font } from '../models/font'

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

    autoResize = true

    editedText = ''

    isBold = false
    isItalic = false
    fontSize = 16
    // Verdana, Geneva, Tahoma, sans-serif
    // 'Courier New', Courier, font-family
    // Arial, Helvetica, sans-serif
    textDecoration = 'none'     // 'none', 'underline'
    
//    fontFamily = 'Verdana'

//    fonts: Font[] = [
//        new Font('Helvetica'),
//        new Font('Courier New'),
//        new Font('monospace'),
//        new Font('Verdana')
//    ]


//    fonts: Font[] = [
//        new Font('Helvetica'),
//        new Font('Courier New'),
//        new Font('monospace'),
//        new Font('Verdana')
//    ]
//    selectedFont = Font

    fontOptions: any[]
    selectedFont: any

    justifyOptions: any[]
    selectedJustify: any    

    constructor() { 
        this.fontOptions = [
            {name: 'Arial', value:'Arial'},
            {name: 'Monospace', value:'monospace'},
            {name: 'Courier New', value:'Courier New'},
            {name: 'Verdana', value:'Verdana'},
            {name: 'Helvetica', value:'Helvetica'},
        ]
        this.selectedFont = 'Arial'

        this.justifyOptions = [
            {icon: 'pi pi-align-left', justify: 'left'},
            {icon: 'pi pi-align-right', justify: 'right'},
            {icon: 'pi pi-align-center', justify: 'center'},
            {icon: 'pi pi-align-justify', justify: 'justify'}
        ]
        this.selectedJustify = 'justify'
    }


    ngOnInit(): void {
    }

    public verconfig() {
        console.log('========= CONFIG =========')
        console.log('selectedJustify: ', this.selectedJustify)
    }

    onClickBold() {
        this.isBold = !this.isBold
    }

    onClickItalic() {
        this.isItalic = !this.isItalic
    }

    onClickUnderline() {
        if ( this.textDecoration == 'none' ) {
            this.textDecoration = 'underline'
        } else { 
            this.textDecoration = 'none'
        }
    }
}
