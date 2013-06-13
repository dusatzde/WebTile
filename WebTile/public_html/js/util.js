function redirect(){
    if(document.referrer.indexOf('hawks.mysteria.cz/') < 1){
       return true;
    }else{
        return false;
    }
}


