import React, { useEffect } from 'react';
import { TRUST_CONFIG } from '../data/contentConfig';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    const fullTitle = `${title} | ${TRUST_CONFIG.name}`;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || TRUST_CONFIG.tagline);
    }
  }, [title, description]);

  return null;
}
