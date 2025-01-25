import { describe, it, expect } from 'vitest';
import { add } from './string-calculator';

describe('String Calculator', () => {
  it('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
});