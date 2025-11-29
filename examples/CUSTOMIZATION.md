# Customization Guide

The `AddressForm` component can be customized in two ways:

## 1. Using CSS Classes (Recommended)

The component comes with pre-built CSS classes that you can override in your own CSS file:

### Available CSS Classes

```css
.bd-address-form              /* Main container */
.bd-address-form-title        /* Title heading */
.bd-address-form-field         /* Field wrapper */
.bd-address-form-label         /* Label text */
.bd-address-form-input         /* Input field */
.bd-address-form-input-valid   /* Valid input state */
.bd-address-form-input-invalid /* Invalid input state */
.bd-address-form-dropdown      /* Dropdown container */
.bd-address-form-dropdown-item /* Dropdown item */
.bd-address-form-suggestion    /* Suggestion text */
.bd-address-form-suggestion-button /* Suggestion button */
.bd-address-form-summary       /* Validation summary */
```

### Example: Override CSS Classes

```css
/* In your CSS file */
.bd-address-form {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
}

.bd-address-form-input {
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
}

.bd-address-form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}
```

## 2. Using Tailwind Classes

You can also use Tailwind utility classes directly via the `className` prop:

### Example: Tailwind Customization

```tsx
import { AddressForm } from 'bd-address-check';

<AddressForm
  className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-2xl"
  placeholders={{
    district: 'Select district',
    upazila: 'Select upazila',
    postcode: 'Enter postcode',
  }}
/>
```

### Combining CSS Classes and Tailwind

```tsx
<AddressForm
  className="bd-address-form bg-gray-50 dark:bg-gray-900"
/>
```

## 3. Custom Color Scheme

Based on your portfolio colors (https://mehedi-rakib.netlify.app/), here's a custom color scheme:

```css
/* Custom color scheme matching portfolio */
.bd-address-form {
  background: #ffffff;
  color: #0a0a0a;
}

.bd-address-form-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.bd-address-form-suggestion-text {
  color: #2563eb;
}

.bd-address-form-suggestion-button {
  background: #eff6ff;
  color: #2563eb;
  border-color: #dbeafe;
}

.bd-address-form-suggestion-button:hover {
  background: #dbeafe;
  color: #1d4ed8;
}
```

## 4. Responsive Customization

The component is fully responsive. You can add custom responsive styles:

```css
/* Mobile-first approach */
.bd-address-form {
  padding: 1rem;
}

@media (min-width: 640px) {
  .bd-address-form {
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .bd-address-form {
    padding: 2rem;
    max-width: 48rem;
  }
}
```

## 5. Dark Mode Support

The component includes dark mode support. You can customize it:

```css
@media (prefers-color-scheme: dark) {
  .bd-address-form {
    background: #1a1a1a;
    color: #ffffff;
  }

  .bd-address-form-input {
    background: #2a2a2a;
    border-color: #404040;
    color: #ffffff;
  }
}
```

## 6. Complete Customization Example

```tsx
import { AddressForm } from 'bd-address-check';
import './custom-styles.css'; // Your custom CSS

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <AddressForm
        className="custom-form-style shadow-xl"
        onValidate={(result) => {
          console.log(result);
        }}
        placeholders={{
          district: 'Select your district',
          upazila: 'Select your upazila',
          postcode: 'Enter postcode',
        }}
      />
    </div>
  );
}
```

```css
/* custom-styles.css */
.custom-form-style {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
}

.custom-form-style .bd-address-form-input {
  border: 2px solid #e5e7eb;
  transition: all 0.2s;
}

.custom-form-style .bd-address-form-input:focus {
  border-color: #3b82f6;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}
```

## Tips

1. **Use CSS classes for consistent styling** across your app
2. **Use Tailwind classes for quick prototypes** or one-off customizations
3. **Combine both** for maximum flexibility
4. **Override specific classes** in your CSS file for global changes
5. **Use CSS variables** for easy theme switching

```css
:root {
  --bd-primary: #3b82f6;
  --bd-primary-hover: #2563eb;
  --bd-success: #10b981;
  --bd-error: #ef4444;
}

.bd-address-form-input:focus {
  border-color: var(--bd-primary);
}
```

