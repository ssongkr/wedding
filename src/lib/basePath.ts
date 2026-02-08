const basePath = process.env.NODE_ENV === 'production' ? '/wedding' : '';

export function asset(path: string) {
  return `${basePath}${path}`;
}
