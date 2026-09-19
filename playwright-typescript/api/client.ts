import { type APIRequestContext, expect } from '@playwright/test';
import { CreatedPostSchema, PostSchema, UserSchema, type Post, type User } from './schemas';

export type NewPost = {
  title: string;
  body: string;
  userId: number;
};

export class JsonPlaceholderClient {
  constructor(private readonly request: APIRequestContext) {}

  async getPost(id: number): Promise<Post> {
    const response = await this.request.get(`/posts/${id}`);
    expect(response.status(), `GET /posts/${id}`).toBe(200);
    return PostSchema.parse(await response.json());
  }

  async createPost(payload: NewPost): Promise<Post> {
    const response = await this.request.post('/posts', { data: payload });
    expect(response.status(), 'POST /posts').toBe(201);
    return CreatedPostSchema.parse(await response.json());
  }

  async getUser(id: number): Promise<User> {
    const response = await this.request.get(`/users/${id}`);
    expect(response.status(), `GET /users/${id}`).toBe(200);
    return UserSchema.parse(await response.json());
  }
}
