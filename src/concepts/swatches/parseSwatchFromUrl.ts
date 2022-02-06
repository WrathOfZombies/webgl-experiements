/**
 * The most compatible type between Coolors.com
 * eg. https://coolors.co/ee6352-08b2e3-efe9f4-57a773-484d6d
 */
type Swatch = {
  primary: string
  secondary: string
  brand: string
  accentSecondary: string
  accent: string
}

type CoolorsUrl = `https://coolors.co/${string}-${string}-${string}-${string}-${string}`

type Colorable<TSegments extends string> = Record<TSegments, string>

const parseSwatchFromUrl = (coolorsUrl: CoolorsUrl): Swatch => {
  const cleanUrl = coolorsUrl.replace("https://coolors.co/", "").trim()
  const [primary, secondary, brand, accentSecondary, accent] = cleanUrl.split("-").map((hex) => `#${hex.toLowerCase()}`)

  return {
    primary,
    secondary,
    accent,
    accentSecondary,
    brand,
  }
}

export { CoolorsUrl, Colorable, Swatch, parseSwatchFromUrl }
