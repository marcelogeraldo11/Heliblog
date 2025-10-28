---
title: "10 características clave de drones DJI para Seguridad Pública y cómo usarlas"
description: "Guía práctica (en español) para aprovechar funciones de DJI Enterprise en operaciones de Seguridad Pública: PinPoint, Panoramas, Órbitas, Áreas de Vuelo Personalizadas, Modo de Datos Local y más."
pubDate: 2025-10-13
heroImage: "/Public Safety/unnamed.png"
tags: ["Seguridad Pública", "DJI", "Pilot 2", "FlightHub 2", "Mavic 3 Enterprise", "Matrice 30", "DFR"]
---

En un entorno de seguridad pública en constante evolución, los drones se han convertido en herramientas esenciales para respuestas eficientes y efectivas. Ya sea mitigando incendios forestales, documentando desastres naturales o apoyando persecuciones en tiempo real, la integración de soluciones DJI Enterprise ofrece ventajas únicas.

En este artículo traducido al español, exploramos diez funciones clave de DJI Enterprise para potenciar tu estrategia de respuesta y las operaciones con drones de Seguridad Pública. Donde corresponde, hemos dejado espacios para imágenes usando los mismos nombres de archivo que tendrás en tu carpeta `Public Safety` y hemos aplicado los mismos enlaces de YouTube del artículo original.

Fuente original: https://enterprise-insights.dji.com/blog/top-public-safety-drone-features

## 1) PinPoint y Compartición de Ubicación

- Desde la llegada del Matrice 300 RTK y la serie H20, la función PinPoint permite colocar un pin sobre la ubicación observada en Pilot 2 y obtener sus coordenadas.
- En H20 y M30 se usa el telémetro láser integrado; en Mavic 3 Enterprise se utiliza la ubicación de la aeronave.
- Útil para detección de objetos de interés (por ejemplo, personas desaparecidas) o junto a herramientas de medición de temperatura en cámara térmica para resaltar puntos calientes.

Referencias en video:
- PinPoints: https://www.youtube.com/watch?v=H9fNx2JmIYk
- Herramienta de medición de temperatura de área: https://youtu.be/GOLUk3ePy_Y?si=GHeYxOhPf9Dd_KLB&t=397
- Destacar puntos calientes: https://youtu.be/DFq8L3-XjAE?si=GQgEGMsSpZ6N62IV&t=1371

### Exportación offline de pines (Pilot 2)

1. Mantén pulsado el botón de pin.
2. Marca todos los pines.
3. Exporta a tarjeta SD.
4. Importa en el software que use el equipo en tierra.

![Insights GIF - Export Pin](/Public Safety/Insights GIF - Export Pin.gif)

### Compartir la ubicación del pin por código QR (Pilot 2)

1. Selecciona un pin en el mapa.
2. Toca el icono de exportar y escanea el código QR con un teléfono.
3. Envía/Comparte con el equipo.

![Pin QR](/Public Safety/10 Featurs PS - Pin QR GIF.gif)

### Gestión de anotaciones en FlightHub 2

- Organiza y exporta pin(es) a una carpeta y expórtalos a KML desde la pestaña de anotaciones.
- También puedes ver el mapa de FlightHub 2 en el campo desde un navegador en dispositivo móvil.

Documentación: https://fh.dji.com/user-manual/en/annotation-management.html

![Live Annotations](/Public Safety/PinPoints - FlightHub 2 Live Annotations.gif)

## 2) Panoramas

- Genera rápidamente imágenes de alta resolución de un área capturando imágenes solapadas en una misión automatizada.
- Planificación en Pilot 2, procesamiento en FlightHub 2 (nube) o DJI Terra (offline en Windows con potencia suficiente).
- Ventajas: visión 360º, tamaño pequeño (~30MB), geolocalización y subida sencilla a servicios de mapas como FlightHub 2.

Cómo usar Panorama en Pilot 2:
1. Modo Foto → Foto → Panorama → pulsa Capturar.
2. Compatible con Mavic 3 Enterprise, Matrice 30, M300/M350 + H20.
3. Para ver en un dispositivo externo, importa a un visor que soporte panoramas (por ejemplo FlightHub 2).

![Pano](/Public Safety/10 Features PS - Pano.gif)

Referencias en video:
- Captura solapada en misión automatizada: https://youtu.be/rLOM82se6W8
- Planificación en Pilot 2: https://www.youtube.com/watch?v=QeGND3_wxYQ
- Procesamiento en DJI Terra: https://youtu.be/UXF6lIMb9Vw

> Nota: los panoramas no pueden superponerse directamente como mapas 2D ni usarse para mediciones.

## 3) Vuelo en Órbita para Reconstrucción de Escena

- Para documentar un accidente o incidente, construir un modelo 3D detallado y preciso es clave.
- Además del patrón de mapeo “cortacésped”, añadir imágenes oblicuas capturadas en órbitas a baja altura mejora el detalle de objetos y estructuras.
- Desde el firmware V7.1, la órbita puede automatizarse con la serie Mavic 3 Enterprise.

Cómo habilitar la órbita:
1. Coloca un pin en el centro de la escena a la altitud de la órbita.
2. Vuela el dron hasta el tamaño de órbita deseado.
3. Activa Órbita.
4. Usa derecha/izquierda para iniciar la órbita. (Opcional: completa una órbita lenta para revisar la ruta).
5. Bloquea velocidad con C1. (Según obstáculos, puede requerirse vuelo manual, órbita menor o distinta altitud).

Automatizar la captura de fotos:
1. Bloquea el pitch del gimbal con C2 (evita horizonte en la imagen).
2. Activa la captura de foto temporizada.
3. Completa una órbita completa.
4. Detén la captura. (Opcional: repite a otra altitud para más datos).

![Accident Reconstruction](/Public Safety/Accident Reconstruction Workflow with the Mavic 3E - Manual capture.webp)

Video demostrativo: https://www.youtube.com/embed/682kahKbSqE

## 4) Áreas de Vuelo Personalizadas

- Muchas agencias exploran operaciones DFR (drones como primer respondedor).
- DJI Dock habilita respuesta automatizada y el firmware reciente añade seguridad con áreas de vuelo personalizadas (Matrice 30 y/o DJI Dock).
- Define dónde puede y no puede volar el dron; el RTH evita pasar por zonas restringidas.

Cómo crear un Área de Vuelo Personalizada (FlightHub 2):
1. Conecta aeronave y/o DJI Dock a FlightHub 2.
2. Entra al submenú de geocercas (geocaging).
3. Dibuja áreas de vuelo personalizadas.
4. Sincroniza con la aeronave.

![Customized Flight Areas](/Public Safety/10 Features PS - Customized Flight Areas.gif)

Más detalles: https://fh.dji.com/user-manual/en/task-area-management/custom-flight-area.html

Video relacionado (DFR): https://youtu.be/jEuZ4Np9Y-w?si=StYVNByvfn5aJrE6&t=292

## 5) Modo de Datos Local para Misiones Seguras

- En Pilot 2, habilita el Modo de Datos Local para bloquear la conexión internet de la app.
- Permite operar completamente offline y traer recursos clave vía tarjeta SD: actualizaciones de firmware, certificados FlySafe de desbloqueo, mapas.

Pasos (Modo de Datos Local):
1. Pulsa el icono de Seguridad en la pantalla principal de Pilot 2.
2. Ve a “Network Security Mode”.
3. Habilita “Local Data Mode”.

Video: https://www.youtube.com/embed/sCXFOuUduDw?start=50

### Actualizaciones de firmware offline

1. Descarga el firmware desde la página oficial del producto (DJI) a una microSD.
2. En Pilot 2, entra a “Health Management System” → “Firmware Update”.
3. Toca “Offline Update” y selecciona el paquete (control remoto, aeronave o estación de baterías).
4. Pulsa “Update All”.

### Certificados FlySafe offline en Pilot 2

1. Descarga el desbloqueo en el portal DJI FlySafe.
2. Copia el archivo de desbloqueo a la SD.
3. En Pilot 2, ve a “GeoZone Unlocking”.
4. Importa el archivo desde la SD.

![Offline Unlock](/Public Safety/10 Features PS - Offline Unlock.gif)

## 6) Mirar al Pin (Look At Pin)

- Usa “Look At Pin” para orientar gimbal/cámara hacia un pin seleccionado, útil en coordinación táctica o búsquedas.

![Look At Pin](/Public Safety/10 Features PS - Look At Pin.gif)

## 7) Baliza Infrarroja (IR Beacon)

- Las balizas IR ayudan a marcar ubicaciones o activos durante operaciones nocturnas y pueden ser visibles en cámaras térmicas.

![IR Beacon](/Public Safety/10 Featurs PS - IR Beacon.gif)

## 8) Salida HDMI

- La salida HDMI permite enviar la señal de video a monitores externos o sistemas de mando y control.

![HDMI](/Public Safety/10 Featurs PS - HDMI.gif)

## 9) Live Annotations en FlightHub 2

- Utiliza anotaciones en vivo para coordinar equipos, marcar puntos de interés y registrar evidencia operativa.
- Complementa con la exportación a KML y compartición con equipos en campo.

![Live Annotations](/Public Safety/PinPoints - FlightHub 2 Live Annotations.gif)

## 10) Operaciones Offline: Mapas y KML

- Mantén mapas offline actualizados y utiliza archivos KML para límites, zonas o rutas.
- Aprovecha la importación/exportación desde Pilot 2 y la compatibilidad con FlightHub 2/DJI Terra.

---

Consejo final: estandariza procedimientos y capacitación para estas funciones en tu agencia. La combinación de planificación (Pilot 2), coordinación (FlightHub 2), y capacidades del hardware (Mavic 3 Enterprise, Matrice 30, H20) maximiza la eficacia y la seguridad de tus operaciones.