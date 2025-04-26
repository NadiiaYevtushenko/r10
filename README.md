# 🚀 Hyperspace Registration Form (React + Formik + Yup)

This project is a simple web form demonstration with validation, constructed using **Formik** for form management and **Yup** for validation. It provides a clean, modular structure and offers an easy-to-use registration form with input data handling and validation feedback.

---

## 🕉 Key Features

- 📋 Form state and validation management through Formik
- 🔒 Schema-based validation with Yup
- 👨‍💻 Three input fields: `First Name`, `Last Name`, `Work Email`, with expandable fields like `Job Title` and `Phone Number`
- 🧄 Modular structure: `components` for better separation of logic
- ✅ Easy setup and configuration
- 🌟 Fully typed with TypeScript
- 🕶 Accessible design, featuring ARIA attributes and proper error messages
- ⚡ Full compatibility with modern tools like **Vite**

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

## 👉 Live Demo

**Live Deployment**:  
[Hyperspace Registration Form](https://r10-nadiias-projects-dc6d9292.vercel.app/)

---
