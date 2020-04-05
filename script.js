'use strict';
///////LocalStorage


if (!(localStorage.getItem('lang'))) {
    localStorage.setItem('lang', 'ru');  
}
let lang = localStorage.getItem('lang');
console.log(lang);
console.log(localStorage.getItem('lang'));

///////////////

/////////////Greate HTML////////////
let body = document.querySelector('body');
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.prepend(wrapper);
let inputText = document.createElement('textarea');
//inputText.setAttribute('disabled','disabled');
let langHint = document.createElement('p');
let langHintValue = document.createElement('span');
langHintValue.classList.add('lang-value');
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(inputText);
wrapper.append(langHint);
langHint.append(langHintValue);
langHint.append('Для смены языка нажмите CTRL + ALT');
langHintValue.innerHTML = lang;
wrapper.append(keyboard);





////////////

/////Array values///////
let symbolButtonValues = [['Backquote',1, ['`','~'],'ё'],['Digit1',2,['1','!'],['1','!']],['Digit2',3,['2','@'],['2','"']],['Digit3',4,['3','#'],['3','№']],['Digit4',5,['4','$'],['4',';']],['Digit5',6,['5','%'],['5','%']],['Digit6',7,['6','^'],['6',':']],['Digit7',8,['7','&'],['7','?']],['Digit8',9,['8','*'],['8','*']],['Digit9',10,['9','('],['9','(']],['Digit0',11,['0',')'],['0',')']],['Minus',12,['-','_'],['-','_']],['Equal',13,['=','+'],['=','+']],['KeyQ',16,'q','й'],['KeyW',17,'w','ц'],['KeyE',18,'e','у'],['KeyR',19,'r','к'],['KeyT',20,'t','е'],['KeyY',21,'y','н'],['KeyU',22,'u','г'],['KeyI',23,'i','ш'],['KeyO',24,'o','щ'],['KeyP',25,'p','з'],['BracketLeft',26,['[','{'],'х'],['BracketRight',27,[']','}'],'ъ'],['Backslash',28,['\\','|'],['\\','/']],['KeyA',31, 'a','ф'],['KeyS',32,'s','ы'],['KeyD',33,'d','в'],['KeyF',34,'f','а'],['KeyG',35,'g','п'],['KeyH',36,'h','р'],['KeyJ',37,'j','о'],['KeyK',38,'k','л'],['KeyL',39,'l','д'],['Semicolon',40,[';',':'],'ж'],['Quote',41,["'",'"'],'э'],['IntlBackslash',44,['\\','|'],['\\','/']],['KeyZ',45,'z','я'],['KeyX',46,'x','ч'],['KeyC',47,'c','с'],['KeyV',48,'v','м'],['KeyB',49,'b','и'],['KeyN',50,'n','т'],['KeyM',51,'m','ь'],['Comma',52,[',','<'],'б'],['Period',53,['.','>'],'ю'],['Slash',54,['/','?'],['.',',']]];
let specialButtonValues = [['Escape',0,'ESC',clearFunc,'50px'],['Delete',29, 'DEL',deleteFunc,'95px'],['Tab',15,"TAB",tabFunc,'95px'],['Backspace',14,"BACKSPACE",deleteFunc,'140px'],['CapsLock',30,"CAPS LOCK",capsLockFunc,'120px'],['Enter',42,"ENTER",enterFunc,'190px'],['ArrowUp',55,"&#8593",deleteFunc],['OSLeft',58,'WIN',deleteFunc],['Space',60,'&#160',spaceFunc,'400px'],['ArrowLeft',63,'&#8592',deleteFunc],['ArrowDown',64,'&#8595',deleteFunc],['ArrowRight',65,'&#8594',deleteFunc],['MyHelp',66,'HELP',deleteFunc]];
let altShiftCtrlValues = [['ShiftLeft',43,"SHIFT",shiftFunc,unShiftFunc,'140px'],['ShiftRight',56,'SHIFT',shiftFunc,unShiftFunc,'110px'],['ControlLeft',57,'CTRL',ctrlFunc,unCtrlFunc,'90px'],['AltLeft',59,'ALT',altFunc,unAltFunc],['AltRight',61,'ALT',altFunc,unAltFunc],['ControlRight',62,'CTRL',ctrlFunc,unCtrlFunc]];

///////////////////////

/////Create Symbol button///
let i;
let isShift = false;
let isCtrl = false;
let isAlt = false;
let isCaps = false;
let сapsCounter = 0;
let buttonArray =[];
let symbolButtonArray =[];
function clearFunc() {
    inputText.innerText = '';
}
function deleteFunc() {
    //alert('Здесь должна быть функция');
    console.log(isCaps);
}
function capsLockFunc() {
    сapsCounter++;
    console.log(сapsCounter);
    if (сapsCounter%2 == 1) {
        isCaps = true; 
        capsLight.classList.add('cals-lock_green');
    } else {
        isCaps = false;  
        capsLight.classList.remove('cals-lock_green');
    }
    console.log(isCaps);
}
function shiftFunc() {
    isShift = true;  
    console.log('11');
     
}
function unShiftFunc() {
    isShift = false;   
    console.log('22');
    
}
function altFunc() {
    isAlt = true;
    if ((isCtrl == true) & (isAlt == true)) {
        console.log('1');
        
        if (localStorage.getItem('lang') == 'eng') {
            localStorage.setItem('lang', 'ru');
            lang = 'ru';
            changeLang();
            console.log('2');
            console.log(lang);
            console.log(localStorage.getItem('lang'));
        } else {
            localStorage.setItem('lang', 'eng');
            lang = 'eng';
            changeLang();
            console.log('3');
            console.log(localStorage.getItem('lang'));
            console.log(lang);
            
        }
    }
}
function ctrlFunc() {
    isCtrl = true;
    if ((isCtrl == true) & (isAlt == true)) {
        console.log('1');
        
        if (localStorage.getItem('lang') == 'eng') {
            localStorage.setItem('lang', 'ru');
            lang = 'ru';
            changeLang();

            console.log('2');
            console.log(lang);
            console.log(localStorage.getItem('lang'));
        } else {
            localStorage.setItem('lang', 'eng');
            lang = 'eng';
            changeLang();
            console.log('3');
            console.log(localStorage.getItem('lang'));
            console.log(lang);
            
        }
    }
}
function unAltFunc() {
    isAlt = false;
    
}
function unCtrlFunc() {
    isCtrl = false;
    
}

let html = document.querySelector('html'); 
let langHtml = html.getAttribute('lang'); 
 

function changeLang() {
    symbolButtonArray.forEach((item) => {
        if (lang == 'eng') {
            item.langValue =  item.EngValue; 
          } else {
              item.langValue =  item.RuValue; 
          }
          if (typeof item.langValue == "string") {
            
            
            //this.value = this.langValue.toUpperCase(); 
            
            
            item.innerHTML = item.langValue.toUpperCase(); 
            
            
            //this.inputValue = this.langValue; 
        } else {
            //this.value = this.langValue[0]; 
            //this.inputValue = this.langValue[0]; 
            
            item.innerHTML = item.langValue[0]; 
        }
        
    });
    langHintValue.innerHTML = lang;
      console.log('sdsdas');
       
}
function spaceFunc() {
    inputText.append(' ');
    //inputText.focus();
}
function enterFunc() {
    inputText.append('\n');
}
function tabFunc() {
    inputText.append('\t');
}

//changeLang(symbolButtonArray[1]);

class SymbolButton extends HTMLButtonElement {
    constructor(value) {
        super();
        this.setAttribute("type", 'button');
        this.classList.add('button_base');
        this.keyCode = symbolButtonValues[i][0];
        this.EngValue = symbolButtonValues[i][2]; 
        this.RuValue = symbolButtonValues[i][3]; 
        
        if (lang == 'eng') {
          this.langValue =  this.EngValue; 
        } else {
            this.langValue =  this.RuValue; 
        }
        
        
        if (typeof this.langValue == "string") {
            
            
            //this.value = this.langValue.toUpperCase(); 
            
            
            this.innerHTML = this.langValue.toUpperCase(); 
            
            
            //this.inputValue = this.langValue; 
        } else {
            //this.value = this.langValue[0]; 
            //this.inputValue = this.langValue[0]; 
            
            this.innerHTML = this.langValue[0]; 
        }
        
        
        this.addEventListener('mousedown', () => {
            
            
            if (typeof this.langValue == "string") {
                if (isShift) {
                    if (!isCaps) {
                        this.inputValue = this.langValue.toUpperCase();   
                    } else {
                        this.inputValue = this.langValue;  
                    }  
                  } else {
                    if (isCaps) {
                        this.inputValue = this.langValue.toUpperCase();   
                    } else {
                        this.inputValue = this.langValue;  
                    }  
                  }


                
            } else {
                if (isShift) {
                    this.inputValue = this.langValue[1]; 
                } else {
                    this.inputValue = this.langValue[0]; 
                }
                //this.value = this.langValue[0]; 
                
                
            
            }
            inputText.append(this.inputValue);  
            console.log(this.langValue);
            console.log(this.inputValue);
            inputText.focus();
        });
        this.addEventListener('mouseup', () => {
            inputText.focus();
        });
        
        
    }
}
customElements.define("letter-a", SymbolButton, {extends:'button'});

for (i = 0; i < symbolButtonValues.length; i++) {
    let j = symbolButtonValues[i][1];
    
    
    buttonArray[j] = document.createElement('button', {is: 'letter-a'});
    symbolButtonArray[i] = buttonArray[j];
}


/////Special Button/////////
class SpecialButton extends HTMLButtonElement {
    constructor(value) {
        super();
        this.setAttribute("type", 'button');
        this.classList.add('button_special');
        this.keyCode = specialButtonValues[i][0];
        this.innerHTML = specialButtonValues[i][2];
        
        if (specialButtonValues[i][4]) {
            this.style.width = specialButtonValues[i][4];   
        }
        
        
        this.addEventListener('mousedown', specialButtonValues[i][3]);
        this.addEventListener('mouseup', () => {
            inputText.focus();
        });
    
        
    }
}

customElements.define("letter-s", SpecialButton, {extends:'button'});
for (i = 0; i < specialButtonValues.length; i++) {
    let j = specialButtonValues[i][1];
    
    
    buttonArray[j] = document.createElement('button', {is: 'letter-s'});
    
}
/////Shift///////
class ShistAltCtrlButton extends HTMLButtonElement {
    constructor(value) {
        super();
        this.setAttribute("type", 'button');
        this.classList.add('button_special');
        this.keyCode = altShiftCtrlValues[i][0];
        this.innerHTML = altShiftCtrlValues[i][2];
        
        if (altShiftCtrlValues[i][5]) {
            this.style.width = altShiftCtrlValues[i][5];   
        }
        
        
        this.addEventListener('mousedown', altShiftCtrlValues[i][3]);
        this.addEventListener('mouseup', altShiftCtrlValues[i][4]);
        this.addEventListener('mouseup', () => {
            inputText.focus();
        });
        
    }
}

customElements.define("letter-c", ShistAltCtrlButton, {extends:'button'});
for (i = 0; i < altShiftCtrlValues.length; i++) {
    let j = altShiftCtrlValues[i][1];
    
    
    buttonArray[j] = document.createElement('button', {is: 'letter-c'});
    
}
///////////

for (let index = 0; index < buttonArray.length; index++) {
    keyboard.append(buttonArray[index]);
    
}
////////////////
/////Key push style///


document.addEventListener('keydown', function(event) {
    console.log(event.code  );
    
    for (let index = 0; index < buttonArray.length; index++) {
        if (event.code == buttonArray[index].keyCode) {
            buttonArray[index].classList.add('button_push');
            //buttonArray[index].dispatchEvent(event);
            let myEvent = new Event('mousedown',{bubbles: true});
            buttonArray[index].dispatchEvent(myEvent); 
        }          
    } 
  });

  document.addEventListener('keyup', function(event) { 
    for (let index = 0; index < buttonArray.length; index++) {
        if (event.code == buttonArray[index].keyCode) {
            buttonArray[index].classList.remove('button_push');
            let myEvent = new Event('mouseup',{bubbles: true});
            buttonArray[index].dispatchEvent(myEvent); 
        }     
    }
    
  });
  
///////
//////////Caps Lock////////////
let capsLight = document.createElement('span');
capsLight.classList.add('cals-lock');
keyboard.append(capsLight);
///////////////////////
inputText.addEventListener('keypress', (event) => {
   
            event.preventDefault();  
            
    }
    
    
);
////////////



/////////////



