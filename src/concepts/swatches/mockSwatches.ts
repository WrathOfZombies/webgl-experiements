import { CoolorsUrl, parseSwatchFromUrl } from "./parseSwatchFromUrl"

const mockSwatchUrls: CoolorsUrl[] = [
  "https://coolors.co/FEA443-F3FEB0-705E78-A5AAA3-812F33",
  "https://coolors.co/048C7F-F2E2C4-D99441-D94E41-BF0A0A",
  "https://coolors.co/254559-3F7373-F2F2F2-D9D9D9-404040",
  "https://coolors.co/FFBA00-5A6080-FFEECA-BCCEE0-405C55",
  "https://coolors.co/F24452-542D59-C5D930-F2CF63-F25D50",
]

const mockSwatches = mockSwatchUrls.map(parseSwatchFromUrl)

export { mockSwatches }
