export const getImageURL = (name: string, ext: 'jpg' | 'png') => {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}
