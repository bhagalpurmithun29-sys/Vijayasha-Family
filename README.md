# VIJAYASHA FAMILY

A modern, premium landing page built for a boutique family-owned stay in Bhagalpur. It features smooth animations, highly responsive layouts, and functional contact integrations.

## 🚀 Features

- **Premium Minimalist UI**: Clean design focusing on luxury and comfortable vibes.
- **Interactive Room Cards**: Browse highlights, amenities, and price ranges interactively.
- **Animated Interactions**: Powered by Framer Motion for fluid transitions and scrolling effects.
- **Responsive Flow**: Tailored experience for mobile, tablet, and desktop visitors.
- **WhatsApp & Map Integration**: Integrated one-click communication channels and local map embedding.
- **Cloudinary Image Management**: Dedicated Node utility to upload and host images directly on Cloudinary.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Media**: [Cloudinary SDK](https://cloudinary.com/) & [dotenv](https://www.npmjs.com/package/dotenv)

## 📦 Installation

Clone the repository or copy the source files, and then run:

```bash
npm install
```

## ⚙️ Cloudinary & Environment Setup

To enable image uploads via Cloudinary, create a `.env` file in the project root:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 📤 Uploading Images

To upload a new image (e.g., `bedroom.jpg`) and generate its hosted Cloudinary URL:

1. Save the image in the project root folder.
2. Run the upload helper script:

```bash
node upload_to_cloudinary.js bedroom.jpg
```

Copy the generated secure URL from the output and paste it as the `src` in your React components.

## 🏃 Getting Started

To start the development server locally:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To preview a production build:

```bash
npm run preview
```
