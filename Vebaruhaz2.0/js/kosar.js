class Kosar{
    constructor(){    
        this.kosarTomb=[];
        this.kosarElem=$("#kosar");
        let tomb =JSON.parse(localStorage.getItem("tadatok"));
        if (tomb !== null) {
            tomb.forEach(elem => {
                this.setKosarba(elem);
            });
        }
        $("#kosar>table").on("click", ".torles", (event)=>{
            

            let data=$(event.target).attr("data");
            this.kosarTomb.splice(data,1);
            localStorage.setItem("tadatok",JSON.stringify(this.kosarTomb));
            this.megjelenit();
        })
    }
    setKosarba(elem){
        this.kosarTomb.push(elem);

        localStorage.setItem("tadatok",JSON.stringify(this.kosarTomb));

        
        this.megjelenit();
    }
    megjelenit(){
        $("#kosar>table").empty();
        for(let i= 0; i < this.kosarTomb.length; i++){
            $("#kosar>table").append("<tr id='"+i+"'>");
            for(let item in this.kosarTomb[i]){
                if(item=="nev"){
                    $("table>tr").eq(i).append("<td id='"+i+"' class='tnev' >"+this.kosarTomb[i][item]+"</td>");
                }
                if(item=="ar"){
                    $("table>tr").eq(i).append("<td id='"+i+"' class='tnev' >"+this.kosarTomb[i][item]+"</td>");
                }
            }
            $("table>tr").eq(i).append("<td><button data='"+i+"' class='torles'> töröl</a></button></td>");
        } 
    }
}

