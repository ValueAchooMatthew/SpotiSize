export default function capitalizeFirstLetter(phrase: string | undefined): string{
    if(phrase){
        phrase = phrase.trim();
        const word = phrase.split("");
        const len = word.length;
        if(len >= 1){
            word[0] = word[0].toUpperCase();
            for(let i = 1; i < len; i++ ){
                if(word[i] != " " && word[i-1] == " "){
                    word[i] = word[i].toUpperCase();
                }
            }
            return word.join("");
    
        }
    
        else{
            return ("No Listed Genre")
        }

    }else{
        return ("No Listed Genre");
    }

}