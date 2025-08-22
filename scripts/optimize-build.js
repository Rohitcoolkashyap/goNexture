#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting build optimization...');

const buildDir = path.join(__dirname, '..', 'build');
const staticDir = path.join(buildDir, 'static');

// Function to get file size in KB
const getFileSize = (filePath) => {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
};

// Function to optimize CSS files
const optimizeCSS = () => {
  console.log('📄 Optimizing CSS files...');
  
  const cssDir = path.join(staticDir, 'css');
  if (!fs.existsSync(cssDir)) return;
  
  const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
  
  cssFiles.forEach(file => {
    const filePath = path.join(cssDir, file);
    const originalSize = getFileSize(filePath);
    
    console.log(`   ✓ Processing ${file} (${originalSize} KB)`);
    
    // Create gzipped version
    try {
      execSync(`gzip -k "${filePath}"`, { stdio: 'ignore' });
      const gzSize = getFileSize(`${filePath}.gz`);
      console.log(`     → Gzipped: ${gzSize} KB`);
    } catch (error) {
      console.log(`     ⚠ Could not create gzip for ${file}`);
    }
  });
};

// Function to optimize JS files
const optimizeJS = () => {
  console.log('⚡ Optimizing JavaScript files...');
  
  const jsDir = path.join(staticDir, 'js');
  if (!fs.existsSync(jsDir)) return;
  
  const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
  
  jsFiles.forEach(file => {
    const filePath = path.join(jsDir, file);
    const originalSize = getFileSize(filePath);
    
    console.log(`   ✓ Processing ${file} (${originalSize} KB)`);
    
    // Create gzipped version
    try {
      execSync(`gzip -k "${filePath}"`, { stdio: 'ignore' });
      const gzSize = getFileSize(`${filePath}.gz`);
      console.log(`     → Gzipped: ${gzSize} KB`);
    } catch (error) {
      console.log(`     ⚠ Could not create gzip for ${file}`);
    }
  });
};

// Function to create cache manifest
const createCacheManifest = () => {
  console.log('📋 Creating cache manifest...');
  
  const manifest = {
    version: Date.now(),
    files: {}
  };
  
  // Recursively get all files in build directory
  const getFiles = (dir, relativeTo = buildDir) => {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const relativePath = path.relative(relativeTo, fullPath);
      
      if (fs.statSync(fullPath).isDirectory()) {
        files.push(...getFiles(fullPath, relativeTo));
      } else {
        files.push(relativePath);
      }
    });
    
    return files;
  };
  
  const allFiles = getFiles(buildDir);
  
  allFiles.forEach(file => {
    const fullPath = path.join(buildDir, file);
    const stats = fs.statSync(fullPath);
    
    manifest.files[file] = {
      size: stats.size,
      modified: stats.mtime.toISOString()
    };
  });
  
  fs.writeFileSync(
    path.join(buildDir, 'cache-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log(`   ✓ Created manifest with ${Object.keys(manifest.files).length} files`);
};

// Function to update service worker with build info
const updateServiceWorker = () => {
  console.log('🔧 Updating service worker...');
  
  const swPath = path.join(buildDir, 'sw.js');
  if (!fs.existsSync(swPath)) {
    console.log('   ⚠ Service worker not found, skipping...');
    return;
  }
  
  let swContent = fs.readFileSync(swPath, 'utf8');
  
  // Update cache version with timestamp
  const newVersion = `v${Date.now()}`;
  swContent = swContent.replace(
    /const CACHE_NAME = '[^']+';/,
    `const CACHE_NAME = 'gonexture-${newVersion}';`
  );
  swContent = swContent.replace(
    /const STATIC_CACHE = '[^']+';/,
    `const STATIC_CACHE = 'gonexture-static-${newVersion}';`
  );
  swContent = swContent.replace(
    /const DYNAMIC_CACHE = '[^']+';/,
    `const DYNAMIC_CACHE = 'gonexture-dynamic-${newVersion}';`
  );
  
  fs.writeFileSync(swPath, swContent);
  console.log(`   ✓ Updated service worker with version ${newVersion}`);
};

// Function to optimize images (if imagemin is available)
const optimizeImages = () => {
  console.log('🖼️  Checking for image optimization...');
  
  try {
    // Check if we have any images to optimize
    const mediaDir = path.join(staticDir, 'media');
    if (fs.existsSync(mediaDir)) {
      const imageFiles = fs.readdirSync(mediaDir).filter(file => 
        /\.(png|jpg|jpeg|gif|svg)$/i.test(file)
      );
      
      if (imageFiles.length > 0) {
        console.log(`   ✓ Found ${imageFiles.length} images`);
        imageFiles.forEach(file => {
          const filePath = path.join(mediaDir, file);
          const size = getFileSize(filePath);
          console.log(`     → ${file}: ${size} KB`);
        });
      }
    }
    
    console.log('   ℹ For better image optimization, consider adding imagemin to your build process');
  } catch (error) {
    console.log('   ⚠ Could not analyze images');
  }
};

// Function to analyze bundle size
const analyzeBundleSize = () => {
  console.log('📊 Analyzing bundle sizes...');
  
  const jsDir = path.join(staticDir, 'js');
  const cssDir = path.join(staticDir, 'css');
  
  let totalJS = 0;
  let totalCSS = 0;
  
  if (fs.existsSync(jsDir)) {
    const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
    jsFiles.forEach(file => {
      const size = parseFloat(getFileSize(path.join(jsDir, file)));
      totalJS += size;
    });
  }
  
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
    cssFiles.forEach(file => {
      const size = parseFloat(getFileSize(path.join(cssDir, file)));
      totalCSS += size;
    });
  }
  
  console.log(`   ✓ Total JavaScript: ${totalJS.toFixed(2)} KB`);
  console.log(`   ✓ Total CSS: ${totalCSS.toFixed(2)} KB`);
  console.log(`   ✓ Total Assets: ${(totalJS + totalCSS).toFixed(2)} KB`);
  
  // Recommendations
  if (totalJS > 500) {
    console.log('   ⚠ JavaScript bundle is large. Consider code splitting.');
  }
  if (totalCSS > 100) {
    console.log('   ⚠ CSS bundle is large. Consider removing unused styles.');
  }
};

// Main optimization process
const main = () => {
  try {
    if (!fs.existsSync(buildDir)) {
      console.error('❌ Build directory not found. Run "npm run build" first.');
      process.exit(1);
    }
    
    optimizeCSS();
    optimizeJS();
    optimizeImages();
    createCacheManifest();
    updateServiceWorker();
    analyzeBundleSize();
    
    console.log('✅ Build optimization completed successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('• Deploy the build/ directory to your hosting provider');
    console.log('• Configure server to serve .gz files when available');
    console.log('• Set up proper cache headers for static assets');
    console.log('• Monitor Core Web Vitals in production');
    
  } catch (error) {
    console.error('❌ Optimization failed:', error.message);
    process.exit(1);
  }
};

main();
