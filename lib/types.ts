export interface DrupalFeatureItem {
  id: string
  icon?: string
  title?: string
  description?: { processed: string }
}

export interface DrupalHomepage {
  id: string
  title: string
  path?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string }
  featuresItems?: DrupalFeatureItem[]
  ctaTitle?: string
  ctaDescription?: { processed: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalPage {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
}

export interface DrupalCollection {
  id: string
  title: string
  path?: string
  season?: string
  body?: { processed: string; summary?: string }
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalPiece {
  id: string
  title: string
  path?: string
  collectionName?: string
  price?: string
  material?: string
  body?: { processed: string; summary?: string }
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalArtisan {
  id: string
  title: string
  path?: string
  specialty?: string
  yearsExperience?: number
  body?: { processed: string; summary?: string }
  photo?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface CollectionsData {
  nodeCollections: {
    nodes: DrupalCollection[]
  }
}

export interface PiecesData {
  nodePieces: {
    nodes: DrupalPiece[]
  }
}

export interface ArtisansData {
  nodeArtisans: {
    nodes: DrupalArtisan[]
  }
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}
