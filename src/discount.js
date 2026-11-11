// Applies a percentage discount (0-100) to a price in cents. Returns whole cents.
export function applyDiscount(priceCents, percent) {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be between 0 and 100');
  return priceCents - priceCents * percent / 100;
}
