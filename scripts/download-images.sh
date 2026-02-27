#!/bin/bash
# Download all images from WordPress and convert to WebP
set -e

IMG_DIR="$(dirname "$0")/../public/images"
TMP_DIR="$(dirname "$0")/../.tmp-images"
mkdir -p "$IMG_DIR" "$TMP_DIR"

BASE="https://manaakumal.com/wp-content/uploads"

echo "=== Downloading images from WordPress ==="

# Hero/header images
curl -skL "$BASE/2025/06/Clubhouse-03-header.jpg" -o "$TMP_DIR/hero.jpg"
curl -skL "$BASE/2025/06/Entrance_dark.jpg" -o "$TMP_DIR/contact-bg.jpg"

# Logo
curl -skL "$BASE/2025/06/logo-white-simple.png" -o "$IMG_DIR/logo.png"

# Master Plan
curl -skL "$BASE/2026/01/Master-Plan-Top-Marketing-no-hotel-scaled.jpg" -o "$TMP_DIR/masterplan.jpg"

# About image (use overhead render)
curl -skL "$BASE/2025/06/overhead1733.jpg" -o "$TMP_DIR/about.jpg"

# Gallery images (21 square images)
curl -skL "$BASE/2025/06/Clubhouse-01-sq.jpg" -o "$TMP_DIR/gallery-01.jpg"
curl -skL "$BASE/2025/06/Villa-01-sq.jpg" -o "$TMP_DIR/gallery-02.jpg"
curl -skL "$BASE/2025/06/Spa_01-sq.jpg" -o "$TMP_DIR/gallery-03.jpg"
curl -skL "$BASE/2025/06/Sports-Complex-sq.jpg" -o "$TMP_DIR/gallery-04.jpg"
curl -skL "$BASE/2025/06/Wine-Cheese-Bar_01-sq.jpg" -o "$TMP_DIR/gallery-05.jpg"
curl -skL "$BASE/2025/06/Clubhouse-02-sq.jpg" -o "$TMP_DIR/gallery-06.jpg"
curl -skL "$BASE/2025/06/Villa-Interior-01-sq.jpg" -o "$TMP_DIR/gallery-07.jpg"
curl -skL "$BASE/2025/06/Yoga-01-sq.jpg" -o "$TMP_DIR/gallery-08.jpg"
curl -skL "$BASE/2025/06/Amphitheater-sq.jpg" -o "$TMP_DIR/gallery-09.jpg"
curl -skL "$BASE/2025/06/Wine-Cheese-Bar_02-sq.jpg" -o "$TMP_DIR/gallery-10.jpg"
curl -skL "$BASE/2025/06/Clubhouse-05-sq.jpg" -o "$TMP_DIR/gallery-11.jpg"
curl -skL "$BASE/2025/06/Villa-Interior-02-sq.jpg" -o "$TMP_DIR/gallery-12.jpg"
curl -skL "$BASE/2025/06/Nest-sq.jpg" -o "$TMP_DIR/gallery-13.jpg"
curl -skL "$BASE/2025/06/Birds-Tower-sq.jpg" -o "$TMP_DIR/gallery-14.jpg"
curl -skL "$BASE/2025/06/Clubhouse-Topview-sq.jpg" -o "$TMP_DIR/gallery-15.jpg"
curl -skL "$BASE/2025/06/Art-Walk-sq.jpg" -o "$TMP_DIR/gallery-16.jpg"
curl -skL "$BASE/2025/06/Clubhouse-06-sq.jpg" -o "$TMP_DIR/gallery-17.jpg"
curl -skL "$BASE/2025/06/Spa_02-sq.jpg" -o "$TMP_DIR/gallery-18.jpg"
curl -skL "$BASE/2025/06/Spa_04-sq.jpg" -o "$TMP_DIR/gallery-19.jpg"
curl -skL "$BASE/2025/06/Yoga-02-sq.jpg" -o "$TMP_DIR/gallery-20.jpg"
curl -skL "$BASE/2025/06/dark.jpg" -o "$TMP_DIR/gallery-21.jpg"

# Lifestyle section images (reuse some gallery images)
curl -skL "$BASE/2025/06/Spa_01-sq.jpg" -o "$TMP_DIR/lifestyle-wellness.jpg"
curl -skL "$BASE/2025/06/Sports-Complex-sq.jpg" -o "$TMP_DIR/lifestyle-sports.jpg"
curl -skL "$BASE/2025/06/Wine-Cheese-Bar_01-sq.jpg" -o "$TMP_DIR/lifestyle-dining.jpg"
curl -skL "$BASE/2025/06/Birds-Tower-sq.jpg" -o "$TMP_DIR/lifestyle-observatory.jpg"
curl -skL "$BASE/2025/06/Yoga-01-sq.jpg" -o "$TMP_DIR/lifestyle-yoga.jpg"
curl -skL "$BASE/2025/06/Art-Walk-sq.jpg" -o "$TMP_DIR/lifestyle-art.jpg"

echo "=== Converting to WebP ==="

# Hero: 1920px wide, quality 80
cwebp -q 80 -resize 1920 0 "$TMP_DIR/hero.jpg" -o "$IMG_DIR/hero.webp"

# Contact bg: 1920px wide
cwebp -q 75 -resize 1920 0 "$TMP_DIR/contact-bg.jpg" -o "$IMG_DIR/contact-bg.webp"

# Master plan: 2400px wide
cwebp -q 82 -resize 2400 0 "$TMP_DIR/masterplan.jpg" -o "$IMG_DIR/masterplan.webp"

# About: 800px wide
cwebp -q 80 -resize 800 0 "$TMP_DIR/about.jpg" -o "$IMG_DIR/about.webp"

# Gallery: 800x800
for i in $(seq -w 1 21); do
  cwebp -q 78 -resize 800 0 "$TMP_DIR/gallery-$i.jpg" -o "$IMG_DIR/gallery-$i.webp"
done

# Lifestyle: 600px wide
for name in wellness sports dining observatory yoga art; do
  cwebp -q 78 -resize 600 0 "$TMP_DIR/lifestyle-$name.jpg" -o "$IMG_DIR/lifestyle-$name.webp"
done

echo "=== Done! ==="
echo "Image sizes:"
ls -lh "$IMG_DIR"/*.webp "$IMG_DIR"/*.png 2>/dev/null | awk '{print $5, $9}'

# Cleanup temp
rm -rf "$TMP_DIR"

echo ""
echo "Total image payload:"
du -sh "$IMG_DIR"
