export const getAssetPath = (path: string) => {
  if (import.meta.env.PROD) {
    return `/portfolio/pictures/${path.replace('../', '')}`
  }
  
  return path
}