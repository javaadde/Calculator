function bclick(val){
    document.getElementById("inp").value+=val
}
function clearall(ar){
    document.getElementById("inp").value=""
}
function equalbutton(){
    var num=document.getElementById("inp").value
    var result=eval(num)
    document.getElementById("inp").value=result
}