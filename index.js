const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];



//for (let i = 0; i < pronoun.length; i++) {
   // console.log(pronoun[i])
//}
 
 //for (let i = 0; i < adj.length; i++) {
    //pronoun[i].concat(adj[i],noun[i]);
    //let cadena= pronoun[i].concat(adj[i],noun[i]);
    //console.log(cadena);
//}
for (let i=0; i< pronoun.length; i++){
    
    for(let j=0; j< adj.length; j++){
        
        for(let n=0; n< noun.length; n++){
          
          document.body.innerHTML+=pronoun[i].concat(adj[j],noun[n],".com </br>");
          //console.log(pronoun[i].concat(adj[j],noun[n],".com"));
            
        }
        
    }
}
