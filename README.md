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

## 🔧 Development

This package is written in TypeScript. To build from source:

```bash
npm install
npm run build
```

The compiled JavaScript files will be in the `dist/` directory.

---

## 📄 License

MIT © 2025 Your Name

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

