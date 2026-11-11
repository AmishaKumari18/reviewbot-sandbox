// Returns one page of items. Pages are 1-based.
export function paginate(items, page, pageSize) {
  if (!Array.isArray(items)) throw new TypeError('items must be an array');
  if (page < 1 || pageSize < 1) throw new RangeError('page and pageSize must be >= 1');
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

// Total number of pages for a list.
export function pageCount(total, pageSize) {
  if (pageSize < 1) throw new RangeError('pageSize must be >= 1');
  return Math.ceil(total / pageSize);
}
