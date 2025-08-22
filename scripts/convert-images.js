#!/usr/bin/env node

/**
 * Image Conversion Script for GoNexture
 * Converts images to modern formats (WebP) for better performance
 * 
 * Note: This script provides instructions for manual conversion
 * For automated conversion, you would need to install sharp or imagemin
 */

const fs = require('fs');
const path = require('path');

console.log('🖼️  Image Optimization Guide for GoNexture');
console.log('==========================================');

const srcDir = path.join(__dirname, '..', 'src');
const publicDir = path.join(__dirname, '..', 'public');

// Function to find all images
const findImages = (dir, images = []) => {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      findImages(fullPath, images);
    } else if (/\.(png|jpg|jpeg|gif)$/i.test(item.name)) {
      const stats = fs.statSync(fullPath);
      images.push({
        path: fullPath,
        relativePath: path.relative(path.join(__dirname, '..'), fullPath),
        size: (stats.size / 1024).toFixed(2) + ' KB',
        name: item.name
      });
    }
  });
  
  return images;
};

const images = [
  ...findImages(srcDir),
  ...findImages(publicDir)
];

if (images.length === 0) {
  console.log('✅ No images found that need optimization.');
  process.exit(0);
}

console.log(`\n📸 Found ${images.length} images:`);
images.forEach(img => {
  console.log(`   • ${img.relativePath} (${img.size})`);
});

console.log('\n🚀 Optimization Recommendations:');
console.log('=================================');

console.log('\n1. Convert to WebP format:');
console.log('   Modern browsers support WebP, which offers 25-35% better compression');
images.forEach(img => {
  const webpName = img.name.replace(/\.(png|jpg|jpeg|gif)$/i, '.webp');
  console.log(`   • ${img.name} → ${webpName}`);
});

console.log('\n2. Automatic Conversion (Install sharp):');
console.log('   npm install --save-dev sharp');
console.log('   Then use this script to auto-convert images');

console.log('\n3. Online Tools (Quick option):');
console.log('   • squoosh.app - Google\'s image optimization tool');
console.log('   • tinypng.com - PNG compression');
console.log('   • webp-converter.com - Convert to WebP');

console.log('\n4. Image Component Enhancement:');
console.log('   Update your components to use <picture> element for modern formats:');
console.log(`
   <picture>
     <source srcSet="image.webp" type="image/webp" />
     <source srcSet="image.jpg" type="image/jpeg" />
     <img src="image.jpg" alt="Description" width="..." height="..." />
   </picture>
`);

console.log('\n5. Performance Impact:');
const totalSizeKB = images.reduce((sum, img) => sum + parseFloat(img.size), 0);
const estimatedSavings = (totalSizeKB * 0.3).toFixed(2); // 30% average savings
console.log(`   • Current total: ${totalSizeKB.toFixed(2)} KB`);
console.log(`   • Estimated savings: ${estimatedSavings} KB (30%)`);
console.log(`   • Lighthouse score improvement: +2-5 points`);

// Create a simple component template for optimized images
const createOptimizedImageComponent = () => {
  const componentContent = `import React from 'react';

/**
 * OptimizedImage Component
 * Automatically serves WebP when supported, fallback to original format
 */
const OptimizedImage = ({ 
  src, 
  webpSrc, 
  alt, 
  width, 
  height, 
  className = '',
  loading = 'lazy',
  ...props 
}) => {
  // Generate WebP path if not provided
  const webpPath = webpSrc || src.replace(/\\.(png|jpg|jpeg|gif)$/i, '.webp');
  
  return (
    <picture className={className}>
      <source srcSet={webpPath} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;

// Usage example:
// <OptimizedImage
//   src="/images/hero.jpg"
//   alt="Hero image"
//   width={800}
//   height={600}
//   className="w-full h-auto"
// />
`;

  const componentPath = path.join(srcDir, 'components', 'OptimizedImage.jsx');
  
  try {
    fs.writeFileSync(componentPath, componentContent);
    console.log(`\n✅ Created OptimizedImage component at: ${path.relative(path.join(__dirname, '..'), componentPath)}`);
  } catch (error) {
    console.log('\n⚠ Could not create OptimizedImage component');
  }
};

console.log('\n6. Next Steps:');
console.log('   1. Convert images to WebP format');
console.log('   2. Update image references in components');
console.log('   3. Use the OptimizedImage component for new images');
console.log('   4. Test in different browsers');
console.log('   5. Measure performance improvement');

// Offer to create the optimized image component
console.log('\n🛠️  Would you like to create an OptimizedImage component?');
console.log('   This component will automatically serve WebP when supported.');

// For now, just create it automatically
createOptimizedImageComponent();

console.log('\n📊 Manual Conversion Example:');
console.log('   If you have ImageMagick installed:');
images.slice(0, 2).forEach(img => {
  const webpPath = img.path.replace(/\.(png|jpg|jpeg|gif)$/i, '.webp');
  console.log(`   convert "${img.path}" "${webpPath}"`);
});

console.log('\n✨ After optimization, re-run Lighthouse to see improvements!');
console.log('   Expected improvements:');
console.log('   • Performance: +2-5 points');
console.log('   • "Serve images in next-gen formats" warning: FIXED');
console.log('   • Faster LCP (Largest Contentful Paint)');
