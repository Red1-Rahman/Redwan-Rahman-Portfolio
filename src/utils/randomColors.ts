export const generateRandomColors = () => {
  const hue1 = Math.floor(Math.random() * 360);
  const hue2 = (hue1 + 120) % 360;
  const hue3 = (hue2 + 120) % 360;

  return `linear-gradient(
    45deg,
    hsla(${hue1}, 70%, 80%, 0.8),
    hsla(${hue2}, 70%, 80%, 0.8),
    hsla(${hue3}, 70%, 80%, 0.8)
  )`;
};
