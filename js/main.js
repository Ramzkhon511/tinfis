function yoz(){
    var inp = document.getElementById('inp').value;
    var btn = document.getElementById('btn');

    if(inp.length >= 13)
    { 
        btn.classList.remove('disabled');
    }
}

function yoz1(){
    var inp = document.getElementById('inp').value;
    window.localStorage.setItem("inp", inp);
}

function yoz2(){
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    var inp3 = document.getElementById('inp3').value;
    var inp4 = document.getElementById('inp4').value;
    var h1 = document.getElementById('h1');

    if(inp1 == "1" && inp2 == "1" && inp3 == "1" && inp4 == "1")
    {
        window.open('userDashboard.html', '_self'); 
    }
    else{
        h1.innerText = "code xato!";
        h1.style.color = "crimson";
        h1.style.fontSize ="14pt";
    }

}

function uzgartir(){
    var btnicon = document.getElementById('btnicon');
    var inp7 = document.getElementById('inp7');
    var divimya = document.getElementById('divimya');
      if(btnicon.classList[1] == "fa-pencil"){
        
    var inp7 = document.getElementById('inp7');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btnicon = document.getElementById('btnicon');
    
    btn1.setAttribute('id','btn1');
    btn1.innerText = "x";
    btn1.style.borderRadius = "50%";
    btn1.style.border = "none";
    btn1.style.width = "15px"
    btn1.style.backgroundColor = "white";
    btn1.style.marginRight = "20px"
    
    divimya.style.width = "100%";
    divimya.style.height = "5vh";
   

    divimya.appendChild(btn1);

    btn1.addEventListener('click',e=>{
        inp7.setAttribute('readonly',null);
        inp7.style.border = "none";

        btnicon.classList.remove('fa-check');
        btnicon.classList.add('fa-pencil')

        divimya.removeChild(btn1);
    })
    
    inp7.removeAttribute("readonly")
    inp7.style.border = "2px solid yellow";

    btnicon.classList.remove("fa-pencil");
    btnicon.classList.add("fa-check");
      }
      else
      {
        var btn1 = document.getElementById('btn1');
        inp7.setAttribute('readonly',null);
        inp7.style.border = "none";
        
        btnicon.classList.remove("fa-check");
        btnicon.classList.add("fa-pencil");
        divimya.removeChild(btn1);
      }

}
function uzgartir2(){
    var divfamil = document.getElementById('divfamil');
    var inp8 = document.getElementById('inp8');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btnicon = document.getElementById('btnicon');

    btn1.innerText = "x";
    btn1.style.borderRadius = "50%";
    btn1.style.border = "none";
    btn1.style.width = "15px"
    btn1.style.backgroundColor = "white";
    btn1.style.marginRight = "20px"
    
    divfamil.style.width = "100%";
    divfamil.style.height = "5vh";
   

    divfamil.appendChild(btn1);
    
    inp8.removeAttribute("readonly")
    inp8.style.border = "2px solid yellow";

    btnicon.classList.remove("fa-pencil");
    btnicon.classList.add("fa-check");

    btnicon.click.remove("inp7")
}
function uzgartir3(){
    var divphone = document.getElementById('divphone');
    var inp9 = document.getElementById('inp9');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btnicon = document.getElementById('btnicon');

    btn1.innerText = "x";
    btn1.style.borderRadius = "50%";
    btn1.style.border = "none";
    btn1.style.width = "15px"
    btn1.style.backgroundColor = "white";
    btn1.style.marginRight = "20px"
    
    divfamil.style.width = "100%";
    divfamil.style.height = "5vh";
   

    divphone.appendChild(btn1);
    
    inp9.removeAttribute("readonly")
    inp9.style.border = "2px solid yellow";

    btnicon.classList.remove("fa-pencil");
    btnicon.classList.add("fa-check");

    btnicon.click.remove("inp7")
}
function uzgartir4(){
    var divemail = document.getElementById('divemail');
    var inp10 = document.getElementById('inp10');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btnicon = document.getElementById('btnicon');

    btn1.innerText = "x";
    btn1.style.borderRadius = "50%";
    btn1.style.border = "none";
    btn1.style.width = "15px"
    btn1.style.backgroundColor = "white";
    btn1.style.marginRight = "20px"
    
    divfamil.style.width = "100%";
    divfamil.style.height = "5vh";
   

    divemail.appendChild(btn1);
    
    inp10.removeAttribute("readonly")
    inp10.style.border = "2px solid yellow";

    btnicon.classList.remove("fa-pencil");
    btnicon.classList.add("fa-check");

    btnicon.click.remove("inp7")
}
function uzgartir5(){
    var divemail2 = document.getElementById('divemail2');
    var inp11 = document.getElementById('inp11');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btnicon = document.getElementById('btnicon');

    btn1.innerText = "x";
    btn1.style.borderRadius = "50%";
    btn1.style.border = "none";
    btn1.style.width = "15px"
    btn1.style.backgroundColor = "white";
    btn1.style.marginRight = "20px"
    
    divfamil.style.width = "100%";
    divfamil.style.height = "5vh";
   

    divemail2.appendChild(btn1);
    
    inp11.removeAttribute("readonly")
    inp11.style.border = "2px solid yellow";

    btnicon.classList.remove("fa-pencil");
    btnicon.classList.add("fa-check");

    btnicon.click.remove("inp7")
}
function man(){
    var btnm = document.getElementById('btnm');
    var manfoto = document.getElementById('manfoto');
    var femalfoto = document.getElementById('femalfoto');
    var btnf = document.getElementById('btnf')

    btnm.style.color = "yellow";
    btnf.style.color = "grey"
    manfoto.setAttribute('src','https://tinfis.uz/img/man_yellow.png');
    femalfoto.setAttribute('src','https://tinfis.uz/img/female.png')
    
}
function female(){
    var btnf = document.getElementById('btnf');
    var femalfoto = document.getElementById('femalfoto');
    var btnm = document.getElementById('btnm');
    var manfoto = document.getElementById('manfoto');

    femalfoto.setAttribute('src','https://tinfis.uz/img/female_yellow.png')
    manfoto.setAttribute('src','https://tinfis.uz/img/man.png');
    btnf.style.color = "yellow";
    btnm.style.color = "grey";
    
}
