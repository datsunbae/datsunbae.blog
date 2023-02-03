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
  }`;
}

export function test() {
  return `mutation {
    createDiscussion(input: {repositoryId: "R_kgDOI2bUHQ", categoryId: "DIC_kwDOI2bUHc4CT23Z", body: "The body123", title: "The title123"}) {
      discussion {
        id
      }
    }
  }`;
}

export function testcomment() {
  return `mutation {
    addDiscussionComment(input: {discussionId: "D_kwDOI2bUHc4ASVXt",  body: "The body"}) {
      clientMutationId
    } 
  }`;
}
