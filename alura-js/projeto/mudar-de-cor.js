var trs = document.getElementsByTagName("tr");
console.log("iu");
percorreArray(trs,function(tr){
    tr.addEventListener("mouseover", function(){
        this.setAttribute("bgcolor", "grey");
    })
});
