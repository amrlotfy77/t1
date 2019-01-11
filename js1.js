class check{

     constructor(n,v){

     this.n =n ;
     this.v =v ;

}
    pp (){

       //alert(this.n.value);                                   //sp[0].innerHTML = fn[0].value
        for (var i = 0; i < fn.length; i++) {                  //sp[1].innerHTML = fn[1].value
            sp[i].innerHTML = fn[i].value;
                                                         //sp[2].innerHTML = fn[2].value
        }
                                             //sp[3].innerHTML = fn[3].value
}
    re(){

        if (fn[3].value != ""){

            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

            if (! fn[3].value.match(regex)){

                    alert("pass no match ")
                         fn[3].focus()
               return false
              }

         return true
      }


        return false
    }


}

fn = document.getElementsByClassName("22")                //fn = document.forms["RegForm"]["fname"]
f1 = new check(n=fn)
sp = document.getElementsByClassName("11")
sp1 = new check(v=sp)
b1 = document.getElementById("b1")

function data(){
f1.pp()
f1.re()
if(f1.re() == false){
return false
}
                                                                     //sp.innerHTML=fn.value
}

function remove(){
    for (var i = 0; i < fn.length; i++) {
        sp[i].innerHTML = " ";
        }
}

for (var i = 0; i < fn.length; i++) {                        //fn.addEventListener("change", data)
    fn[i].addEventListener('change', data);
}

b1.addEventListener("click", remove)