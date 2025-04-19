#!/bin/bash

# Create directories if they don't exist
mkdir -p images/art

# Create featured images for hero section
magick -size 800x600 gradient:#6c63ff-#ff6584 -gravity center -pointsize 40 -font "Arial-Bold" -fill white \
  -draw "text 0,0 'Featured Artwork 1'" \
  images/art/featured-1.jpg

magick -size 400x300 gradient:#ff6584-#ffcb57 -gravity center -pointsize 30 -font "Arial-Bold" -fill white \
  -draw "text 0,0 'Featured Artwork 2'" \
  images/art/featured-2.jpg

magick -size 400x300 gradient:#ffcb57-#36d1dc -gravity center -pointsize 30 -font "Arial-Bold" -fill white \
  -draw "text 0,0 'Featured Artwork 3'" \
  images/art/featured-3.jpg

magick -size 800x300 gradient:#36d1dc-#6c63ff -gravity center -pointsize 40 -font "Arial-Bold" -fill white \
  -draw "text 0,0 'Featured Artwork 4'" \
  images/art/featured-4.jpg

# Create sketch images
for i in {1..6}; do
  magick -size 600x800 gradient:#e0e0e0-#ffffff -gravity center -pointsize 40 -font "Arial-Bold" -fill black \
    -draw "text 0,-100 'Sketch $i'" \
    -draw "text 0,0 'Graphite on Paper'" \
    -draw "text 0,100 '2023'" \
    images/art/sketch-$i.jpg
done

# Create painting images
for i in {1..6}; do
  magick -size 600x800 gradient:#ffcb57-#ff6584 -gravity center -pointsize 40 -font "Arial-Bold" -fill white \
    -draw "text 0,-100 'Painting $i'" \
    -draw "text 0,0 'Acrylic on Canvas'" \
    -draw "text 0,100 '2023'" \
    images/art/painting-$i.jpg
done

# Create craft images
for i in {1..5}; do
  magick -size 600x800 gradient:#36d1dc-#6c63ff -gravity center -pointsize 40 -font "Arial-Bold" -fill white \
    -draw "text 0,-100 'Craft $i'" \
    -draw "text 0,0 'Mixed Media'" \
    -draw "text 0,100 '2023'" \
    images/art/craft-$i.jpg
done

# Create digital art images
for i in {1..4}; do
  magick -size 800x600 gradient:#6c63ff-#ff6584 -gravity center -pointsize 40 -font "Arial-Bold" -fill white \
    -draw "text 0,-100 'Digital Art $i'" \
    -draw "text 0,0 'Digital Illustration'" \
    -draw "text 0,100 '2023'" \
    images/art/digital-$i.jpg
done

# Create featured project image
magick -size 800x600 gradient:#ff6584-#ffcb57 -gravity center -pointsize 40 -font "Arial-Bold" -fill white \
  -draw "text 0,0 'Featured Art Project'" \
  images/art/featured-project.jpg

# Create Instagram gallery images
for i in {1..6}; do
  magick -size 300x300 gradient:#6c63ff-#ff6584 -gravity center -pointsize 30 -font "Arial-Bold" -fill white \
    -draw "text 0,0 'Instagram Post $i'" \
    images/art/insta-$i.jpg
done

echo "Art portfolio images created successfully!"
