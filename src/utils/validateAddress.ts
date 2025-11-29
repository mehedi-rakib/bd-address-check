import { cleanText } from "./cleanText";
import { getSuggestion } from "./suggestions";
import { Address, ValidationResult } from "../types";
import districtsData from "../data/districts.json";
import upazilasData from "../data/upazilas.json";
import postcodesData from "../data/postcodes.json";

const districts: string[] = districtsData as string[];
const upazilas: Record<string, string[]> = upazilasData as Record<string, string[]>;
const postcodes: Record<string, string[]> = postcodesData as Record<string, string[]>;

export function validateAddress(address: Address): ValidationResult {
  const district = cleanText(address.district);
  const upazila = cleanText(address.upazila);
  const postcode = address.postcode.toString().trim();

  const districtExists = districts.includes(district);
  const upazilaExists = upazilas[district]?.includes(upazila) ?? false;
  const postcodeExists = postcodes[upazila]?.includes(postcode) ?? false;

  return {
    district: districtExists,
    upazila: upazilaExists,
    postcode: postcodeExists,
    suggestions: {
      district: districtExists ? null : getSuggestion(district, districts),
      upazila: upazilaExists ? null : (upazilas[district] || []),
      postcode: postcodeExists ? null : (postcodes[upazila] || [])
    }
  };
}

