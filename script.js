'use strict';
///////LocalStorage

localStorage.clear();
if (!(localStorage.getItem('lang'))) {
    localStorage.setItem('lang', 'ru');  
}
let lang = localStorage.getItem('lang');
console.log(lang);

///////////////

/////////////Greate HTML////////////
let body = document.querySelector('body');
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.prepend(wrapper);
let inputText = document.createElement('textarea');
//inputText.setAttribute('disabled','disabled');
inputText.addEventListener('keypress', (event) => {
    event.preventDefault();
});

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(inputText);
wrapper.append(keyboard);




////////////

/////Array values///////
let symbolButtonValues = [['Backquote',1, ['`','~'],'ё'],['Digit1',2,['1','!'],['1','!']],['Digit2',3,['2','@'],['2','"']],['Digit3',4,['3','#'],['3','№']],['Digit4',5,['4','$'],['4',';']],['Digit5',6,['5','%'],['5','%']],['Digit6',7,['6','^'],['6',':']],['Digit7',8,['7','&'],['7','?']],['Digit8',9,['8','*'],['8','*']],['Digit9',10,['9','('],['9','(']],['Digit0',11,['0',')'],['0',')']],['Minus',12,['-','_'],['-','_']],['Equal',13,['=','+'],['=','+']],['KeyQ',16,'q','й'],['KeyW',17,'w','ц'],['KeyE',18,'e','у'],['KeyR',19,'r','к'],['KeyT',20,'t','е'],['KeyY',21,'y','н'],['KeyU',22,'u','г'],['KeyI',23,'i','ш'],['KeyO',24,'o','щ'],['KeyP',25,'p','з'],['BracketLeft',26,['[','{'],'х'],['BracketRight',27,[']','}'],'ъ'],['Backslash',28,['\\','|'],['\\','/']],['KeyA',31, 'a','ф'],['KeyS',32,'s','ы'],['KeyD',33,'d','в'],['KeyF',34,'f','а'],['KeyG',35,'g','п'],['KeyH',36,'h','р'],['KeyJ',37,'j','о'],['KeyK',38,'k','л'],['KeyL',39,'l','д'],['Semicolon',40,[';',':'],'ж'],['Quote',41,['кавычки','"'],'э'],['KeyZ',44,'z','я'],['KeyX',45,'x','ч'],['KeyC',46,'c','с'],['KeyV',47,'v','м'],['KeyB',48,'b','и'],['KeyN',49,'n','т'],['KeyM',50,'m','ь'],['Comma',51,[',','<'],'б'],['Period',52,['.','>'],'ю'],['Slash',53,['/','?'],['.',',']]];
let specialButtonValues = [['Escape',0,'Esc',clearFunc],['Delete',14, 'DEL',deleteFunc,'100px'],['Tab',15,"Tab",deleteFunc],['Backspace',29,"Backspace",deleteFunc,'100px'],['CapsLock',30,"Caps Lock",deleteFunc,'100px'],['Enter',42,"Enter",deleteFunc],['ShiftLeft',43,"Shift",deleteFunc],['ArrowUp',54,"&#8593",deleteFunc],['ShiftRight',55,'Shift',deleteFunc],['ControlLeft',56,'Ctrl',deleteFunc],['OSLeft',57,'Win',deleteFunc],['AltLeft',58,'Alt',deleteFunc],['Space',59,'&#160',deleteFunc,'200px'],['AltRight',60,'Alt',deleteFunc],['ControlRight',61,'Ctrl',deleteFunc],['ArrowLeft',62,'&#8592',deleteFunc],['ArrowDown',63,'&#8595',deleteFunc],['ArrowRight',64,'&#8594',deleteFunc]];
document.addEventListener('keydown', function(event) {
    
    console.log(event.code);
   
  });
///////////////////////

/////Create Symbol button///
let i;
let buttonArray =[];
function clearFunc() {
    inputText.innerText = '';
}
function deleteFunc() {
    alert('Здесь должна быть функция');
}
class SymbolButton extends HTMLButtonElement {
    constructor(value) {
        super();
        this.setAttribute("type", 'button');
        this.classList.add('button_base');
        
        
        if (lang == 'eng') {
          this.langValue =  symbolButtonValues[i][2]; 
        } else {
            this.langValue =  symbolButtonValues[i][3]; 
        }
        
        if (this.langValue[0].match(/[а-ёж-яa-z]/g)) {
            
            
            this.value = this.langValue.toUpperCase(); 
            
            this.innerHTML = this.langValue.toUpperCase(); 
            console.log(this.langValue);
            
            this.inputValue = this.langValue; 
        } else {
            this.value = this.langValue[0]; 
            this.inputValue = this.langValue[0]; 
            this.innerHTML = this.langValue[0]; 
        }
        
        
        this.addEventListener('click', () => {
            inputText.append(this.inputValue);   
        });
        
        
    }
}
customElements.define("letter-a", SymbolButton, {extends:'button'});

for (i = 0; i < symbolButtonValues.length; i++) {
    let j = symbolButtonValues[i][1];
    console.log(j);
    
    buttonArray[j] = document.createElement('button', {is: 'letter-a'});
    
}


/////Special Button/////////
class SpecialButton extends HTMLButtonElement {
    constructor(value) {
        super();
        this.setAttribute("type", 'button');
        this.classList.add('button_special');
        
        this.innerHTML = specialButtonValues[i][2];
        
        if (specialButtonValues[i][4]) {
            this.style.width = specialButtonValues[i][4];   
        }
        
        
        this.addEventListener('click', specialButtonValues[i][3]);
    
        
    }
}
customElements.define("letter-s", SpecialButton, {extends:'button'});
for (i = 0; i < specialButtonValues.length; i++) {
    let j = specialButtonValues[i][1];
    console.log(j);
    
    buttonArray[j] = document.createElement('button', {is: 'letter-s'});
    
}
console.log(buttonArray);

for (let index = 0; index < buttonArray.length; index++) {
    keyboard.append(buttonArray[index]);
    
}
////////////////