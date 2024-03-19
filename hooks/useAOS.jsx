import { useEffect } from 'react';
import AOS from 'aos';
import { useIntersectionObserver } from '@react-aria/utils';

export function useAOS(options = {}) {
  const [observer, setObserver] = useIntersectionObserver(() => {});

  useEffect(() => {
    AOS.init(options);

    return () => AOS.refresh();
  }, [options]);

  return {
    observerRef: observer.observeRef,
    observerEntries: observer.observeEntries,
  };
}