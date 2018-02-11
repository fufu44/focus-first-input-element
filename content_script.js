function isInInput(e){
    if("INPUT" == e.target.tagName){
        return true;
    }else{
        return false;
    }
}

function focusFirstInput(){
    const inputTag = document.querySelector("input[type=text], input[type=search]");
    if(inputTag){
        inputTag.focus();  
    }
}

function focusFirstInputKeydown(recievedEvent){
    
    if(isInInput(recievedEvent)){
        return true;
    }
    if(recievedEvent.ctrlKey){
        return true;
    }
    switch (recievedEvent.key) {
        case 'i':
            //focus input
            focusFirstInput();
            break;
    }
}
window.addEventListener("keyup", focusFirstInputKeydown);
