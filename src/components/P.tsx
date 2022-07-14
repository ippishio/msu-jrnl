import React from "react";
import "./Petr.css"
import "../img/petya.jpg"
import "../img/petya_mirror.jpg"
import "../img/petr.gif"
import "../img/cat.gif"

const Petr = ()=>{
    function createcat() {
    const catholder = document.getElementById('catholder');
    var cat = document.createElement("img");
    cat.src = 'cat.gif';
    
    console.log('a');
    if(catholder){
        catholder.appendChild(cat);
    }
    
      };
    return(
        <div  className="a" >
            <div className="aa">
 <button id="catcreate" className="catcreate" onClick={()=>{createcat()} }   >котеки</button> 
 </div>
    <div id="catholder"> 
        
    
    </div>
<div className="divv">
 
</div>
<div className="divv">
 <h1 className="centerdiv">
     Анекдоты от Петра Сергеича (хихи хаха)
 </h1>
</div>
<div>
<p>
<img src='petya_mirror.jpg' className="petyaimg"></img> 
     <a className="anektext">"У берегов Голландии перевернулся танкер. Перевернулся и поплыл на спинке."</a> 
</p>
</div>
<div>
<p>
   <a className="anektext">"Идёт мужик,видит – анекдот лежит, перевернул, а там:wɐɯ ɐ ‘vʎнdǝʚǝdǝu 'ɯижǝv ɯоɓʞǝнɐ – ɯиɓиʚ‘ʞижʎw ɯǝ̤ɓи</a>  

    <img src='petya.jpg' className="petyaimg"></img>
    </p>
</div>


<a href="https://github.com/ippishio/msu-jrnl/raw/master/aneki.docx" download="">
	<button className="anekbut">Остальные анекдоты Петра</button>
</a>
<img src='petr.gif' className="petyaimg"></img>
</div>
    )
    
}

export default Petr;