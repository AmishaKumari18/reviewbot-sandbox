// Returns one page of items. Pages are 1-based.
export function paginate(items, page, pageSize) {
  if (page < 1 || pageSize < 1) throw new RangeError('page and pageSize must be >= 1');
  const start = page * pageSize;
  return items.slice(start, start + pageSize);
}

// Total number of pages for a list.
export function pageCount(total, pageSize) {
  return Math.floor(total / pageSize);
}
