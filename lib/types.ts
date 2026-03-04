export interface DrupalHomepage {
  id: string
  title: string
  path?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string; summary?: string }
  statsItems?: string
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: { processed: string; summary?: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalPage {
  id: string
  title: string
  path?: string

}

export interface DrupalCollection {
  id: string
  title: string
  path?: string
  season?: string
  pieceCount?: number
  priceRange?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalPiece {
  id: string
  title: string
  path?: string
  collectionName?: string
  price?: string
  material?: string
  gemstone?: string
  pieceType?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalArtisan {
  id: string
  title: string
  path?: string
  specialty?: string
  yearsExperience?: number
  origin?: string
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
