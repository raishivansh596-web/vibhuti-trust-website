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
 * Parses all dynamically discovered image files into a structured object grouped by category.
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

  Object.keys(modules).forEach((path) => {
    // Extract category folder name from path: /src/assets/images/{category}/{filename}
    const pathParts = path.split('/');
    const category = pathParts[pathParts.length - 2]?.toLowerCase();
    const filename = pathParts[pathParts.length - 1];

    // Lookup metadata for Hindi title and caption
    const metadata = GALLERY_METADATA[filename] || {};

    // Format clean readable title from filename as fallback
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
      filename: filename
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
  // Return first 'count' images or evenly distributed
  return all.slice(0, count);
};
