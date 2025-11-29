/**
 * Example usage of AddressForm component
 * 
 * This file demonstrates how to use the AddressForm component
 * in your React application. You can customize it as needed.
 */

import React from 'react';
import { AddressForm, AddressFormProps, ValidationResult } from '../src/index';

const AddressFormExample: React.FC = () => {
  const handleValidation = (result: ValidationResult) => {
    console.log('Validation Result:', result);
    
    // You can add custom logic here
    if (result.district && result.upazila && result.postcode) {
      console.log('✅ Address is valid!');
      // Submit form, save to database, etc.
    }
  };

  // Custom configuration example
  const customProps: AddressFormProps = {
    className: 'my-custom-class',
    onValidate: handleValidation,
    showValidation: true,
    placeholders: {
      district: 'Enter district name',
      upazila: 'Enter upazila name',
      postcode: 'Enter postcode',
    },
    labels: {
      district: 'District',
      upazila: 'Upazila',
      postcode: 'Postcode',
    },
    // You can disable specific fields if needed
    // disabled: {
    //   district: false,
    //   upazila: false,
    //   postcode: false,
    // },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Bangladesh Address Validator Example
        </h1>
        
        {/* Basic Usage */}
        <AddressForm {...customProps} />
        
        {/* You can also use it with minimal props */}
        <div className="mt-8">
          <AddressForm
            onValidate={(result) => {
              console.log('Minimal example result:', result);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressFormExample;

