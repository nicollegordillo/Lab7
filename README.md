# Simple Calculator App

Este proyecto es una aplicación de calculadora simple desarrollada con Next.js. Ofrece una interfaz intuitiva para realizar operaciones aritméticas básicas. <br>
Puedes visualizar la calculadora en https://lab7-nicollegordillos-projects.vercel.app/

## Características

- Realiza operaciones de suma, resta, multiplicación y división.
- Muestra el resultado en tiempo real mientras se ingresan los números y operadores.
- Capacidad para borrar dígitos individuales o limpiar toda la pantalla.
- Funciona tanto con clics en pantalla como con teclas del teclado.
- Incluye pruebas unitarias y componentes de Storybook para facilitar el desarrollo y el mantenimiento.

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio en tu máquina local utilizando Git:

```bash
git clone https://github.com/nicollegordillo/Lab7.git
```
2. Accede al directorio del proyecto:
```bash
cd Lab7/simple-calculator
```
3. Instala las dependencias utilizando npm:
```bash
npm install
```
## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```
Esto abrirá la aplicación en tu navegador. Puedes realizar operaciones de cálculo haciendo clic en los botones de la calculadora o utilizando las teclas del teclado correspondientes.

## Pruebas

Este proyecto incluye pruebas unitarias para garantizar la integridad y el correcto funcionamiento de sus componentes. Puedes ejecutar las pruebas utilizando el siguiente comando:

```bash
npm test
```
Además de las pruebas unitarias, también se han creado componentes de Storybook para cada componente de la interfaz de usuario. Esto facilita la visualización y el desarrollo de cada componente de forma independiente. Puedes iniciar Storybook ejecutando el siguiente comando:

```bash
npm run storybook
```
