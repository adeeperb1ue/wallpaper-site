const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const sizeOf = require("image-size")

const inputDir = path.join(__dirname, '../image-manager/images/'); // Replace with your input directory
const outputDir = path.join(__dirname, '../image-manager/thumbnails/'); // Replace with your output directory

const resizeImages = async () => {
  try {
    const files = await fs.promises.readdir(inputDir);

    for (const file of files) {
        console.log(file);
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      const dimensions = sizeOf(inputPath);
      console.log(dimensions);

      await sharp(inputPath)
        .resize(dimensions.width / 2, dimensions.height / 2) // Set your desired width and height
        .toFile(outputPath);

    //   console.log(`Resized ${file}`);
    }
  } catch (err) {
    console.error('Error resizing images:', err);
  }
};

resizeImages();