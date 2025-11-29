import React, { useState, useEffect, useMemo, useRef } from 'react';
import { validateAddress, districts, upazilas, postcodes, Address, ValidationResult } from '../index';
import './AddressForm.css';

export interface AddressFormProps {
  /**
   * Custom class names for the form container
   */
  className?: string;
  
  /**
   * Callback function when address is validated
   */
  onValidate?: (result: ValidationResult) => void;
  
  /**
   * Initial address values
   */
  initialValues?: Partial<Address>;
  
  /**
   * Show validation messages
   */
  showValidation?: boolean;
  
  /**
   * Custom placeholder texts
   */
  placeholders?: {
    district?: string;
    upazila?: string;
    postcode?: string;
  };
  
  /**
   * Custom label texts
   */
  labels?: {
    district?: string;
    upazila?: string;
    postcode?: string;
  };
  
  /**
   * Enable/disable fields
   */
  disabled?: {
    district?: boolean;
    upazila?: boolean;
    postcode?: boolean;
  };
}

export const AddressForm: React.FC<AddressFormProps> = ({
  className = '',
  onValidate,
  initialValues,
  showValidation = true,
  placeholders = {},
  labels = {},
  disabled = {},
}) => {
  const [district, setDistrict] = useState<string>(initialValues?.district?.toString() || '');
  const [upazila, setUpazila] = useState<string>(initialValues?.upazila?.toString() || '');
  const [postcode, setPostcode] = useState<string>(initialValues?.postcode?.toString() || '');
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);
  const [showUpazilaDropdown, setShowUpazilaDropdown] = useState(false);
  const [showPostcodeDropdown, setShowPostcodeDropdown] = useState(false);

  // Refs for click outside detection
  const districtRef = useRef<HTMLDivElement>(null);
  const upazilaRef = useRef<HTMLDivElement>(null);
  const postcodeRef = useRef<HTMLDivElement>(null);

  // Filter districts based on input
  const filteredDistricts = useMemo(() => {
    if (!district) return districts;
    const lowerDistrict = district.toLowerCase();
    return districts.filter(d => d.toLowerCase().includes(lowerDistrict));
  }, [district]);

  // Filter upazilas based on selected district and input
  const filteredUpazilas = useMemo(() => {
    if (!district) return [];
    const districtKey = district.toLowerCase();
    const districtUpazilas = (upazilas as Record<string, string[]>)[districtKey] || [];
    if (!upazila) return districtUpazilas;
    const lowerUpazila = upazila.toLowerCase();
    return districtUpazilas.filter((u: string) => u.toLowerCase().includes(lowerUpazila));
  }, [district, upazila]);

  // Filter postcodes based on selected upazila and input
  const filteredPostcodes = useMemo(() => {
    if (!upazila) return [];
    const upazilaKey = upazila.toLowerCase();
    const upazilaPostcodes = (postcodes as Record<string, string[]>)[upazilaKey] || [];
    if (!postcode) return upazilaPostcodes;
    return upazilaPostcodes.filter((p: string) => p.includes(postcode));
  }, [upazila, postcode]);

  // Validate address when values change
  useEffect(() => {
    if (district || upazila || postcode) {
      const result = validateAddress({
        district,
        upazila,
        postcode,
      });
      setValidationResult(result);
      if (onValidate) {
        onValidate(result);
      }
    }
  }, [district, upazila, postcode, onValidate]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (districtRef.current && !districtRef.current.contains(event.target as Node)) {
        setShowDistrictDropdown(false);
      }
      if (upazilaRef.current && !upazilaRef.current.contains(event.target as Node)) {
        setShowUpazilaDropdown(false);
      }
      if (postcodeRef.current && !postcodeRef.current.contains(event.target as Node)) {
        setShowPostcodeDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDistrictSelect = (selectedDistrict: string) => {
    setDistrict(selectedDistrict);
    setUpazila(''); // Reset upazila when district changes
    setPostcode(''); // Reset postcode when district changes
    setShowDistrictDropdown(false);
  };

  const handleUpazilaSelect = (selectedUpazila: string) => {
    setUpazila(selectedUpazila);
    setPostcode(''); // Reset postcode when upazila changes
    setShowUpazilaDropdown(false);
  };

  const handlePostcodeSelect = (selectedPostcode: string) => {
    setPostcode(selectedPostcode);
    setShowPostcodeDropdown(false);
  };

  // Get input class based on validation state
  const getInputClass = (isValid: boolean | undefined, isInvalid: boolean | undefined, isDisabled: boolean) => {
    let baseClass = 'bd-address-form-input';
    if (isDisabled) {
      return `${baseClass} ${className}`;
    }
    if (showValidation) {
      if (isValid) {
        baseClass += ' bd-address-form-input-valid';
      } else if (isInvalid) {
        baseClass += ' bd-address-form-input-invalid';
      }
    }
    return `${baseClass} ${className}`;
  };

  return (
    <div className={`bd-address-form ${className}`}>
      <h2 className="bd-address-form-title">Bangladesh Address Validator</h2>
      
      <div className="space-y-4 md:space-y-5">
        {/* District Field */}
        <div className="bd-address-form-field" ref={districtRef}>
          <label htmlFor="district" className="bd-address-form-label">
            {labels.district || 'District'}
          </label>
          <div className="relative">
            <input
              type="text"
              id="district"
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                setShowDistrictDropdown(true);
              }}
              onFocus={() => setShowDistrictDropdown(true)}
              placeholder={placeholders.district || 'Select or type district name'}
              disabled={disabled.district}
              className={getInputClass(
                validationResult?.district,
                validationResult?.district === false,
                disabled.district || false
              )}
            />
            {showDistrictDropdown && filteredDistricts.length > 0 && !disabled.district && (
              <div className="bd-address-form-dropdown">
                {filteredDistricts.slice(0, 10).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => handleDistrictSelect(d)}
                    className="bd-address-form-dropdown-item"
                  >
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
          {showValidation && validationResult && (
            <div className="mt-2">
              {!validationResult.district && validationResult.suggestions.district && (
                <p className="bd-address-form-suggestion">
                  Did you mean: <span className="bd-address-form-suggestion-text">{validationResult.suggestions.district}</span>?
                </p>
              )}
              {validationResult.district && (
                <p className="bd-address-form-valid-text">✓ Valid district</p>
              )}
            </div>
          )}
        </div>

        {/* Upazila Field */}
        <div className="bd-address-form-field" ref={upazilaRef}>
          <label htmlFor="upazila" className="bd-address-form-label">
            {labels.upazila || 'Upazila'}
          </label>
          <div className="relative">
            <input
              type="text"
              id="upazila"
              value={upazila}
              onChange={(e) => {
                setUpazila(e.target.value);
                setShowUpazilaDropdown(true);
              }}
              onFocus={() => setShowUpazilaDropdown(true)}
              placeholder={placeholders.upazila || 'Select or type upazila name'}
              disabled={disabled.upazila || !district}
              className={getInputClass(
                validationResult?.upazila,
                validationResult?.upazila === false,
                disabled.upazila || !district
              )}
            />
            {showUpazilaDropdown && filteredUpazilas.length > 0 && !disabled.upazila && district && (
              <div className="bd-address-form-dropdown">
                {filteredUpazilas.slice(0, 10).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => handleUpazilaSelect(u)}
                    className="bd-address-form-dropdown-item"
                  >
                    {u.charAt(0).toUpperCase() + u.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
          {showValidation && validationResult && (
            <div className="mt-2">
              {!validationResult.upazila && validationResult.suggestions.upazila && validationResult.suggestions.upazila.length > 0 && (
                <div className="bd-address-form-suggestion">
                  <p>Available upazilas:</p>
                  <div className="bd-address-form-suggestion-buttons">
                    {validationResult.suggestions.upazila.slice(0, 5).map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => handleUpazilaSelect(u)}
                        className="bd-address-form-suggestion-button"
                      >
                        {u.charAt(0).toUpperCase() + u.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {validationResult.upazila && (
                <p className="bd-address-form-valid-text">✓ Valid upazila</p>
              )}
            </div>
          )}
        </div>

        {/* Postcode Field */}
        <div className="bd-address-form-field" ref={postcodeRef}>
          <label htmlFor="postcode" className="bd-address-form-label">
            {labels.postcode || 'Postcode'}
          </label>
          <div className="relative">
            <input
              type="text"
              id="postcode"
              value={postcode}
              onChange={(e) => {
                setPostcode(e.target.value);
                setShowPostcodeDropdown(true);
              }}
              onFocus={() => setShowPostcodeDropdown(true)}
              placeholder={placeholders.postcode || 'Select or type postcode'}
              disabled={disabled.postcode || !upazila}
              className={getInputClass(
                validationResult?.postcode,
                validationResult?.postcode === false,
                disabled.postcode || !upazila
              )}
            />
            {showPostcodeDropdown && filteredPostcodes.length > 0 && !disabled.postcode && upazila && (
              <div className="bd-address-form-dropdown">
                {filteredPostcodes.slice(0, 10).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePostcodeSelect(p)}
                    className="bd-address-form-dropdown-item"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
          {showValidation && validationResult && (
            <div className="mt-2">
              {!validationResult.postcode && validationResult.suggestions.postcode && validationResult.suggestions.postcode.length > 0 && (
                <div className="bd-address-form-suggestion">
                  <p>Available postcodes:</p>
                  <div className="bd-address-form-suggestion-buttons">
                    {validationResult.suggestions.postcode.slice(0, 5).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => handlePostcodeSelect(p)}
                        className="bd-address-form-suggestion-button"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {validationResult.postcode && (
                <p className="bd-address-form-valid-text">✓ Valid postcode</p>
              )}
            </div>
          )}
        </div>

        {/* Validation Summary */}
        {showValidation && validationResult && (
          <div className={`bd-address-form-summary ${
            validationResult.district && validationResult.upazila && validationResult.postcode
              ? 'bd-address-form-summary-valid'
              : 'bd-address-form-summary-warning'
          }`}>
            <h3 className="bd-address-form-summary-title">Validation Status:</h3>
            <div className="space-y-1.5 text-sm">
              <p className={`bd-address-form-summary-item ${
                validationResult.district ? 'bd-address-form-summary-item-valid' : 'bd-address-form-summary-item-invalid'
              }`}>
                {validationResult.district ? '✓' : '✗'} District: {validationResult.district ? 'Valid' : 'Invalid'}
              </p>
              <p className={`bd-address-form-summary-item ${
                validationResult.upazila ? 'bd-address-form-summary-item-valid' : 'bd-address-form-summary-item-invalid'
              }`}>
                {validationResult.upazila ? '✓' : '✗'} Upazila: {validationResult.upazila ? 'Valid' : 'Invalid'}
              </p>
              <p className={`bd-address-form-summary-item ${
                validationResult.postcode ? 'bd-address-form-summary-item-valid' : 'bd-address-form-summary-item-invalid'
              }`}>
                {validationResult.postcode ? '✓' : '✗'} Postcode: {validationResult.postcode ? 'Valid' : 'Invalid'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
