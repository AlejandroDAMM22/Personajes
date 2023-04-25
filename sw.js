//Seccion de cache
//1.Estatico: todos los recursos que necesita la app para funcionar.
//2.Dinamico: todos los recursos que se borraron del estatico y se reincorporan al cache.
//3.Inmutable: Es aquel que no sufre cambios (todos los recursos de terceros por ejemplo API's, boostrao, Jquery)
const cache_estatico = 'staticV3';
const cache_dinamico = 'dinamicV3';
const cache_inmutable = 'inmutableV3';

        

self.addEventListener('install', event=>{
            const cacheInstallEstatico = caches.open(cache_estatico) //open crea y abre el cache
              .then(cache=>{
                    return cache.addAll([
                        '/',
                        '/index.html',
                        '/pages/Offline.html',
                        '/pages/infoMario.html',
                        '/pages/infoLuigi.html',
                        '/pages/infoBowser.html',
                        '/pages/infoPrincesa.html',
                        '/css/css.css',
                        '/img/noImage.png',
                        '/img/hongo.png',
                        '/img/error-404.png',
                        '/img/mario1985.png',
                        '/img/mario1988.png',
                        '/img/mario1990.png',
                        '/img/mario2007.png',
                        '/img/mario2008.png',
                        '/img/mario2015.png',
                        '/img/luigi1985.png',
                        '/img/luigi1988.png',
                        '/img/luigi1989.png',
                        '/img/luigi1990.png',
                        '/img/luigi2001.png',
                        '/img/luigi2013.png',
                        '/img/bowser1985.png',
                        '/img/bowser1993.png',
                        '/img/bowser1996.png',
                        '/img/bowser2000.png',
                        '/img/bowser2007.png',
                        '/img/bowser2012.png',
                        '/img/peach1985.png',
                        '/img/peach1988.png',
                        '/img/peach1994.png',
                        '/img/peach2002.png',
                        '/img/peach2008.png',
                        '/img/peach2014.png',
                        '/js/app.js',
                        '/js/funcionamiento.js',
                        'manifest.json'
                       
                    ]);

                })

            const cacheInstallInmutable = caches.open(cache_inmutable)
            .then(cache=>{
                return cache.add([
                    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'
                ]);
            })

                event.waitUntil(Promise.all([cacheInstallEstatico, cacheInstallInmutable]));
        });
    self.addEventListener('fetch', a => {
        const respuesta = new Promise((resolve, reject) => {
            let rechazada = false;
    
            const falloUnaVez = () => {
                if (rechazada) {
                    if (/\.(png|jpg)$/i.test(a.request.url)) {
                        resolve(caches.match('img/noImage.png'));
                    } else {
                        reject('No se encontro respuesta')
                    }
                } else {
                    rechazada = true;
                }
            };
            // buscamos en internet
            fetch(a.request).then(res => {
                res.ok ? resolve(res) : falloUnaVez();
            }).catch(falloUnaVez);
            // buscamos en cache
            caches.match(a.request).then(res => {
                if (res) {
                    resolve(res);
                } else {
                    console.log('El recurso solicitado no esta en cache', a.request.url);
                    return fetch(a.request).then(newResp => {
                        caches.open(cache_dinamico).then(cache => {
                            cache.put(a.request, newResp);
                        })
                        resolve(newResp.clone());
                    });
                }
            }).catch(falloUnaVez);
        });
        // si la solicitud es para un documento HTML y falla la respuesta, responder con la página offline.html
        if (a.request.headers.get('accept').includes('text/html')) {
            a.respondWith(
                respuesta.catch(() => caches.match('pages/Offline.html'))
            );
        } else {
            a.respondWith(respuesta);
        }

    });