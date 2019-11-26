'use strict'

class Option{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(text){
      let div =   document.createElement('div');
      div.style.cssText = `height: ${this.height}px;
                           width: ${this.width}px;
                           background: ${this.bg};
                           font-size: ${this.fontSize}px;
                           text-align: ${this.textAlign};`
        div.textContent = text;
        document.body.append(div);
    }

}

let div = new Option(200,200,'red',20, 'center');
div.createDiv('loh govno parasha');