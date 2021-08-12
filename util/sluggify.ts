const sluggify = (string: string): string => string
  .toString()
  .normalize('NFD')
  .replace(/[\u0300-\u036F]/g, '')
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-');

export default sluggify
