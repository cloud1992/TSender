import { describe, it, expect } from 'vitest'
import { calculateTotals } from './calculateTotals'

describe('calculateTotals', () => {
  it('should return 0 for an empty array', () => {
    expect(calculateTotals([])).toBe(0)
  })

  it('should sum positive numbers correctly', () => {
    expect(calculateTotals([10, 20, 30])).toBe(60)
  })

  it('should handle postive numbers', () => {
    expect(calculateTotals([10, 5, 15])).toBe(30)
  })

  it('should handle a single number', () => {
    expect(calculateTotals([42])).toBe(42)
  })
})
