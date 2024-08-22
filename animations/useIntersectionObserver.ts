export const intersectionObserver = (
  item: Element,
  options: IntersectionObserverInit,
  callback: (isIntersecting: boolean) => void
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting);
    });
  }, options);

  observer.observe(item);

  return () => observer.unobserve(item); // Return a cleanup function
};
