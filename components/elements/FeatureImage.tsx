'use client'

import { useState, useEffect } from 'react'

interface FeatureImageProps {
  serviceSlug: string;
  index: number;
  feature: string;
}

export default function FeatureImage({ serviceSlug, index, feature }: FeatureImageProps) {
  // Use a more specific state structure to track everything clearly
  const [imageState, setImageState] = useState({
    currentSrc: `/assets/img/service/service_features/${serviceSlug}/${index + 1}.svg`,
    fallbackStep: 0
  });

  // Reset image state when serviceSlug or index changes (e.g., navigating between services)
  useEffect(() => {
    setImageState({
      currentSrc: `/assets/img/service/service_features/${serviceSlug}/${index + 1}.svg`,
      fallbackStep: 0
    });
  }, [serviceSlug, index]);

  // Define the fallback logic separately from the event handler
  const getNextFallbackSrc = () => {
    if (imageState.fallbackStep === 0) {
      // First fallback: Try default feature image
      return `/assets/img/service/service_features/default-feature-${(index % 6) + 1}.svg`;
    } else {
      // Second fallback: Use service-specific generic images
      const fallbackImages = [
        'responsive-animate.svg',
        'web_d.svg',
        'Ai_agent.svg',
        'uiux_graphic.svg',
        'brand_identity.svg',
        'marketing_seo.svg',
      ];
      return `/assets/img/service/${fallbackImages[index % 6]}`;
    }
  };

  const handleImageError = () => {
    // If we've already tried both fallbacks, do nothing more
    if (imageState.fallbackStep >= 2) return;

    // Get the next fallback source and increment the fallback step counter
    const nextSrc = getNextFallbackSrc();
    setImageState(prev => ({
      currentSrc: nextSrc,
      fallbackStep: prev.fallbackStep + 1
    }));
  };

  return (
    <img
      // Force React to create a new image element when the source changes
      key={`${serviceSlug}-${index}-${imageState.fallbackStep}`}
      src={imageState.currentSrc}
      alt={feature}
      onError={handleImageError}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
}
