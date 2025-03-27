export const getAssetPath = (path: string) => {
  if (import.meta.env.PROD) {
    return `/portfolio/${path.replace('../', '')}`
  }
  
  return path
}