import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';

import fs from 'fs';

// Configure Cloudinary using the keys from .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImage(filePath) {
  if (!filePath) {
    console.error('❌ Error: Please provide a file path as an argument.');
    console.log('Usage: node upload_to_cloudinary.js <path_to_image>');
    process.exit(1);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Error: File "${filePath}" was not found in the current directory.`);
    console.log('Please make sure you have saved your image in this folder first.');
    process.exit(1);
  }

  console.log(`Uploading ${filePath} to Cloudinary...`);

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'vijayasha_family', // Organization folder on cloudinary
    });

    console.log('\n✅ Upload Successful!');
    console.log('---------------------------');
    console.log(`🔗 Cloudinary URL: ${result.secure_url}`);
    console.log('---------------------------');
    console.log('\nCopy this URL and replace the placeholder src in your App.jsx code.');
  } catch (error) {
    console.error('❌ Upload Failed!');
    console.error(error.message);
  }
}

// Get file path from command line arguments
const imagePath = process.argv[2];
uploadImage(imagePath);
