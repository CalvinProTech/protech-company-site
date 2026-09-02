'use client';

import { useState, useCallback } from 'react';

import FinancingApplyLink from '@/components/financing/FinancingApplyLink';

const APR_BY_CREDIT: Record<string, { label: string; apr: number }> = {
  excellent: { label: 'Excellent (741–850)', apr: 0.1049 },
  good: { label: 'Good (681–740)', apr: 0.1437 },
  average: { label: 'Average (661–680)', apr: 0.1859 },
  poor: { label: 'Poor (500–660)', apr: 0.2082 },
};

const TERM_OPTIONS = [
  { months: 36, label: '36 mo' },
  { months: 48, label: '48 mo' },
  { months: 60, label: '60 mo' },
  { months: 72, label: '72 mo' },
  { months: 84, label: '84 mo' },
  { months: 96, label: '96 mo' },
  { months: 108, label: '108 mo' },
  { months: 120, label: '120 mo' },
  { months: 132, label: '132 mo' },
  { months: 144, label: '144 mo' },
  { months: 156, label: '156 mo' },
  { months: 168, label: '168 mo' },
  { months: 180, label: '180 mo' },
];

function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

function formatCurrencyFull(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(n);
}

/**
 * Lender-neutral payment estimator (plain amortization over illustrative APR
 * bands) — it does not check rates or pull credit. Was "HearthWidget" until
 * 2026-09-02; the Hearth partner link it fed died and the name kept pointing
 * people at a dead partner. The way OUT is FinancingApplyLink (one URL, one
 * monitor contract) — never a hard-coded href here.
 */
export default function FinancingCalculator() {
  const [projectCost, setProjectCost] = useState(12000);
  const [downPayment, setDownPayment] = useState(0);
  const [creditTier, setCreditTier] = useState('excellent');
  const [termMonths, setTermMonths] = useState(60);

  const calculate = useCallback(() => {
    const principal = Math.max(projectCost - downPayment, 0);
    const apr = APR_BY_CREDIT[creditTier]?.apr || 0.1049;
    const monthlyApr = apr / 12;
    const mPow = Math.pow(1 + monthlyApr, termMonths);
    const monthly =
      mPow === 1
        ? principal / termMonths
        : (principal * monthlyApr * mPow) / (mPow - 1);
    const totalCost = termMonths * monthly;
    const interest = totalCost - principal;

    return { principal, monthly, interest, totalCost, apr };
  }, [projectCost, downPayment, creditTier, termMonths]);

  const result = calculate();

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-neutral-200 bg-white shadow-xl">
      {/* Header */}
      <div className="border-b border-neutral-100 px-6 py-5 text-center">
        <h3 className="text-xl font-bold text-primary-900">
          Financing Calculator
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Estimate your monthly payment
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4 px-6 pt-5">
        {/* Project Cost */}
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            Project Cost
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
              $
            </span>
            <input
              type="number"
              value={projectCost || ''}
              onChange={(e) => setProjectCost(Number(e.target.value))}
              placeholder="12000"
              min={1000}
              max={100000}
              className="h-11 w-full rounded-lg border border-neutral-300 pl-7 pr-3 text-sm font-semibold focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            Down Payment
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
              $
            </span>
            <input
              type="number"
              value={downPayment || ''}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              placeholder="0"
              min={0}
              max={projectCost}
              className="h-11 w-full rounded-lg border border-neutral-300 pl-7 pr-3 text-sm font-semibold focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
          {downPayment > 0 && (
            <p className="mt-1 text-xs text-neutral-400">
              Financing {formatCurrency(Math.max(projectCost - downPayment, 0))}
            </p>
          )}
        </div>

        {/* Loan Term */}
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            Loan Term
          </label>
          <div className="grid grid-cols-4 gap-2">
            {TERM_OPTIONS.map((opt) => (
              <button
                key={opt.months}
                onClick={() => setTermMonths(opt.months)}
                className={`rounded-lg border px-2 py-2 text-xs font-semibold transition-all ${
                  termMonths === opt.months
                    ? 'border-accent-500 bg-accent-50 text-accent-700'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Credit Score */}
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            Credit Score
          </label>
          <select
            value={creditTier}
            onChange={(e) => setCreditTier(e.target.value)}
            className="h-11 w-full rounded-lg border border-neutral-300 px-3 text-sm font-semibold focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          >
            {Object.entries(APR_BY_CREDIT).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Result */}
      <div className="mx-6 mt-6 rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-5 text-center text-white">
        <p className="text-xs font-medium text-primary-300">
          Estimated Monthly Payment
        </p>
        <p className="mt-1 text-4xl font-bold">
          {formatCurrency(result.monthly)}
          <span className="text-lg font-normal text-primary-300">/mo</span>
        </p>
      </div>

      {/* Breakdown */}
      <div className="mx-6 mt-4 rounded-lg bg-neutral-50 p-4 text-sm">
        <div className="flex justify-between py-1">
          <span className="text-neutral-600">Financed Amount</span>
          <span className="font-semibold">
            {formatCurrencyFull(result.principal)}
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-neutral-600">Total Interest</span>
          <span className="font-semibold">
            {formatCurrencyFull(result.interest)}
          </span>
        </div>
        <div className="flex justify-between border-t border-neutral-200 py-1 pt-2">
          <span className="font-semibold text-neutral-800">Total Cost</span>
          <span className="font-bold text-primary-900">
            {formatCurrencyFull(result.totalCost)}
          </span>
        </div>
        <p className="mt-2 text-xs text-neutral-400">
          APR: {(result.apr * 100).toFixed(2)}% · {termMonths} monthly payments
        </p>
      </div>

      {/* CTA */}
      <div className="px-6 pb-5 pt-4">
        <p className="mb-3 text-center text-xs font-medium text-neutral-700">
          See the options you actually qualify for — a few minutes, and
          checking won&apos;t affect your credit score.
        </p>
        <FinancingApplyLink
          section="calculator"
          label="See My Financing Options"
          className="flex h-12 w-full items-center justify-center rounded-lg bg-accent-500 text-base font-semibold text-white transition-colors hover:bg-accent-600"
        >
          See My Financing Options →
        </FinancingApplyLink>
        <p className="mt-3 text-center text-[10px] text-neutral-400">
          Estimated payment for information purposes only. Actual rates may vary
          and are subject to credit approval.
        </p>
      </div>
    </div>
  );
}
