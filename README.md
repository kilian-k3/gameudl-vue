# GAMEUDL — Catàleg de videojocs

Aplicació web desenvolupada amb Vue 3 per consultar un catàleg de videojocs. Les dades es recuperen de Cloud Firestore i es mostren mitjançant components reutilitzables.

## Tecnologies

- Vue 3
- Vite
- Vue Router
- Firebase Cloud Firestore
- Firebase Hosting

## Funcionalitats

- Pàgina d'inici.
- Catàleg de videojocs carregat des de Firestore.
- Pàgina informativa sobre el projecte.
- Components reutilitzables per mostrar els videojocs.
- Navegació entre pàgines amb Vue Router.
- Gestió dels estats de càrrega, error i catàleg buit.

## Rutes

| Ruta | Descripció |
|---|---|
| `/` | Pàgina d'inici |
| `/catalogo` | Catàleg de videojocs |
| `/acerca-de` | Informació del projecte |

## Instal·lació i execució local

Cal tenir Node.js i npm instal·lats.

1. Clonar el repositori:

   ```bash
   git clone https://github.com/kilian-k3/gameudl-vue.git
   ```

2. Entrar a la carpeta:

   ```bash
   cd gameudl-vue
   ```

3. Instal·lar les dependències:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desenvolupament:

   ```bash
   npm run dev
   ```

5. Generar la versió de producció:

   ```bash
   npm run build
   ```

## Base de dades

Les dades del catàleg es llegeixen des de la col·lecció `videojocs` de Cloud Firestore. Les regles de seguretat del projecte permeten consultar els documents d'aquesta col·lecció i bloquegen les escriptures.

## Desplegament

Aplicació publicada amb Firebase Hosting:

https://gameudl-catalogo.web.app

## Repositori

https://github.com/kilian-k3/gameudl-vue