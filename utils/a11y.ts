import { expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import type { AxeResults, Result } from 'axe-core';

export async function scanPage(page: Page): Promise<AxeResults> {
  return new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
}

export function unexpectedViolations(
  results: AxeResults,
  allowedRuleIds: readonly string[],
): Result[] {
  return results.violations.filter((violation) => !allowedRuleIds.includes(violation.id));
}

export async function expectNoUnexpectedA11yViolations(
  page: Page,
  allowedRuleIds: readonly string[],
): Promise<void> {
  const results = await scanPage(page);
  const unexpected = unexpectedViolations(results, allowedRuleIds);
  expect(
    unexpected,
    unexpected.map((violation) => `${violation.id}: ${violation.help}`).join('\n'),
  ).toEqual([]);
}
