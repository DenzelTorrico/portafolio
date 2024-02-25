let sistema = document.getElementById("sistemacontable")
let mercado = document.getElementById("Mercadoz")
let spring = document.getElementById("proyectospring")
let apiclima = document.getElementById("apiclima")
let proyectmovies = document.getElementById("proyectmovies")
let notificaciones = document.getElementById("sistemanotificaciones")
let javainventario = document.getElementById("javainventario")
let springerp = document.getElementById("springerp")

let linkssistema = ["Cliente.png","egresos.png","ingreso.png"]
let linksmercado = ["mercadoz2.png","mercadoz3.png","mercadoz4.png","mercadoz.png"]
let linksspring = ["a.png","b.png","c.png","d.png"]
let linksapiclima = ["a.png","b.png","c.png"]
let linksproyectmovies = ["a.png","b.png","c.png","d.png"]
let linksnotificaciones = ["a.png","b.png","c.png"]
let linksjavainventario = ["a.png","b.png","c.png","d.png","e.png"]
let linksspringerp = ["a.png","b.png","c.png","d.png"]

let [
    contadorsistema,
    contadormercado,
    contadorspring,
    contadorapiclima,
    contadorproyectmovies,
    CounterNotifications,
    CounterJavaInventory,
    CounterSpringErp,
  ] = Array(8).fill(0);
  
let url = "./img/sistemacontable/"
let urlm = "./img/proyectoventa/"
let urls = "./img/proyectospring/"
let urlapi = "./img/apiclima/"
let urlmovie = "./img/proyectmovies/"
let urlNoti = "./img/sistemanotififaciones/"
let UrlInventory = "./img/javainventario/"
let urlSpringErp = "./img/erpsistema/"

let random  = setInterval(function() {
    sistema.src = url+linkssistema[contadorsistema]
    mercado.src = urlm+linksmercado[contadormercado]
    spring.src = urls+linksspring[contadorspring]
    apiclima.src = urlapi+linksapiclima[contadorapiclima]
    proyectmovies.src = urlmovie+linksproyectmovies[contadorproyectmovies]
    notificaciones.src = urlNoti+linksnotificaciones[CounterNotifications]
    javainventario.src = UrlInventory+linksjavainventario[CounterJavaInventory]
    springerp.src = urlSpringErp+linksspringerp[CounterSpringErp]

    contadormercado++
    contadorsistema++
    contadorspring++
    contadorapiclima++
    contadorproyectmovies++
    CounterNotifications++
    CounterJavaInventory++
    CounterSpringErp++
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
    if(linksproyectmovies.length == contadorproyectmovies){
        contadorproyectmovies = 0
    }
    if(linksnotificaciones.length == CounterNotifications){
        CounterNotifications = 0
    }
    if(linksjavainventario.length == CounterJavaInventory){
        CounterJavaInventory = 0
    }
    if(linksspringerp.length == CounterSpringErp){
        CounterSpringErp = 0
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
