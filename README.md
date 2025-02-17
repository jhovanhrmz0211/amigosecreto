# Amigo Secreto

Este es un proyecto web interactivo que permite a los usuarios ingresar nombres y realizar un sorteo de "Amigo Secreto" de manera aleatoria. Incluye una interfaz intuitiva, efecto de confeti al sortear y la posibilidad de eliminar nombres y reiniciar la lista.

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura del sitio web.
- **CSS3**: Diseño responsivo y estilos visuales.
- **JavaScript**: Lógica para agregar, eliminar y sortear amigos.
- **Canvas-Confetti**: Efecto de confeti al sortear.

## 📌 Características

✔️ Agregar nombres de participantes. ✔️ Eliminar nombres individuales. ✔️ Reiniciar la lista completa. ✔️ Realizar un sorteo aleatorio. ✔️ Efecto de confeti al mostrar el resultado. ✔️ Diseño responsivo adaptable a dispositivos móviles.

## 📷 Capturas de Pantalla

*Aquí puedes agregar imágenes del proyecto en funcionamiento.*

## 📦 Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador.

## 📜 Código Destacado

Ejemplo de cómo se genera el sorteo:

```js
function sortearAmigo() {
    if (listaNombres.length < 2) {
        alert('Se necesitan al menos dos nombres para hacer un sorteo.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * listaNombres.length);
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${listaNombres[indiceSorteado]}</strong></p>`;
    lanzarConfeti();
}
```

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.

---

¡Disfruta sorteando a tu Amigo Secreto! 🎁🎉

