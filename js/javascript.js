
var text=document.getElementById('t')
text.onkeyup=function()
{
   var textArea=document.getElementById('t').value;
   document.getElementById('f').srcdoc=textArea;
}
console.log('dadas');