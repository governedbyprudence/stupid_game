/*function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
*/
let btn=document.querySelector("button");
let player=document.querySelector('div[id="player"]')
function poslef(el){
   var a=el.style.left.split("%");
   b=parseInt(a[0]);
   if(a[0]=="")return 10;
   return b;
}
function treemove()
{
   let block=document.querySelector('div[id="block"');
   let flag=0;
   
   setTimeout(()=>{
      block.style.left="60%";
      //block.style.transition="";
      block.style.left='8%'
},1000);
}
function playerjump(e){
   //console.log("kry");
   if( e.key=='ArrowUp'){
     // console.log("kry");
   player.style.top="40%";
   window.setTimeout(()=>player.style.top="49%",200);   
}
var p=poslef(player);
if(e.key=='ArrowRight')player.style.left=`${p+2>98?98:p+2}%`;
if(e.key=='ArrowLeft')player.style.left=`${Math.abs(p-2)}%`;
  
}

window.addEventListener('keydown',playerjump)
btn.addEventListener('click',function(){
   treemove();
})
