import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { JsonPlaceholderClient } from '../../api/client';

test.describe('JSONPlaceholder API', () => {
  test.beforeEach(async () => {
    await allure.feature('API');
    await allure.story('Contract checks');
  });

  test(
    'GET /posts/1 matches the post schema',
    { tag: ['@api', '@smoke', '@regression'] },
    async ({ request }) => {
      const api = new JsonPlaceholderClient(request);
      const post = await api.getPost(1);
      expect(post.id).toBe(1);
      expect(post.userId).toBeGreaterThan(0);
    },
  );

  test(
    'POST /posts returns a created resource that matches the schema',
    { tag: ['@api', '@regression'] },
    async ({ request }) => {
      const api = new JsonPlaceholderClient(request);
      const created = await api.createPost({
        title: 'framework contract check',
        body: 'created via Playwright request',
        userId: 1,
      });
      expect(created.id).toBeGreaterThan(0);
      expect(created.title).toBe('framework contract check');
    },
  );

  test(
    'GET /users/1 matches the user schema',
    { tag: ['@api', '@regression'] },
    async ({ request }) => {
      const api = new JsonPlaceholderClient(request);
      const user = await api.getUser(1);
      expect(user.email).toContain('@');
    },
  );
});
