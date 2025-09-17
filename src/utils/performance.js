// Performance optimization utilities

// Debounce function for performance optimization
export function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

// Throttle function for scroll and resize events
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Preload critical resources for better LCP
export function preloadCriticalResources() {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  fontLink.as = 'style';
  fontLink.onload = function() {
    this.onload = null;
    this.rel = 'stylesheet';
  };
  document.head.appendChild(fontLink);
}

// Optimize images with content-visibility
export function optimizeImages() {
  document.querySelectorAll('img').forEach(img => {
    if (!img.style.contentVisibility) {
      img.style.contentVisibility = 'auto';
      if (img.width && img.height) {
        img.style.containIntrinsicSize = `${img.width}px ${img.height}px`;
      }
    }
  });
}

// Optimized scheduler for breaking up long tasks
export function scheduleWork(tasks, options = {}) {
  const { timeSlice = 5, deadline = 16 } = options;
  let taskIndex = 0;
  
  function runTasks(startTime) {
    while (taskIndex < tasks.length && (performance.now() - startTime) < timeSlice) {
      tasks[taskIndex]();
      taskIndex++;
    }
    
    if (taskIndex < tasks.length) {
      if ('scheduler' in window && 'postTask' in window.scheduler) {
        window.scheduler.postTask(() => runTasks(performance.now()));
      } else {
        setTimeout(() => runTasks(performance.now()), 0);
      }
    }
  }
  
  runTasks(performance.now());
}

// Lazy loading observer
export function createLazyObserver(callback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  const observerOptions = { ...defaultOptions, ...options };

  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, observerOptions);
  }

  // Fallback for browsers without IntersectionObserver
  return {
    observe: (element) => {
      // Simple fallback - load immediately
      callback([{ target: element, isIntersecting: true }]);
    },
    unobserve: () => {},
    disconnect: () => {}
  };
}

// Preload critical resources
export function preloadResource(href, as, type = null) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  
  // Add to head
  document.head.appendChild(link);
  
  return link;
}

// Optimize images with modern formats
export function optimizeImage(src, options = {}) {
  const {
    width = null,
    height = null,
    quality = 80,
    format = 'webp',
    fallback = 'jpg'
  } = options;

  // Check if browser supports WebP
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  const useFormat = supportsWebP() ? format : fallback;
  
  // Build optimized URL (this would depend on your image service)
  let optimizedSrc = src;
  const params = new URLSearchParams();
  
  if (width) params.append('w', width);
  if (height) params.append('h', height);
  params.append('q', quality);
  params.append('f', useFormat);
  
  if (params.toString()) {
    optimizedSrc += (src.includes('?') ? '&' : '?') + params.toString();
  }
  
  return optimizedSrc;
}

// Critical CSS injection
export function injectCriticalCSS(css) {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
}

// Font loading optimization
export function optimizeFontLoading() {
  if ('fonts' in document) {
    // Preload critical fonts
    const criticalFonts = [
      { family: 'Inter', weight: '400' },
      { family: 'Inter', weight: '600' }
    ];

    criticalFonts.forEach(font => {
      document.fonts.load(`${font.weight} 16px ${font.family}`);
    });

    // Add class when fonts are loaded
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
}

// Resource hints for better performance
export function addResourceHints() {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
    document.head.appendChild(link);
  });
}

// Performance monitoring
export function measurePerformance() {
  if ('performance' in window && 'getEntriesByType' in performance) {
    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            console.log('LCP:', entry.startTime);
            break;
          case 'first-input':
            console.log('FID:', entry.processingStart - entry.startTime);
            break;
          case 'layout-shift':
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
            }
            break;
        }
      });
    });

    // Observe Core Web Vitals
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.log('Performance monitoring not fully supported');
    }
  }
}

// Service Worker registration
export function registerServiceWorker(swPath = '/sw.js') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(swPath)
        .then((registration) => {
          console.log('SW registered:', registration);
          
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available, notify user
                console.log('New content available, please refresh');
              }
            });
          });
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    });
  }
}

// Bundle size optimization - dynamic imports
export async function loadModule(modulePath) {
  try {
    const module = await import(modulePath);
    return module;
  } catch (error) {
    console.error(`Failed to load module: ${modulePath}`, error);
    return null;
  }
}

// Memory optimization - cleanup functions
export function createCleanupManager() {
  const cleanupFunctions = [];
  
  return {
    add: (cleanupFn) => {
      cleanupFunctions.push(cleanupFn);
    },
    cleanup: () => {
      cleanupFunctions.forEach(fn => {
        try {
          fn();
        } catch (error) {
          console.error('Cleanup error:', error);
        }
      });
      cleanupFunctions.length = 0;
    }
  };
}