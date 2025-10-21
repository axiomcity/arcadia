#/bash/bin

# Convert to WEBP
for i in {1..23}; do
cwebp -mt $i.jpg -o $i && echo "image $i"
done

echo "Terminé" && exit 0
