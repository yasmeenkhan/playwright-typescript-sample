import { requireEnv } from '../utils/env';

export type Credentials = {
  username: string;
  password: string;
};

const demoPassword = 'secret_sauce';

export function standardUser(): Credentials {
  return {
    username: requireEnv('TEST_USER'),
    password: requireEnv('TEST_PASS'),
  };
}

export const users = {
  lockedOut: { username: 'locked_out_user', password: demoPassword },
  problem: { username: 'problem_user', password: demoPassword },
  invalid: { username: 'not_a_user', password: 'wrong_password' },
} as const satisfies Record<string, Credentials>;

export const successfulLogins = [
  {
    title: 'standard user reaches inventory',
    tags: ['@smoke', '@regression'] as const,
    getUser: standardUser,
  },
  {
    title: 'problem_user reaches inventory',
    tags: ['@regression'] as const,
    getUser: (): Credentials => users.problem,
  },
];

export const failedLogins = [
  {
    title: 'locked_out_user cannot sign in',
    tags: ['@smoke', '@regression'] as const,
    getUser: (): Credentials => users.lockedOut,
    errorKey: 'lockedOut' as const,
  },
  {
    title: 'invalid credentials are rejected',
    tags: ['@regression'] as const,
    getUser: (): Credentials => users.invalid,
    errorKey: 'mismatch' as const,
  },
];
