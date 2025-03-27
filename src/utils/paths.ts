export const getAssetPath = (path: string) => {
  if (import.meta.env.PROD) {
    return `/portfolio/assets/${path.replace('../', '')}`
  }
  
  return path
}