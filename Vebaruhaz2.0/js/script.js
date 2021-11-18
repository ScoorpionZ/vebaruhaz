$(function(){
    const termekek =[];
    let fajlnev="termekek.json";
    
  
    adatbeolvasas(fajlnev,termekek,termekmegjeleit);

    function adatbeolvasas(fajlnev,tomb,myCallback){
        $.ajax({
            url:fajlnev,
            success:function(result){
                result.forEach(element => {
                    tomb.push(element)
                });
                myCallback();
            }
        });
        
    }

    
    


    function termekmegjeleit(){
        const szuloelem = $("#termekek");
        const sablonElem = $(".termek");
        
        termekek.forEach(function(elem,index) {
            let ujElem = sablonElem.clone().appendTo(szuloelem);
            const ujKartya = new TermekVasarlas(ujElem, elem);
        });
        sablonElem.remove();
        const kosar=new Kosar();
       $(window).on("kosarbatesz",(event)=>{
            kosar.setKosarba(event.detail);
       } );
    }
});