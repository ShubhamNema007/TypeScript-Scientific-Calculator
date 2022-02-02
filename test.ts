function addChar(val) {
	let inx  = document.getElementById('input') as HTMLInputElement
    inx.value  += val;
}
function result(val){
    let inx  = document.getElementById('input') as HTMLInputElement
    var answer=eval(inx.value)
    inx.value=answer
}
function pi(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value=Math.PI
}
function e(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value = "2.7182818284590452353602874713527"
}
function cl(){
    let inx :any= document.getElementById('input') as HTMLInputElement
    inx.value = ""
}
function sq(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value = Math.pow(2, inx.value)
}
function x2(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value= eval(inx.value) * eval(inx.value)
}
function del(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value=inx.value.slice(0,-1)
}
function log(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value=Math.log(inx.value)
}
function plms(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    if(inx.value.substring(0, 1) == "-")
		    inx.value = inx.value.substring(1, inx.value.length)
            else
            inx.value = "-" + inx.value
}
function EXP(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value=Math.exp(inx.value)
}
function In(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value=Math.log(inx.value)
}
function n(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    var i, num, f;
    f=1
    num=inx.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }
    i=i-1;
    inx.value=f;
}
function xy(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value="Math.pow(,)"
}
function fraction(){
    let inx:any = document.getElementById('input') as HTMLInputElement
    inx.value=Math.pow(10^(0) ,inx.value)
}