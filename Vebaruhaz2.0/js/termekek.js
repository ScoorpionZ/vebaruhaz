class termekek{
    constructor(elem, adat){
        this.elem=elem;
        
        this.nev=this.elem.children(".termeknev");
       
        this.leiras=this.elem.children(".leiras");
        this.ar=this.elem.children(".ar");
        
        this.adat=adat;

        
        
    }

    setAdatok(ertekek){
        this.nev.html(ertekek.nev);
        this.kep.attr("src",ertekek.kep);
        this.leiras.html(ertekek.leiras);
        this.ar.html(ertekek.ar);
    }

    
    kosarbarak(){
        let event = new CustomEvent("kosarbatesz", {detail:this.adat});
        window.dispatchEvent(event);
    }
}

class TrmekAdmin extends termekek{
    constructor(elem, adat){
        super(elem, adat);
        this.kep=this.elem.children(".kep").children("img");
        this.torol=this.elem.children(".torles").children(".torol");
        this.torol.on("click",()=>{
             this.torles();
         })
        this.modosit=this.elem.children(".torles").children(".modosit");
        this.modosit.on("click",()=>{
             this.modositas();
         })
        this.setAdatok(this.adat);
    }
    torles(){
        console.log("torol");
        // let event = new CustomEvent("kosarbatesz", {detail:this.adat});
        // window.dispatchEvent(event);
    }
    modositas(){
        console.log("modosit");
        // let event = new CustomEvent("kosarbatesz", {detail:this.adat});
        // window.dispatchEvent(event);
    }



}

class TermekVasarlas extends termekek{
    constructor(elem, adat){
        super(elem, adat);
        this.kep=this.elem.children(".kep");
        this.megvesz=this.elem.children("button");
        this.setAdatok(this.adat);
        this.megvesz.on("click",()=>{
            //this.kattint();
             this.kosarbarak();
         });
    }
}