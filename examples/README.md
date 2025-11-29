# AddressForm Component Examples

This directory contains examples of how to use the `AddressForm` React component with Tailwind CSS.

## Quick Start

### 1. Install Dependencies

```bash
npm install bd-address-check react react-dom
npm install -D tailwindcss postcss autoprefixer
```

### 2. Setup Tailwind CSS

Create or update your `tailwind.config.js`:

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

### 3. Import and Use

```tsx
import React from 'react';
import { AddressForm } from 'bd-address-check';
import 'bd-address-check/dist/components/AddressForm.css';

function App() {
  return (
    <div>
      <AddressForm
        onValidate={(result) => {
          console.log('Validation result:', result);
        }}
      />
    </div>
  );
}

export default App;
```

## Customization Options

The `AddressForm` component accepts the following props:

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Custom CSS classes for the form container |
| `onValidate` | `(result: ValidationResult) => void` | `undefined` | Callback when address is validated |
| `initialValues` | `Partial<Address>` | `undefined` | Initial address values |
| `showValidation` | `boolean` | `true` | Show validation messages |
| `placeholders` | `object` | `{}` | Custom placeholder texts |
| `labels` | `object` | `{}` | Custom label texts |
| `disabled` | `object` | `{}` | Enable/disable specific fields |

### Example: Custom Styling

```tsx
<AddressForm
  className="my-custom-form"
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
  onValidate={(result) => {
    if (result.district && result.upazila && result.postcode) {
      // All fields are valid
      console.log('Address is complete!');
    }
  }}
/>
```

### Example: With Initial Values

```tsx
<AddressForm
  initialValues={{
    district: 'dhaka',
    upazila: 'dhanmondi',
    postcode: '1205',
  }}
  onValidate={(result) => {
    console.log('Validation:', result);
  }}
/>
```

### Example: Disable Fields

```tsx
<AddressForm
  disabled={{
    district: false,
    upazila: false,
    postcode: true, // Postcode field is disabled
  }}
/>
```

## Features

- ✅ Auto-complete dropdowns for districts, upazilas, and postcodes
- ✅ Real-time validation
- ✅ Smart suggestions for invalid inputs
- ✅ Fully customizable with Tailwind CSS
- ✅ TypeScript support
- ✅ Responsive design

## Styling

The component uses Tailwind CSS classes. You can override styles by:

1. Passing custom `className` prop
2. Using Tailwind's `@apply` directive in your CSS
3. Customizing Tailwind config

Example custom styling:

```css
/* In your CSS file */
.my-custom-form {
  @apply bg-blue-50 rounded-xl p-8;
}

.my-custom-form input {
  @apply border-2 border-blue-300;
}
```

