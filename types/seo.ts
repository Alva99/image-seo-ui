export interface SeoData {
  message: string
  url: string
  seo: {
    alt_text: string
    filename: string
    title: string
    description: string
    language: string
  }
  optimization: {
    original: {
      format: string
      width: number
      height: number
      bytes: number
    }
    optimized: {
      format: string
      width: number
      height: number
      bytes: number
    }
    savings: {
      bytes: number
      percent: number
    }
  }
  copy_improvement?: {
    input: string
    improved: string
  } | null
}