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

  it('adds multiple comma-separated numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  it('supports newline as an alternative delimiter', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('supports custom single-character delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  it('throws an error for negative numbers', () => {
    expect(() => add('-1,2,3')).toThrow('negative numbers not allowed: -1');
  });

  it('throws an error with multiple negative numbers', () => {
    expect(() => add('-1,-2,3')).toThrow('negative numbers not allowed: -1, -2');
  });
});