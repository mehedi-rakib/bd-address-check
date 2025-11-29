# 📦 bd-address-check

A lightweight validator for Bangladeshi districts, upazilas, and postcodes.

## 🔥 Features

- ✅ Validate district
- ✅ Validate upazila & match with correct district
- ✅ Validate postcode
- ✅ Auto-suggestions (spell check)
- ✅ Clean formatting (normalize text)
- ✅ Lightweight & beginner-friendly

---

## 📥 Install

```bash
npm install bd-address-check
```

---

## 🚀 Usage

### JavaScript (CommonJS)

```javascript
const { validateAddress } = require("bd-address-check");

const result = validateAddress({
  district: "Dhaka",
  upazila: "Mirpur",
  postcode: "1216"
});

console.log(result);
```

### TypeScript / ES Modules

```typescript
import { validateAddress, Address, ValidationResult } from "bd-address-check";

const address: Address = {
  district: "Dhaka",
  upazila: "Mirpur",
  postcode: "1216"
};

const result: ValidationResult = validateAddress(address);
console.log(result);
```

### ✅ Output

```json
{
  "district": false,
  "upazila": false,
  "postcode": true,
  "suggestions": {
    "district": "dhaka",
    "upazila": ["mirpur", "uttara", "dhanmondi"],
    "postcode": ["1216"]
  }
}
```

---

## 📚 Methods Available

### ✔ validateAddress({ district, upazila, postcode })

Returns validation status + suggestions.

**JavaScript:**
```javascript
const { validateAddress } = require("bd-address-check");

const result = validateAddress({
  district: "dhaka",
  upazila: "dhanmondi",
  postcode: "1205"
});
```

**TypeScript:**
```typescript
import { validateAddress, Address } from "bd-address-check";

const result = validateAddress({
  district: "dhaka",
  upazila: "dhanmondi",
  postcode: "1205"
} as Address);
```

### ✔ cleanText(text)

Normalize text (lowercase, trim, remove extra spaces)

```javascript
const { cleanText } = require("bd-address-check");

const cleaned = cleanText("  DHAKA  "); // Returns: "dhaka"
```

### ✔ suggestions(input, list)

Simple smart spelling suggestion

```javascript
const { suggestions, districts } = require("bd-address-check");

const suggestion = suggestions("dhka", districts); // Returns: "dhaka"
```

---

## 📝 Data Provided

- `/data/districts.json` - List of all Bangladeshi districts
- `/data/upazilas.json` - Upazilas mapped by district
- `/data/postcodes.json` - Postcodes mapped by upazila

You can also access the data directly:

**JavaScript:**
```javascript
const { districts, upazilas, postcodes } = require("bd-address-check");

console.log(districts); // Array of all districts
console.log(upazilas["dhaka"]); // Array of upazilas in Dhaka
console.log(postcodes["dhanmondi"]); // Array of postcodes in Dhanmondi
```

**TypeScript:**
```typescript
import { districts, upazilas, postcodes, Districts, UpazilasByDistrict, PostcodesByArea } from "bd-address-check";

const allDistricts: Districts = districts;
const dhakaUpazilas: string[] = upazilas["dhaka"] as string[];
const dhanmondiPostcodes: string[] = postcodes["dhanmondi"] as string[];
```

## 🎨 React Component with Tailwind CSS

This package includes a ready-to-use React component with Tailwind CSS styling!

### Install Dependencies

```bash
npm install bd-address-check react react-dom
npm install -D tailwindcss postcss autoprefixer
```

### Setup Tailwind CSS

Create `tailwind.config.js`:

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

### Use the Component

```tsx
import React from 'react';
import { AddressForm } from 'bd-address-check';
import 'bd-address-check/dist/components/AddressForm.css';

function App() {
  return (
    <AddressForm
      onValidate={(result) => {
        console.log('Validation:', result);
      }}
      placeholders={{
        district: 'Select district',
        upazila: 'Select upazila',
        postcode: 'Enter postcode',
      }}
    />
  );
}
```

### Component Features

- ✅ Auto-complete dropdowns for districts, upazilas, and postcodes
- ✅ Real-time validation with visual feedback
- ✅ Smart suggestions for invalid inputs
- ✅ Fully customizable with CSS classes or Tailwind utilities
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern color scheme inspired by portfolio design
- ✅ Dark mode support
- ✅ TypeScript support
- ✅ Click-outside to close dropdowns

### Customization

The component is fully customizable in two ways:

#### 1. Using CSS Classes

The component uses semantic CSS classes that you can override:

```css
/* Override in your CSS */
.bd-address-form {
  background: #ffffff;
  border-radius: 1rem;
}

.bd-address-form-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

#### 2. Using Tailwind Classes

You can also use Tailwind utility classes via the `className` prop:

```tsx
<AddressForm
  className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl"
/>
```

**Customization options:**
- Customize labels and placeholders
- Override CSS classes or use Tailwind utilities
- Handle validation callbacks
- Set initial values
- Enable/disable specific fields
- Responsive design with mobile-first approach

See `examples/CUSTOMIZATION.md` for detailed customization guide.

## 🔧 Development

This package is written in TypeScript. To build from source:

```bash
npm install
npm run build
```

The compiled JavaScript files will be in the `dist/` directory.

---

## 📄 License

MIT © 2025 Mehedi Rakib

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

