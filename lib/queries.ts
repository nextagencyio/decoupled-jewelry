// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
      heroTitle
      heroSubtitle
      heroDescription { processed summary }
      statsItems
      featuredItemsTitle
      ctaTitle
      ctaDescription { processed summary }
      ctaPrimary
      ctaSecondary
      }
    }
  }
`

export const GET_COLLECTIONS = gql`
  query GetCollections($first: Int = 10) {
    nodeCollections(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeCollection {
          season
          pieceCount
          priceRange
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_COLLECTION_BY_PATH = gql`
  query GetCollectionByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeCollection {
            id
            title
            path
          season
          pieceCount
          priceRange
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_PIECES = gql`
  query GetPieces($first: Int = 10) {
    nodePieces(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodePiece {
          collectionName
          price
          material
          gemstone
          pieceType
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_PIECE_BY_PATH = gql`
  query GetPieceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePiece {
            id
            title
            path
          collectionName
          price
          material
          gemstone
          pieceType
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_ARTISANS = gql`
  query GetArtisans($first: Int = 10) {
    nodeArtisans(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeArtisan {
          specialty
          yearsExperience
          origin
          photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_ARTISAN_BY_PATH = gql`
  query GetArtisanByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArtisan {
            id
            title
            path
          specialty
          yearsExperience
          origin
          photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          __typename
          ... on NodeHomepage {
            id
            title
          }
          ... on NodePage {
            id
            title
            body { processed }
          }
        }
      }
    }
  }
`
