function showInp(){
    getSelectValue = document.getElementById("personajes").value;
    if(getSelectValue==1){
      document.getElementById("añoMario").style.display = "inline-block";
      document.getElementById("añoLuigi").style.display = "none";
      document.getElementById("añoBowser").style.display = "none";
      document.getElementById("añoPrincesa").style.display = "none";
    }else if(getSelectValue==2){
      document.getElementById("añoMario").style.display = "none";
      document.getElementById("añoLuigi").style.display = "inline-block";
      document.getElementById("añoBowser").style.display = "none";
      document.getElementById("añoPrincesa").style.display = "none";
     } else if(getSelectValue==3){
      document.getElementById("añoMario").style.display = "none";
      document.getElementById("añoLuigi").style.display = "none";
      document.getElementById("añoBowser").style.display = "inline-block";
      document.getElementById("añoPrincesa").style.display = "none";
     }
     else if(getSelectValue==4){
      document.getElementById("añoMario").style.display = "none";
      document.getElementById("añoLuigi").style.display = "none";
      document.getElementById("añoBowser").style.display = "none";
      document.getElementById("añoPrincesa").style.display = "inline-block";
     }
  }

  
  const personajeMario = {
    mario1985: {
      imagen: 'mario1985.png',
      nombre: 'Mario Bros 1985',
      descripcion: 'Mario Bros es un videojuego de plataformas creado por la compañía japonesa Nintendo y lanzado originalmente en 1985.'
    },
    mario1988: {
      imagen: 'mario1988.png',
      nombre: 'Mario Bros 1988',
      descripcion: 'Super Mario Bros. 2, conocido en Japón como Super Mario USA, es un videojuego de plataformas desarrollado por Nintendo para la consola Nintendo Entertainment System. Fue lanzado originalmente en Estados Unidos en octubre de 1988, un año más tarde en Europa y en 1992 en Japón'
    },
    mario1990: {
      imagen: 'mario1990.png',
      nombre: 'Mario Bros 1990',
      descripcion: 'Fue el primer juego de Mario lanzado para la SNES. Presenta semejanzas con Super Mario Bros. 3, pero con nuevos diseños'
    },
    mario2007:{
      imagen: 'mario2007.png',
      nombre: 'Mario Bros 2007',
      descripcion:'Super Mario Galaxy fue lanzado durante el mes de noviembre del año 2007 en Japón, América y Europa.1​ Tras su estreno, se convirtió en el primer título de la serie Mario en salir para la mencionada Wii.​'
    },
    mario2008:{
      imagen: 'mario2008.png',
      nombre: 'Mario Bros 2008',
      descripcion:'Mario Kart llega a Wii en 2008 con la misma diversión de siempre e incluyendo bienvenidas novedades. La primera, el juego online, pudiendo participar en carreras de hasta doce jugadores simultáneos'
    },
    mario2015:{
      imagen: 'mario2015.png',
      nombre: 'Mario Bros 2015',
      descripcion:'Super Mario Maker 2015 para Wii U es un título que propondrá a los jugadores convertirse en diseñadores de juegos de Super Mario'
    }
  };

  const selectAñoMario = document.getElementById('añoMario');
  const imagenMario = document.getElementById('personaje-imagen');

  selectAñoMario.addEventListener('change', () => {
    const opcionSeleccionadaMario = selectAñoMario.value;
    if (opcionSeleccionadaMario === 'mario1985') {
      imagenMario.src = 'img/mario1985.png';
    } else if (opcionSeleccionadaMario === 'mario1988') {
      imagenMario.src = 'img/mario1988.png';
    } else if (opcionSeleccionadaMario === 'mario1990') {
      imagenMario.src = 'img/mario1990.png';
    } else if (opcionSeleccionadaMario === 'mario2007') {
        imagenMario.src = 'img/mario2007.png';
    } else if (opcionSeleccionadaMario === 'mario2008') {
        imagenMario.src = 'img/mario2008.png';
    } else if (opcionSeleccionadaMario === 'mario2015') {
        imagenMario.src = 'img/mario2015.png';
    }

    imagenMario.style.width = '200px';
    imagenMario.style.height = '200px';
  });

  imagenMario.addEventListener('click', () => {
    const nombreMario = selectAñoMario.value;
    const imagenSrcMario = imagenMario.src;
    const descripcionMario = personajeMario[nombreMario].descripcion;
    localStorage.setItem('nombreMario', nombreMario);
    localStorage.setItem('imagenSrcMario', imagenSrcMario);
    localStorage.setItem('descripcionMario', descripcionMario);
    window.location.href = 'pages/infoMario.html';
  });

  const personajeLuigi = {
    luigi1985: {
      imagen: 'luigi1985.png',
      nombre: 'Luigi 1985',
      descripcion: 'El origen de Luigi se remonta a Mario Bros de 1985, un juego de Arcade donde él y su hermano se dedicaban a matar diversos enemigos que salían de las tuberías.'
    },
    luigi1988: {
      imagen: 'luigi1988.png',
      nombre: 'Luigi 1988',
      descripcion: 'La suerte de este personaje desapareció, por un lado fue ignorado en los dos Super Mario Land de Game Boy, y por otro volvió a ser un clon de Mario pintado de verde en Super Mario Bros 3 (1988)'
    },
    luigi1989: {
      imagen: 'luigi1989.png',
      nombre: 'Luigi 1989',
      descripcion: 'Fue ignorado en los dos Super Mario Land de Game Boy que salieron entre 1989 y 1992'
    },
    luigi1990: {
      imagen: 'luigi1990.png',
      nombre: 'Luigi 1990',
      descripcion: 'Volvió a ser un clon de Mario pintado de verde en Super Mario Bros 3 (1988) y Super Mario World (1990) aunque en versiones posteriores de estos juegos si se le diferenciaría de su hermano.'
    },
    luigi2001: {
      imagen: 'luigi2001.png',
      nombre: 'Luigi 2001',
      descripcion: 'Luigi’s Mansion (2001), una aventura donde debía rescatar a su hermano de una mansión encantada llena de fantasmas.'
    },
    luigi2013: {
      imagen: 'luigi2013.png',
      nombre: 'Luigi 2013',
      descripcion: 'El año 2013 fue anunciado como el año de Luigi, dándole más importancia al fontanero vestido de verde, que a su hermano.'
    }
  };
  const selectAñoLuigi = document.getElementById('añoLuigi');
  const imagenLuigi = document.getElementById('personaje-imagen');

  selectAñoLuigi.addEventListener('change', () => {
    const opcionSeleccionadaLuigi = selectAñoLuigi.value;
    if (opcionSeleccionadaLuigi === 'luigi1985') {
      imagenLuigi.src = 'img/luigi1985.png';
    } else if (opcionSeleccionadaLuigi === 'luigi1988') {
      imagenLuigi.src = 'img/luigi1988.png';
    } else if (opcionSeleccionadaLuigi === 'luigi1989') {
      imagenLuigi.src = 'img/luigi1989.png';
    } else if (opcionSeleccionadaLuigi === 'luigi1990') {
        imagenLuigi.src = 'img/luigi1990.png';
    } else if (opcionSeleccionadaLuigi === 'luigi2001') {
        imagenLuigi.src = 'img/luigi2001.png';
    } else if (opcionSeleccionadaLuigi === 'luigi2013') {
        imagenLuigi.src = 'img/luigi2013.png';
    }

    imagenLuigi.style.width = '200px';
    imagenLuigi.style.height = '200px';
  });

  imagenLuigi.addEventListener('click', () => {
    const nombreLuigi = selectAñoLuigi.value;
    const imagenSrcLuigi = imagenLuigi.src;
    const descripcionLuigi = personajeLuigi[nombreLuigi].descripcion;
    localStorage.setItem('nombreLuigi', nombreLuigi);
    localStorage.setItem('imagenSrcLuigi', imagenSrcLuigi);
    localStorage.setItem('descripcionLuigi', descripcionLuigi);
    window.location.href = 'pages/infoLuigi.html';
  });

 

  const personajeBowser = {
    bowser1985: {
      imagen: 'bowser1985.png',
      nombre: 'Bowser 1985',
      descripcion: 'La primera aparición de Bowser fue en Super Mario Bros, como el principal villano que secuestra a la princesa Peach y como el jefe del mundo.'
    },
    bowser1993: {
      imagen: 'bowser1993.png',
      nombre: 'Bowser 1993',
      descripcion: 'Aparece en Super Mario Bros 3. junto con los Koopalings, que secuestran a Peach de nuevo. Aparece en el mundo 8, cuya batalla consiste en que da un gran salto contra Mario y Luigi'
    },
    bowser1996: {
      imagen: 'bowser1996.png',
      nombre: 'Bowser 1996',
      descripcion: 'Bowser hace su primera aparición en 3D en Super Mario 64, donde invade el castillo de la Princesa Peach y gran parte de los cuadros con la magia que robó de la energía de Estrellas.'
    },
    bowser2000: {
      imagen: 'bowser2000.png',
      nombre: 'Bowser 2000',
      descripcion: 'Regresa en Super Mario Sunshine, en el que lo acompaña por primera vez su hijo, Bowser Jr., secuestrando a Peach. Bowser aparece como el jefe final del juego, en dicha batalla, Bowser estará en una bañera con forma de Sol (aparentemente llena de ácido).'
    },
    bowser2007: {
      imagen: 'bowser2007.png',
      nombre: 'Bowser 2007',
      descripcion: 'En Super Mario Galaxy, Bowser secuestra a Peach y toma el centro del universo para gobernar la misma.'
    },
    bowser2012: {
      imagen: 'bowser2012.png',
      nombre: 'Bowser 2012',
      descripcion: 'Bowser secuestra de nuevo a la Princesa Peach, esta vez para casarse con ella. Este vence a Mario al comienzo del juego y viaja a distintos reinos para anunciar su boda con Peach y robarse objetos valiosos, formando alianza con unos conejos bandidos conocidos como Los Broodals.'
    },
  };

  const selectAñoBowser = document.getElementById('añoBowser');
  const imagenBowser = document.getElementById('personaje-imagen');

  selectAñoBowser.addEventListener('change', () => {
    const opcionSeleccionadaBowser = selectAñoBowser.value;
    if (opcionSeleccionadaBowser === 'bowser1985') {
      imagenBowser.src = 'img/bowser1985.png';
    } else if (opcionSeleccionadaBowser === 'bowser1993') {
      imagenBowser.src = 'img/bowser1993.png';
    } else if (opcionSeleccionadaBowser === 'bowser1996') {
      imagenBowser.src = 'img/bowser1996.png';
    } else if (opcionSeleccionadaBowser === 'bowser2000') {
        imagenBowser.src = 'img/bowser2000.png';
    } else if (opcionSeleccionadaBowser === 'bowser2007') {
        imagenBowser.src = 'img/bowser2007.png';
    } else if (opcionSeleccionadaBowser === 'bowser2012') {
        imagenBowser.src = 'img/bowser2012.png';
    }

    imagenBowser.style.width = '200px';
    imagenBowser.style.height = '200px';
  });

  imagenBowser.addEventListener('click', () => {
    const nombreBowser = selectAñoBowser.value;
    const imagenSrcBowser = imagenBowser.src;
    const descripcionBowser = personajeBowser[nombreBowser].descripcion;
    localStorage.setItem('nombreBowser', nombreBowser);
    localStorage.setItem('imagenSrcBowser', imagenSrcBowser);
    localStorage.setItem('descripcionBowser', descripcionBowser);
    window.location.href = 'pages/infoBowser.html';
  });

  const personajePrincesa = {
    peach1985: {
      imagen: 'peach1985.png',
      nombre: 'Princesa Peach 1985',
      descripcion: 'Es el primer juego donde aparece Peach. Aquí cumple el rol de damisela en apuros que es capturada por un ser maligno llamado Bowser.'
    },
    peach1988: {
      imagen: 'peach1988.png',
      nombre: 'Princesa Peach 1988',
      descripcion: 'Aquí Peach (junto con Mario, Luigi y Toad) es un personaje controlable, en el cual se caracteriza por su salto flotante y gran velocidad. Debe derrotar a Wart, el villano principal del juego.'
    },
    peach1994: {
      imagen: 'peach1994.png',
      nombre: 'Princesa Peach 1994',
      descripcion: ' En este juego, Mario, Luigi y Peach de vacaciones a la Isla Dinosaurio, pero es secuestrada de nuevo por Bowser.'
    },
    peach2002: {
      imagen: 'peach2002.png',
      nombre: 'Princesa Peach 2002',
      descripcion: ' En este juego, Peach invita a Mario a comer un pastel, pero es secuestrada en su propio castillo por Bowser. Si se consiguen las primeras 70 Superestrellas, Mario podrá derrotar a Bowser y rescatarla.'
    },
    peach2008: {
      imagen: 'peach2008.png',
      nombre: 'Princesa Peach 2008',
      descripcion: 'Super Princess Peach: En este juego de plataformas lanzado en el año 2005, Peach aparece como personaje controlable. Además, fue en este mismo videojuego donde por primera y única vez se presenta como la protagonista.'
    },
    peach2014: {
      imagen: 'peach2014.png',
      nombre: 'Princesa Peach 2014',
      descripcion: 'Peach aparece como 2 personajes diferentes: Una en su versión Mario y Luigi RPG'
    }
  };
const selectAñoPrincesa = document.getElementById('añoPrincesa');
  const imagenPrincesa = document.getElementById('personaje-imagen');

  selectAñoPrincesa.addEventListener('change', () => {
    const opcionSeleccionadaPrincesa = selectAñoPrincesa.value;
    if (opcionSeleccionadaPrincesa === 'peach1985') {
      imagenPrincesa.src = 'img/peach1985.png';
    } else if (opcionSeleccionadaPrincesa === 'peach1988') {
      imagenPrincesa.src = 'img/peach1988.png';
    } else if (opcionSeleccionadaPrincesa === 'peach1994') {
      imagenPrincesa.src = 'img/peach1994.png';
    } else if (opcionSeleccionadaPrincesa === 'peach2002') {
        imagenPrincesa.src = 'img/peach2002.png';
    } else if (opcionSeleccionadaPrincesa === 'peach2008') {
        imagenPrincesa.src = 'img/peach2008.png';
    } else if (opcionSeleccionadaPrincesa === 'peach2014') {
        imagenPrincesa.src = 'img/peach2014.png';
    }

    imagenPrincesa.style.width = '200px';
    imagenPrincesa.style.height = '200px';
  });

  imagenPrincesa.addEventListener('click', () => {
    const nombrePrincesa = selectAñoPrincesa.value;
    const imagenSrcPrincesa = imagenPrincesa.src;
    const descripcionPrincesa = personajePrincesa[nombrePrincesa].descripcion;
    localStorage.setItem('nombrePrincesa', nombrePrincesa);
    localStorage.setItem('imagenSrcPrincesa', imagenSrcPrincesa);
    localStorage.setItem('descripcionPrincesa', descripcionPrincesa);
    window.location.href = 'pages/infoPrincesa.html';
  });

