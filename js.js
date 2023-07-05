function primeiro(){
    var sim = document.querySelector('.opçao')    
    sim.classList.toggle('opiçao')
}
function segundo(){

    var nao = document.querySelector('.tex')    
    nao.classList.toggle('texto')


    var pes = document.getElementById('pes')
    pes.style.display = 'none'

    
}
function res(){
    var pes = document.getElementById('pes')
    pes.style.display = 'flex'

    var nao = document.querySelector('.tex')    
    nao.classList.remove('texto')

}
function terceira(parametro){

    var bot = document.querySelector('.botao')

    var seg = document.querySelector('.botao.segunda')

    if(parametro === '2'){

        bot.classList.remove('click')
        seg.classList.add('click')

    }else if(parametro === '1'){

        bot.classList.add('click')
        seg.classList.remove('click')

    }

}
function letras(parametro){
       
    var sino = document.getElementById('sino')

    var mens = document.getElementById('mens')

    var perf = document.getElementById('perf')

    var mais = document.getElementById('mais')


    if(parametro === '1'){
        sino.style.display = 'flex'
    }else if(parametro === '2'){
        mens.style.display = 'flex'
    }else if(parametro === '3'){
        perf.style.display = 'flex'
    }else{
        mais.style.display = 'flex'
    }


}
function tira(){
    var sino = document.getElementById('sino')

    var mens = document.getElementById('mens')

    var perf = document.getElementById('perf')
    
    var mais = document.getElementById('mais')


    sino.style.display = 'none'
    mens.style.display = 'none'
    perf.style.display = 'none'
    mais.style.display = 'none'
    
}
function toco(){
    var not = document.querySelector('.notifica')

    not.classList.toggle('si')
}
function con(){
    var cont = document.querySelector('.conta')

    cont.classList.toggle('si')
}








