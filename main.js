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
    block.width = '100px';
    block.height = '100px';
    block.bg = '#ffffff';
    block.fontSize = '24px';
    const appDiv = block.createElem();
    document.body.style.background = '#6fa25c';
    appDiv.style.position = 'absolute';
    appDiv.style.borderRadius = '5px';
    appDiv.style.transition = '.5s all';

    let left = 0;
    let top = 0;

    document.addEventListener('keydown', event => {       
        
        if(event.key === "ArrowRight") {
            left = left + 10;
            appDiv.style.left = left + 'px';
        }

        if(event.key === "ArrowLeft") {
            left = left - 10;
            appDiv.style.left = left + 'px';            
        }

        if(event.key === "ArrowDown") {
            top = top + 10;
            appDiv.style.top = top + 'px';
        }

        if (event.key === "ArrowUp") {
            top = top - 10;
            appDiv.style.top = top +'px';
        }
    });
});