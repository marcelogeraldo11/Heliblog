# Guía de Despliegue en Netlify

## Configuración para que las imágenes se vean correctamente en Netlify

### 1. Configuración del sitio en Netlify

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `18`

### 2. Variables de entorno (opcional)

Si necesitas configurar variables de entorno específicas:
- `NODE_VERSION=18`

### 3. Estructura de imágenes

Todas las imágenes deben estar en la carpeta `public/` y referenciadas con rutas absolutas:

```markdown
---
title: "Mi Post"
heroImage: "/mi-imagen.webp"  # ✅ Correcto - ruta absoluta
---
```

**❌ Incorrecto:**
```markdown
heroImage: "mi-imagen.webp"     # Sin barra inicial
heroImage: "./mi-imagen.webp"   # Ruta relativa
```

### 4. Formatos de imagen recomendados

- **WebP**: Mejor compresión y calidad (recomendado)
- **PNG**: Para imágenes con transparencia
- **JPG/JPEG**: Para fotografías

### 5. Verificación después del despliegue

1. Verifica que las imágenes se cargan correctamente en:
   - Página principal del blog
   - Posts individuales
   - Miniaturas en la lista de posts

2. Revisa la consola del navegador para errores 404 de imágenes

3. Comprueba que las rutas de las imágenes sean absolutas en el HTML generado

### 6. Solución de problemas comunes

**Problema**: Las imágenes no se cargan
**Solución**: 
- Verifica que las imágenes estén en `public/`
- Asegúrate de que las rutas empiecen con `/`
- Revisa que los nombres de archivo coincidan exactamente (case-sensitive)

**Problema**: Imágenes funcionan en desarrollo pero no en producción
**Solución**:
- Verifica la configuración de `site` en `astro.config.mjs`
- Asegúrate de que Netlify esté configurado correctamente

### 7. Archivos de configuración incluidos

- `netlify.toml`: Configuración principal de Netlify
- `public/_redirects`: Manejo de rutas y assets
- `astro.config.mjs`: Configuración actualizada para Netlify

### 8. Despliegue automático

Una vez configurado, cada push a la rama principal activará automáticamente un nuevo despliegue en Netlify.