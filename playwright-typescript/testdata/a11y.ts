/**
 * Sauce Demo is a third-party app we do not own.
 * These axe rule IDs are known and tracked; any *new* rule id fails CI.
 * See docs/test-strategy.md for the exception policy.
 */
export const allowedAxeRuleIds = {
  login: ['color-contrast', 'label', 'page-has-heading-one'],
  inventory: ['color-contrast', 'page-has-heading-one'],
} as const;
