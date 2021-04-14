export default function (node, cb) {
  function check(e) {
    if (!node.contains(e.target)) {
      cb?.();
    }
  }

  document.addEventListener('click', check);
  document.addEventListener('touchend', check);

  return {
    destroy() {
      document.removeEventListener('click', check);
      document.removeEventListener('touchend', check);
    },
  };
}
