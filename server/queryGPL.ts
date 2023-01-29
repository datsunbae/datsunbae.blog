export function getDiscusstions(discustionID: string | undefined) {
  return `{
        repository(owner: "datsunbae", name: "datsunbae.blog") {
            discussions(first: 100, categoryId: "${discustionID}") {
              nodes {
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                 labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
    }`;
}

export function getDisscustionDetails(postId: number | undefined) {
  return `{
    repository(owner: "datsunbae", name: "datsunbae.blog") {
      discussion(number: ${postId}) {
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }`
}
