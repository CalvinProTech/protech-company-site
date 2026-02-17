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
}
