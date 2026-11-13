# Alfa Hoteles

Sitio de Alfa Hoteles, una colección de hoteles en Mérida, Yucatán. Está construido con Astro y se publica en GitHub Pages.

## Desarrollo local

```sh
npm install
npm run astro -- dev --background
```

El servidor se gestiona con `npm run astro -- dev status`, `npm run astro -- dev logs` y `npm run astro -- dev stop`.

## Blog

La portada muestra los tres artículos más recientes y `/blog/` muestra el índice completo. Antes de conectar Sanity, los seis artículos existentes se listan desde `src/data/posts.ts` y se leen en el sitio original.

Para que la dueña pueda publicar, editar, retirar o borrar artículos desde un panel:

1. Crear un proyecto y dataset público `production` en Sanity, con acceso de edición para la dueña.
2. Registrar `cms/schemaTypes/post.ts` en el `schema.types` de Sanity Studio y desplegar el Studio.
3. Copiar el Project ID a `SANITY_PROJECT_ID` en `.env` para desarrollo y a la variable `SANITY_PROJECT_ID` del repositorio de GitHub. `SANITY_DATASET` es opcional y usa `production` por defecto.
4. Migrar los seis artículos actuales al Studio. Al definir el Project ID, Astro toma los artículos publicados desde Sanity y genera sus páginas `/blog/[slug]/`.
5. Configurar un webhook de Sanity para cambios publicados de tipo `post` (crear, actualizar y borrar). Debe enviar `POST` a `https://api.github.com/repos/OWNER/REPO/dispatches`, con encabezados `Authorization: Bearer TOKEN`, `Accept: application/vnd.github+json` y cuerpo `{"event_type":"sanity-published"}`. El token de GitHub debe tener permiso para despachar eventos en ese repositorio. Así se recompila GitHub Pages al publicar o retirar un artículo.

No actives `SANITY_PROJECT_ID` antes de migrar los artículos: el índice mostrará únicamente los documentos publicados en Sanity.

## Publicación

Cada cambio enviado a `main` ejecuta el flujo de `.github/workflows/deploy.yml`, que compila el sitio y lo publica en GitHub Pages.

En la configuración del repositorio, selecciona **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Sitio: https://manuehh2.github.io/alfahotelesPrueba/
