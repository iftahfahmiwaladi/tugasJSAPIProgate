let button=document.getElementById('btn');
var count = 0;
const totalCount = document.getElementById("hasil-click");
const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
};
button.addEventListener("click", handleIncrement);
button.addEventListener('click', check=()=>{
    let nilai=document.getElementById('angka').value;
    const node =document.createElement('p');
    var textnode = document.createTextNode(nilai);
    if(count == 1){
        if(nilai == 0){
            var textnode = document.createTextNode('invalid input');
            node.appendChild(textnode);
            document.getElementById("hasil").appendChild(node);
        }
        else{
            node.appendChild(textnode);
            document.getElementById("hasil").appendChild(node);
        }
       
    }else{
        if(nilai == 0 ){
            var textnode = document.createTextNode('invalid input');
            node.appendChild(textnode);
            document.getElementById("hasil").appendChild(node);  
        }else if(nilai % 15 == 0){
            var textnode = document.createTextNode('FizzBuzz');
            node.appendChild(textnode);
            document.getElementById("hasil").appendChild(node); 
        }else if(nilai%3==0){
            var textnode = document.createTextNode('Buzz');
            node.appendChild(textnode);
            document.getElementById("hasil").appendChild(node); 
        }else if(nilai%5==0){
            var textnode = document.createTextNode('Fizz');
            node.appendChild(textnode);
            document.getElementById("hasil").appendChild(node); 
        } 
        else{
            node.appendChild(textnode);
            document.getElementById("hasil").appendChild(node);
        }
        
    }
   
});

