// Access DOM elements
const fileInput = document.getElementById("file-input");
const uploadButton = document.getElementById("upload-button");
const previewContainer = document.getElementById("preview-container");

// File input change event
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    // Load the image as a data URL
    reader.onload = () => {
      previewContainer.innerHTML = `<img src="${reader.result}" alt="Preview" style="max-width: 100%; height: auto;">`;

      // Store the original photo in localStorage
      localStorage.setItem("originalPhotoSrc", reader.result);
    };

    reader.readAsDataURL(file);
  } else {
    previewContainer.innerHTML = "No image selected.";
  }
});

// Upload button click event
uploadButton.addEventListener("click", () => {
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an image before uploading.");
    return;
  }

  // Simulate an upload and result generation process
  uploadButton.textContent = "Uploading...";
  uploadButton.disabled = true;

  setTimeout(() => {
    uploadButton.textContent = "Upload";
    uploadButton.disabled = false;

    // Simulated result photo (replace with actual AI conversion result later)
    const placeholderResultPhoto = "https://via.placeholder.com/300?text=Ghibli+Style+Photo";
    localStorage.setItem("resultPhotoSrc", placeholderResultPhoto);

    alert("Image uploaded successfully! Redirecting to Results Page...");
    window.location.href = "ResultsPage.html";
  }, 2000);
});