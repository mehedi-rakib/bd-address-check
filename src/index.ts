import districts from "./data/districts.json";
import upazilas from "./data/upazilas.json";
import postcodes from "./data/postcodes.json";
import { validateAddress } from "./utils/validateAddress";
import { cleanText } from "./utils/cleanText";
import { getSuggestion as suggestions } from "./utils/suggestions";

export {
  districts,
  upazilas,
  postcodes,
  validateAddress,
  cleanText,
  suggestions
};

export type {
  Address,
  ValidationResult,
  District,
  Upazila,
  Postcode,
  Districts,
  UpazilasByDistrict,
  PostcodesByArea
} from "./types";

