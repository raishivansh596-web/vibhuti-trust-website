/**
 * DYNAMIC LOCAL IMAGE LOADER FOR VIBHUTHI NARAYAN MEMORIAL TRUST
 * 
 * HOW THIS WORKS FOR TRUST ADMINISTRATORS:
 * You do NOT need to write any code to add new photos to the website!
 * Simply drop your photograph files (.jpg, .png, .webp, .svg) into the respective folders under:
 *   src/assets/images/education/
 *   src/assets/images/healthcare/
 *   src/assets/images/livelihood/
 *   src/assets/images/environment/
 *   src/assets/images/events/
 * 
 * Vite will automatically detect all photos placed in these folders and render them in the
 * Gallery grid and Program sections instantly.
 */

import { GALLERY_METADATA } from '../data/galleryMetadata';

// Dynamically import all images under src/assets/images/*/*
const modules = import.meta.glob('/src/assets/images/*/*.{png,jpg,jpeg,webp,svg,gif,PNG,JPG,JPEG}', {
  eager: true,
  import: 'default'
});

const categoryLabels = {
  education: 'शिक्षा सहायता',
  healthcare: 'स्वास्थ्य शिविर',
  livelihood: 'सिलाई व आजीविका',
  environment: 'वृक्षारोपण व पर्यावरण',
  events: 'कार्यक्रम व वितरण'
};

/**
 * Reads user-uploaded custom images stored in browser localStorage.
 */
export const getCustomUploadedImages = () => {
  try {
    const data = localStorage.getItem('vnmt_uploaded_photos');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading custom photos from localStorage', e);
    return [];
  }
};

/**
 * Saves a new uploaded image to browser localStorage.
 */
export const saveUploadedImage = (newImageObj) => {
  try {
    const existing = getCustomUploadedImages();
    const updated = [newImageObj, ...existing];
    localStorage.setItem('vnmt_uploaded_photos', JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error saving photo to localStorage', e);
    throw e;
  }
};

/**
 * Deletes a custom uploaded image from localStorage by ID.
 */
export const deleteUploadedImage = (imageId) => {
  try {
    const existing = getCustomUploadedImages();
    const updated = existing.filter(img => img.id !== imageId);
    localStorage.setItem('vnmt_uploaded_photos', JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error deleting photo from localStorage', e);
    return [];
  }
};

/**
 * Parses all dynamically discovered image files into a structured object grouped by category,
 * combining built-in static photos with user-uploaded custom photos.
 */
export const getLocalImages = () => {
  const imagesByCategory = {
    education: [],
    healthcare: [],
    livelihood: [],
    environment: [],
    events: []
  };

  const allImages = [];

  // First, add custom uploaded images (so they appear at the very top!)
  const customImages = getCustomUploadedImages();
  customImages.forEach((img) => {
    const category = img.category || 'events';
    const formattedImg = {
      ...img,
      categoryHindi: categoryLabels[category] || category,
      isCustom: true
    };
    if (imagesByCategory[category]) {
      imagesByCategory[category].push(formattedImg);
    }
    allImages.push(formattedImg);
  });

  // Second, add static repository images
  Object.keys(modules).forEach((path) => {
    const pathParts = path.split('/');
    const category = pathParts[pathParts.length - 2]?.toLowerCase();
    const filename = pathParts[pathParts.length - 1];

    const metadata = GALLERY_METADATA[filename] || {};

    const fallbackTitle = filename
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const imageObj = {
      id: path,
      src: modules[path],
      category: category,
      categoryHindi: categoryLabels[category] || category,
      title: metadata.title || fallbackTitle,
      caption: metadata.caption || "",
      filename: filename,
      isCustom: false
    };

    if (imagesByCategory[category]) {
      imagesByCategory[category].push(imageObj);
    }
    allImages.push(imageObj);
  });

  return {
    byCategory: imagesByCategory,
    all: allImages
  };
};

/**
 * Returns a featured set of 3-4 images across various categories for the Home page.
 */
export const getFeaturedImages = (count = 4) => {
  const { all } = getLocalImages();
  if (all.length === 0) return [];
  return all.slice(0, count);
};
