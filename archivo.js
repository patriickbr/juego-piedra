let frases = ['piedra', 'tijeras', 'papel']



        let getComputerChoice = function(){
            const aleatorio = Math.floor(Math.random() * frases.length);
            return frases[aleatorio];
        }

         //VAMOS A SELECCIONAR LOS DIVS PARA CAMBIAR LOS RESULTADOS

         const jugadorEleccion = document.querySelector("#jugadorEleccion");
         const ordenadorEleccion = document.querySelector("#ordenadorEleccion");
         const resultadoEleccion = document.querySelector("#resultadoEleccion");


         let puntuacionMia = 0;
         let puntuacionPc = 0;

      

        function playRound(playerSelection, computerSelection) {

            // AQUI EMPIEZA EL CODIGO PARA PIEDRA:

            if (playerSelection === 'piedra' && computerSelection === 'tijeras'){
                resultadoEleccion.style.color = "green";

                resultadoEleccion.textContent = "HAS GANADO, EL PC TENIA TIJERAS :)";
                puntuacionMia++
                jugadorEleccion.textContent = "JUGADOR: " + puntuacionMia;


            } else if (playerSelection === 'piedra' && computerSelection === 'papel'){
                resultadoEleccion.style.color = "red";

                resultadoEleccion.textContent = "HAS PERDIDO, EL PC TENIA PAPEL :(";
                puntuacionPc++;
                ordenadorEleccion.textContent = "ORDENADOR: " + puntuacionPc;
            
                
            } 
            
            
            // AQUI EMPIEZA EL CODIGO PARA TIJERAS:


            else if (playerSelection === 'tijeras' && computerSelection === 'papel'){
                resultadoEleccion.style.color = "green";

                resultadoEleccion.textContent = "HAS GANADO, EL PC TENIA PAPEL :)";
                puntuacionMia++
                jugadorEleccion.textContent = "JUGADOR: " + puntuacionMia;
            } 
            
            
            else if (playerSelection === 'tijeras' && computerSelection === 'piedra'){
                resultadoEleccion.style.color = "red";
                
                resultadoEleccion.textContent = "HAS PERDIDO, EL PC TENIA PIEDRA :(";
                puntuacionPc++;
                ordenadorEleccion.textContent = "ORDENADOR: " + puntuacionPc;
            }

            // AQUI EMPIEZA EL CODIGO PARA PAPEL:

            else if (playerSelection === 'papel' && computerSelection === 'piedra'){
                resultadoEleccion.style.color = "green";

                resultadoEleccion.textContent = "HAS GANADO, EL PC TENIA PIEDRA :) ";
                puntuacionMia++
                jugadorEleccion.textContent = "JUGADOR: " + puntuacionMia;
            } 
            
            
            else if (playerSelection === 'papel' && computerSelection === 'tijeras'){
                resultadoEleccion.style.color = "red";
                
                resultadoEleccion.textContent = "HAS PERDIDO, EL PC TENIA TIJERAS :(";
                puntuacionPc++;
                ordenadorEleccion.textContent = "ORDENADOR: " + puntuacionPc;
            } else {
                resultadoEleccion.style.color = "black";
                resultadoEleccion.textContent = "HA HABIDO UN EMPATE";
            }
            verificarGanador();
        }

        function verificarGanador() {
            // Comprueba si el jugador o el ordenador ha alcanzado los 5 puntos
            if (puntuacionMia === 5) {
                resultadoEleccion.textContent = "¡Felicidades, ganaste el juego!";
                desactivarBotones();
                mostrarBotonReiniciar();
            } else if (puntuacionPc === 5) {
                resultadoEleccion.textContent = "El ordenador ganó el juego. Mejor suerte la próxima vez!";
                desactivarBotones();
                mostrarBotonReiniciar();
            }
        }
        
        function desactivarBotones() {
            // Desactiva todos los botones de opciones
            botones.forEach(boton => boton.disabled = true);
        }
        
        function mostrarBotonReiniciar() {
            // Crea un botón de reinicio
            const botonReiniciar = document.createElement("button");
            botonReiniciar.textContent = "Reiniciar";
            botonReiniciar.style.marginTop = "20px";
            document.body.appendChild(botonReiniciar);
            
            // Al hacer clic en el botón de reinicio, se reinicia el juego
            botonReiniciar.addEventListener("click", () => {
                puntuacionMia = 0;
                puntuacionPc = 0;
                jugadorEleccion.textContent = "JUGADOR: 0";
                ordenadorEleccion.textContent = "ORDENADOR: 0";
                resultadoEleccion.textContent = "¡Comienza una nueva partida!";
                botonReiniciar.remove();
                activarBotones();
            });
        }
        
        function activarBotones() {
            // Activa todos los botones de opciones para jugar de nuevo
            botones.forEach(boton => boton.disabled = false);
        }
        //Seleccionamos todos los botones

        let botones = document.querySelectorAll(".elecciones button");

        //Hacemos un ForEach para recorre todos los botones

       botones.forEach((boton) =>{

        //Le metemos un eventListener click a los botones para que cuando clicquen me den los datos.
        boton.addEventListener("click", () => {
            let eleccionJugador;
            if (boton.textContent.includes("👊🏻")) {
                eleccionJugador = "piedra";
              } else if (boton.textContent.includes("✋🏻")) {
                eleccionJugador = "papel";
              } else if (boton.textContent.includes("✌🏻")) {
                eleccionJugador = "tijeras";
              }
            playRound(eleccionJugador, getComputerChoice())
        })
       })        