import { z } from 'zod';

export const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string().min(1),
  body: z.string().min(1),
});

export const CreatedPostSchema = PostSchema;

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
  }),
});

export type Post = z.infer<typeof PostSchema>;
export type User = z.infer<typeof UserSchema>;
