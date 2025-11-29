export type District = string;
export type Upazila = string;
export type Postcode = string;

export interface Address {
  district: string;
  upazila: string;
  postcode: string | number;
}

export interface ValidationResult {
  district: boolean;
  upazila: boolean;
  postcode: boolean;
  suggestions: {
    district: string | null;
    upazila: Upazila[] | null;
    postcode: Postcode[] | null;
  };
}

export type Districts = District[];
export type UpazilasByDistrict = Record<District, Upazila[]>;
export type PostcodesByArea = Record<string, Postcode[]>;

