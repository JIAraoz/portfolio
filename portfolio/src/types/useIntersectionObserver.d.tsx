export interface IntersectionObserverOptions {
    threshold?: number | number[]; 
    rootMargin?: string; 
  }

export interface UseIntersectionObserverReturn {
  elementoRef: React.MutableRefObject<HTMLDivElement | null>; // Cambiamos aquí
  isIntersecting: boolean;
}