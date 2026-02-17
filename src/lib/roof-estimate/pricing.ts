// ---------------------------------------------------------------------------
// Instant Roof Estimate — Pricing (Tier 3 + 10% markup)
// ---------------------------------------------------------------------------

/**
 * Calculate the customer-facing estimate price.
 *
 * Formula (ported from PTR Measuring Tool):
 *   Tier 3 = (sqFt × $5.00 + $2,000) / (1 − 0.45)
 *   Customer Price = Tier 3 × 1.10  (10% markup)
 */
export function calculateCustomerEstimate(sqFt: number): number {
  const costPerSqFt = 5.0;
  const targetProfit = 2000;
  const totalFee = 0.3 + 0.15; // 30% base commission + 15% dealer = 45%

  const tier3 = (sqFt * costPerSqFt + targetProfit) / (1 - totalFee);
  return Math.round(tier3 * 1.1);
}
