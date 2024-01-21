let sistema = document.getElementById("sistemacontable")
let mercado = document.getElementById("Mercadoz")
let spring = document.getElementById("proyectospring")
let apiclima = document.getElementById("apliclima")
let proyectmovies = document.getElementById("proyectmovies")

let linkssistema = ["Cliente.png","egresos.png","ingreso.png"]
let linksmercado = ["mercadoz2.png","mercadoz3.png","mercadoz4.png","mercadoz.png"]
let linksspring = ["a.png","b.png","c.png","d.png"]
let linksapiclima = ["a.png","b.png","c.png"]
let linksproyectmovies = ["a.png","b.png","c.png","d.png"]

let contadorsistema = 0
let contadormercado = 0
let contadorspring = 0
let contadorapiclima = 0
let contadorproyectmovies = 0
let url = "./img/sistemacontable/"
let urlm = "./img/proyectoventa/"
let urls = "./img/proyectospring/"
let urlapi = "./img/apiclima/"
let urlmovie = "./img/proyectmovies/"

let random  = setInterval(function() {
    sistema.src = url+linkssistema[contadorsistema]
    mercado.src = urlm+linksmercado[contadormercado]
    spring.src = urls+linksspring[contadorspring]
    apiclima.src = urlapi+linksapiclima[contadorapiclima]
    proyectmovies.src = urlmovie+linksproyectmovies[contadorproyectmovies]
    contadormercado++
    contadorsistema++
    contadorspring++
    contadorapiclima++
    contadorproyectmovies++
    if(linkssistema.length==contadorsistema){
        contadorsistema = 0
    }
    if(linksmercado.length==contadormercado){
        contadormercado = 0
    }
    if(linksspring.length==contadorspring){
        contadorspring = 0
    }
    if(linksapiclima.length == contadorapiclima){
        contadorapiclima = 0
    }
    if(linksproyectmovies.length = contadorproyectmovies){
        contadorproyectmovies = 0
    }
    
},2000)
document.querySelectorAll('a[href="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        })
    })
})
