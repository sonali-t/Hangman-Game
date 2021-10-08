import WrongLetters from "../components/WrongLetters";

export function showNotification(setter){
    setter(true);
    setTimeout(() => {
        setter(false); 
    }, 400);
}

export function checkWin(correct, wrong, word){
    let status ='win';

    // for win
    word.split('').forEach(letter => {
     if(!correct.includes(letter)){
         status='';
     }   
    });

     // for lose
     if(wrong.length ==6){
         status='lose';
     }

     return status;
}