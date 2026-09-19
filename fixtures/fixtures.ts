import { mergeTests } from '@playwright/test';
import { test as pageTests } from './pageObjectFixtures';
import { test as reportTests } from './reportFixtures';
import { test as utilTests } from './utilFixtures';

export const test = mergeTests(pageTests, utilTests, reportTests);
export { expect } from '@playwright/test';
