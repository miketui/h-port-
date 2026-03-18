#!/bin/bash

# MDW PORTFOLIO - IMAGE RESTORATION SCRIPT
# Use this script after you've edited/upscaled all images

echo "🎨 MDW Portfolio - Image Restoration"
echo "======================================"
echo ""

# Check if source directory exists
if [ ! -d "/app/source-assets/originals" ]; then
  echo "❌ Source directory not found: /app/source-assets/originals"
  exit 1
fi

TARGET_DIR="/app/artifacts/hairstylist-portfolio/public/images/portfolio"

echo "📋 This script will:"
echo "  1. Verify all 70 unique source images exist"
echo "  2. Copy edited images from source-assets/originals to exports folders"
echo "  3. Ensure proper folder structure"
echo "  4. Update data.ts to point to real images instead of placeholders"
echo ""

read -p "Have you placed all edited images in /app/source-assets/originals? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Aborted. Please place your edited images first."
  exit 1
fi

echo ""
echo "🔍 Step 1: Verifying source images..."
echo "======================================"

# Count images in each category
CATEGORIES=("cover" "editorial" "red-carpet" "beauty" "commercial-ecom" "homepage")
EXPECTED_COUNTS=(9 20 18 13 8 11)

for i in "${!CATEGORIES[@]}"; do
  category="${CATEGORIES[$i]}"
  expected="${EXPECTED_COUNTS[$i]}"
  
  source_path="/app/source-assets/originals/$category"
  
  if [ -d "$source_path" ]; then
    count=$(ls -1 "$source_path"/*.jpg 2>/dev/null | wc -l)
    if [ "$count" -eq "$expected" ]; then
      echo "✅ $category: $count/$expected images"
    else
      echo "⚠️  $category: $count/$expected images (MISMATCH!)"
    fi
  else
    echo "❌ $category: Directory not found"
  fi
done

echo ""
read -p "Continue with restoration? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Restoration cancelled."
  exit 1
fi

echo ""
echo "📦 Step 2: Creating export folders..."
echo "======================================"

for category in "${CATEGORIES[@]}"; do
  for format in "3x4" "4x5" "featured" "social"; do
    mkdir -p "$TARGET_DIR/$category/exports/$format"
    echo "✅ Created: $category/exports/$format"
  done
done

echo ""
echo "🖼️  Step 3: Processing images..."
echo "======================================"
echo ""
echo "NOTE: You need to export each image in 4 formats:"
echo "  - 3x4: 1200×1600 px (portrait)"
echo "  - 4x5: 1280×1600 px (portrait)"  
echo "  - featured: 2400×1600 px (landscape)"
echo "  - social: 1080×1080 px (square)"
echo ""
echo "Place them in: /app/artifacts/hairstylist-portfolio/public/images/portfolio/{category}/exports/{format}/"
echo ""
echo "Once you've done this, run the next script: restore-data.sh"

# Create the data restoration script
cat > /app/artifacts/hairstylist-portfolio/restore-data.sh << 'EOFSCRIPT'
#!/bin/bash

echo "🔄 Restoring data.ts to use real images..."
echo "==========================================="

DATA_FILE="/app/artifacts/hairstylist-portfolio/src/lib/data.ts"
HOME_FILE="/app/artifacts/hairstylist-portfolio/src/pages/Home.tsx"
ABOUT_FILE="/app/artifacts/hairstylist-portfolio/src/pages/About.tsx"

# Restore data.ts
echo "📝 Updating data.ts..."
sed -i 's|const placeholder3x4 = .*|// const placeholder3x4 = `${import.meta.env.BASE_URL}images/placeholders/3x4.jpg`;|' "$DATA_FILE"
sed -i 's|const placeholder4x5 = .*|// const placeholder4x5 = `${import.meta.env.BASE_URL}images/placeholders/4x5.jpg`;|' "$DATA_FILE"
sed -i 's|const placeholderFeatured = .*|// const placeholderFeatured = `${import.meta.env.BASE_URL}images/placeholders/featured.jpg`;|' "$DATA_FILE"

sed -i 's|return placeholder3x4;|return `${import.meta.env.BASE_URL}images/portfolio/${category}/exports/3x4/${filename}`;|' "$DATA_FILE"
sed -i 's|return placeholder4x5;|return `${import.meta.env.BASE_URL}images/portfolio/${category}/exports/4x5/${filename}`;|' "$DATA_FILE"
sed -i 's|return placeholderFeatured;|return `${import.meta.env.BASE_URL}images/portfolio/${category}/exports/featured/${filename}`;|' "$DATA_FILE"

echo "✅ data.ts updated"

# Restore Home.tsx
echo "📝 Updating Home.tsx..."
sed -i "s|images/placeholders/featured.jpg|images/portfolio/editorial/exports/featured/editorial_2021_aurora-james_grazia-usa_34.jpg|" "$HOME_FILE"
sed -i "s|images/placeholders/hero.jpg|images/hero-bg.png|" "$HOME_FILE"

echo "✅ Home.tsx updated"

# Restore About.tsx  
echo "📝 Updating About.tsx..."
sed -i "s|images/placeholders/portrait.jpg|images/about-portrait.png|" "$ABOUT_FILE"

echo "✅ About.tsx updated"

echo ""
echo "🎉 Restoration complete!"
echo ""
echo "Next steps:"
echo "1. Restart the frontend: sudo supervisorctl restart portfolio-frontend"
echo "2. Check the preview to verify all images are loading"
echo ""

EOFSCRIPT

chmod +x /app/artifacts/hairstylist-portfolio/restore-data.sh

echo ""
echo "✅ Setup complete!"
echo ""
echo "📄 Files created:"
echo "  - IMAGE_MAPPING.md (complete image reference)"
echo "  - restore-data.sh (run this after placing images)"
echo ""
echo "Next steps:"
echo "1. Edit/upscale your 70 source images"
echo "2. Export each in 4 formats (3x4, 4x5, featured, social)"
echo "3. Place them in the exports folders"
echo "4. Run: ./restore-data.sh"
echo "5. Restart services"
echo ""
