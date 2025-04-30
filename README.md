
# 🚀 Hyperspace Registration Form (React + Formik + Yup)

This project is a simple web form demonstration with validation, constructed using **Formik** for form management and **Yup** for validation. It provides a clean, modular structure and offers an easy-to-use registration form with input data handling and validation feedback.
---

## 🕉 Key Features

- 📋 Form state management using **Formik**
- ✅ Schema-based validation with **Yup**
- 🧩 Three primary fields: `First Name`, `Last Name`, `Work Email`
   + Additional fields: `Job Title`, `Phone Number`
- 🧠 Modular structure with separate logic in `components`
- 🔍 Dynamic validation with real-time feedback
- ⚡ Fully compatible with **Vite**
- 🎯 **Form resets automatically** after successful submission
- 🧾 **ConfirmationMessage** component shows per-field validation success messages
- 🧊 **Modal window** displays success message after submission
- 🕶 Accessible design with ARIA attributes
- 🌐 Fully typed using **TypeScript**

---

## 📁 Project Structure

```
src/
├── App.tsx                      // Main app integration
├── components/
│   ├── FormField.tsx            // Reusable field component
│   ├── HyperspaceForm.tsx       // Main form component with validation
│   ├── ConfirmationMessage.tsx  // Success and conditional message handling
├── index.css                    // Global styling
├── main.tsx                     // App entry point
└── vite-env.d.ts
```

---

## 🚀 Running Locally

To run this project locally, follow these steps:

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd hyperspace-registration-form
```

### Step 2: Install dependencies
```bash
yarn install
```

### Step 3: Start the development server
```bash
yarn dev
```

🔗 Open in the browser: **http://localhost:5173**

---

## 📏 Validation Rules

- **First Name**: Required, minimum of 2 characters, maximum of 30 characters.
- **Last Name**: Required, minimum of 2 characters, maximum of 30 characters.
- **Work Email**: Required, must be a valid email format.
- **Phone Number**: Must start with `+38`, total of 12 digits including the country code.
- **Job Title**: Required, minimum of 2 characters, maximum of 50 characters.

The application highlights errors dynamically and disables the submit button until all fields pass validation.

---

## 🌐 Deployment

This project can be deployed to any static hosting platform such as **Vercel**, **Netlify**, or **GitHub Pages**. Visit the live demo link below for an example.

---

## 🧑‍💻 Technologies Used

- ⚛️ React
- 📜 TypeScript
- 🎨 CSS
- 📦 Formik
- ✅ Yup
- ⚡ Vite

---

## 🌟 Key Components

1. **FormField.tsx**
   - Modular field component for handling inputs, errors, and success messages.

2. **HyperspaceForm.tsx**
   - Main feature: Registration form with validation schema and dynamic rendering of input fields.

3. **ConfirmationMessage.tsx**
   - Success message logic is dynamically controlled based on input touch and validation.

---
## ♿ Accessibility Support

Basic accessibility support has been implemented for users who rely on assistive technologies such as screen readers.

### 🔧 Improvements Made:

1. **Each input field includes an `aria-label` attribute**
    - This allows screen readers to announce descriptive labels without the need for visible `<label>` elements.
    - The `aria-label` attributes were added without altering the logic or component structure.

2. **No additional functional changes**
    - Component architecture remains unchanged for consistency and simplicity.

---

### ✅ Accessibility Testing via Google Lighthouse

Google Chrome’s built-in **Lighthouse** tool was used for automated accessibility testing.

#### 🔍 Steps:

1. Open the application in **Google Chrome**.
2. Press **F12** to open **DevTools**.
3. Go to the **Lighthouse** tab.
4. Select the **Accessibility** checkbox.
5. Click **Generate report**.
6. Review the results:
    - If `aria-label` attributes are implemented correctly, no violations will appear.
    - Suggestions will appear if further enhancements are needed.

---

## 👉 Live Demo

**Live Deployment**:  
[Hyperspace Registration Form](https://r10-nadiias-projects-dc6d9292.vercel.app/)

---
