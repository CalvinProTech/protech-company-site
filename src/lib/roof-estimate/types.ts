// ---------------------------------------------------------------------------
// Instant Roof Estimate — Types
// ---------------------------------------------------------------------------

export interface GeocodeResult {
  formattedAddress: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  zipCode: string;
}

export interface RoofData {
  roofAreaSqFt: number;
}

export interface InstantEstimateResult {
  roofAreaSqFt: number;
  estimatePrice: number;
  formattedAddress: string;
  city: string;
  state: string;
  zip: string;
}

export interface InstantEstimateRequest {
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
}

export interface InstantEstimateResponse {
  success: boolean;
  data?: InstantEstimateResult;
  message?: string;
  emailSent?: boolean;
  /** True only when the lead actually reached the PTR Lead API — the client
   *  must not fire ad conversions without it. */
  leadForwarded?: boolean;
}
