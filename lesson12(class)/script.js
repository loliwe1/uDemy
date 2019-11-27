
class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv(text) {
        let elem = document.createElement('div');
        elem.textContent = text;
		document.body.appendChild(elem);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = param;
	}
}

const item = new Options(300, 350, "red", 20, "center");

item.createDiv('Hello wordl!!!');