import { describe, it, expect } from 'vitest';
import { add } from './string-calculator';

describe('String Calculator', () => {
  it('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number for a single number', () => {
    expect(add('5')).toBe(5);
  });

  it('adds two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });
});