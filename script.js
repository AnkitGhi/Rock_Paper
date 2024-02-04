function getcomputerchoice(){
    choices =['Rock','Paper','Scissors']
    num = Math.floor(Math.random()*3)
    return choices[num]
}

function result(Computer_section,Player_Section){
    computer = Computer_section.toLowerCase()
    user = Player_Section.toLowerCase()

    if (computer==user){
        return "It's a tie"
    }
    else{
        if (computer=="scissors"&&user=="rock"){
            return "You win! Rock beats Scissors"
        }
        if (computer=="rock"&&user=="paper"){
            return "You win! Paper beats Rock"
        }
        if (computer=="rock"&&user=="scissors"){
            return "You lose! Rock beats scissors"
        }
        if (computer=="paper"&&user=="rock"){
            return "You lose! Paper beats Rock"
        }
        if (computer=="paper"&&user=="scissors"){
            return "You win! Scissors beats Paper"
        }
        if (computer=="scissors"&&user=="paper"){
            return "You lose! Scissors beats Paper"
        }
        
    }
}

function playgame(){
    for (i=0;i<5;i++){
        ab = getcomputerchoice()
        player_section=prompt("Enter rock, paper, or scissors")
        bc = result(ab,player_section)
        console.log(ab)
        console.log(bc)
    }
}


playgame()
