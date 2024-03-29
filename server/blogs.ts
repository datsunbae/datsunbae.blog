import {Post, PostDetails} from '../types/post';
import {
  getDiscusstions,
  getDisscustionDetails,
  test,
  testcomment,
} from './queryGPL';
const API_URL = 'https://api.github.com/graphql';
const token = process.env.ACCESS_TOKEN_GITHUB;
const idCategoryDiscussion = process.env.DISCUSSION_CATEGORY_ID;

export async function getBlogs(): Promise<Post[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: getDiscusstions(idCategoryDiscussion)}),
  });

  const res = await response.json();
  const discusstions = res.data.repository.discussions.nodes;

  const posts = discusstions.map((discusstion: any): Post => {
    const {
      title,
      url,
      number: id,
      bodyHTML: html,
      bodyText,
      createdAt,
      lastEditedAt,
      author,
      labels,
    } = discusstion;

    const urlDiscusstion = `/post/${id}`;
    const tags: string[] = labels.nodes.map((tag: {name: string}) => {
      return tag.name;
    });

    const post = {
      id,
      title,
      url: urlDiscusstion,
      html,
      bodyText,
      createdAt,
      lastEditedAt,
      author,
      tags,
    };

    return post;
  });

  return posts;
}

export async function getBlogDetails(postID: number): Promise<PostDetails> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: getDisscustionDetails(postID)}),
  });

  const res = await response.json();
  const discusstion = res.data.repository.discussion;
  return discusstion;
}

export async function testAddDiscusstion() {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: testcomment()}),
  });

  const res = await response.json();
  return res;
}
