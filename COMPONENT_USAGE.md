# AddressForm Component - Quick Start Guide

## Installation

```bash
npm install bd-address-check react react-dom
npm install -D tailwindcss postcss autoprefixer
```

## Setup Tailwind CSS

1. Initialize Tailwind (if not already done):
```bash
npx tailwindcss init -p
```

2. Update `tailwind.config.js`:
```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/bd-address-check/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add Tailwind directives to your main CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Basic Usage

```tsx
import React from 'react';
import { AddressForm } from 'bd-address-check';

function App() {
  return (
    <AddressForm
      onValidate={(result) => {
        console.log('Validation result:', result);
      }}
    />
  );
}
```

## Customization Example

```tsx
import React from 'react';
import { AddressForm, ValidationResult } from 'bd-address-check';

function App() {
  const handleValidation = (result: ValidationResult) => {
    if (result.district && result.upazila && result.postcode) {
      // All fields are valid - submit form
      console.log('Address is complete!');
    }
  };

  return (
    <AddressForm
      className="my-custom-class"
      onValidate={handleValidation}
      initialValues={{
        district: 'dhaka',
        upazila: 'dhanmondi',
        postcode: '1205',
      }}
      placeholders={{
        district: 'Select your district',
        upazila: 'Select your upazila',
        postcode: 'Enter postcode',
      }}
      labels={{
        district: 'জেলা',
        upazila: 'উপজেলা',
        postcode: 'পোস্ট কোড',
      }}
      showValidation={true}
    />
  );
}
```

## Features

- ✅ Auto-complete dropdowns
- ✅ Real-time validation
- ✅ Smart suggestions
- ✅ Fully customizable
- ✅ TypeScript support
- ✅ Responsive design

## Editing the Component

The component source is in `src/components/AddressForm.tsx`. You can:

1. Clone the repository
2. Edit `src/components/AddressForm.tsx`
3. Run `npm run build`
4. Use your customized version

Or install the package and override styles with Tailwind classes!

