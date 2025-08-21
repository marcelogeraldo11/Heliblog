// Script para convertir imágenes a WebP
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

// Función para convertir una imagen a WebP
async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Solo procesar JPG y PNG
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
    return;
  }
  
  const fileName = path.basename(filePath, ext);
  const outputPath = path.join(path.dirname(filePath), `${fileName}.webp`);
  
  // Verificar si ya existe la versión WebP
  if (fs.existsSync(outputPath)) {
    console.log(`Ya existe: ${outputPath}`);
    return;
  }
  
  try {
    await sharp(filePath)
      .webp({ quality: 80 }) // Calidad 80% para un buen balance
      .toFile(outputPath);
    
    console.log(`Convertido: ${filePath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error al convertir ${filePath}:`, error);
  }
}

// Procesar todas las imágenes en el directorio public
async function processDirectory() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      await convertToWebP(filePath);
    }
  }
  
  console.log('Conversión completada.');
}

// Ejecutar el script
processDirectory().catch(console.error);