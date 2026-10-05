/** Smooth-scrolls to an in-page section without changing the route. */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(history.state, '', `${location.pathname}${location.search}#${id}`);
}
