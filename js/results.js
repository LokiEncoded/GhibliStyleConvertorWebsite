// Get image data from localStorage
const originalPhotoSrc = localStorage.getItem("originalPhotoSrc");
const resultPhotoSrc = localStorage.getItem("resultPhotoSrc");

// Get the image elements
const originalPhoto = document.getElementById("original-photo");
const resultPhoto = document.getElementById("result-photo");

// Populate the images if data exists
if (originalPhotoSrc) {
  originalPhoto.src = originalPhotoSrc;
} else {
  originalPhoto.alt = "Original photo not available.";
}

if (resultPhotoSrc) {
  resultPhoto.src = resultPhotoSrc;
} else {
  resultPhoto.alt = "Result photo not available.";
}
console.log("Original Photo Data:", originalPhotoSrc);
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function convertToGhibli(originalPhotoSrc) {
  const form = new FormData();
  form.append('image', fs.createReadStream(originalPhotoSrc));

  const response = await axios.post('https://api.deepai.org/api/fast-style-transfer', form, {
    headers: {
      'api-key': '21d9a6fa-8ba2-456e-ad4e-31877fdd94f1',
      ...form.getHeaders(),
    },
  });

  return response.data.output_url; // Returns URL of Ghibli-fied image
}