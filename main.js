document.addEventListener('DOMContentLoaded', () => {
'use strict';

    const DomElement = function () {
        this.selector = ''; 
        this.height = '';
        this.width = ''; 
        this.bg = ''; 
        this.fontSize = '';    
    };

    DomElement.prototype.createElem = function () {
        const selectorNorm = this.selector.trim().toLowerCase();
        let blockType = '';
        if (this.selector === '') {return console.log('Error: selector is undefined');}
        if (selectorNorm.charAt(0) === '.') {
            blockType = 'div';
        } 
        if (selectorNorm.charAt(0) === '#') {
            blockType = 'p';
        }        
        const elem = document.createElement(blockType);
        elem.classList.add(selectorNorm.slice(1));
        document.body.append(elem);
        elem.style.height = this.height;
        elem.style.width = this.width; 
        elem.style.background = this.bg; 
        elem.style.fontSize = this.fontSize; 
        return elem;
    };

    const block = new DomElement();
    block.selector = '.app-div';
    block.width = '300px';
    block.height = '100px';
    block.bg = 'orange';
    block.fontSize = '24px';
    const appDiv = block.createElem();
    console.log(block);

    appDiv.textContent = `Hello I am New Division`;
});