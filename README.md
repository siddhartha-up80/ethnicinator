# Ethnic Inator - E-commerce Website for Indian Ethnic Women's Wear

Welcome to **Ethnic Inator** – your one-stop destination for exquisite Indian ethnic wear for women! This repository contains the source code for an e-commerce platform designed to showcase and sell a wide range of traditional and contemporary ethnic attire.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Content Management](#content-management)
- [Styling](#styling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

Ethnic Inator comes with a variety of features that make it a robust and user-friendly e-commerce platform:

- **Dynamic Product Catalog**: Browse through multiple categories like sarees, lehengas, kurtis, and more.
- **Advanced Filtering and Search**: Find products easily using filters like price range, color, size, and more.
- **User Authentication**: Secure login and registration using Clerk Auth with email/password, social login options, and two-factor authentication.
- **Personalized Experience**: Logged-in users can save their favorite products, view order history, and receive personalized product recommendations.
- **CMS Integration**: Manage product listings, categories, and content directly through Sanity.io's powerful CMS.
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices.
- **Secure Payments**: Integrated payment gateway for smooth transactions.
- **Order Management**: Admin panel for tracking orders, managing inventory, and handling customer queries.
- **SEO Optimized**: Ensure your products are easily discoverable on search engines.

## Tech Stack

Ethnic Inator is built with the latest technologies to ensure a high-performing, scalable, and maintainable application.

- **Frontend**: [Next.js 14](https://nextjs.org/)
- **Backend**: [Next.js 14 API Routes](https://nextjs.org/docs/api-routes/introduction)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn-UI](https://shadcn.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn
- MongoDB instance (local or cloud-based)
- Clerk account for authentication
- Sanity.io account for content management

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/siddhartha-up80/ethnicinator.git
   cd ethnic-inator
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following variables:

   ```bash
    NEXT_PUBLIC_STRIPE_KEY=YOURKEY
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOURKEY
    CLERK_SECRET_KEY=YOURKEY
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:3000`.


## Authentication

User authentication is handled by [Clerk](https://clerk.dev/), providing a secure and easy-to-integrate solution. The platform supports multiple sign-in methods including email, social logins, and two-factor authentication.

## Content Management

Sanity.io is used as the content management system (CMS) for managing the product catalog, categories, and other site content. The headless CMS architecture ensures flexibility and scalability in handling content.

### Setting up Sanity Studio

1. Navigate to the `sanity/` directory.
2. Run the following command to start Sanity Studio:

   ```bash
   sanity start
   ```

3. Access the studio at `http://localhost:3333` to manage your content.

## Styling

Styling is handled using [Tailwind CSS](https://tailwindcss.com/) combined with [Shadcn-UI](https://shadcn.dev/) components. This setup allows for rapid development of responsive and visually appealing interfaces.

- **Tailwind CSS**: Provides utility-first CSS framework for rapid UI development.
- **Shadcn-UI**: Offers pre-built components styled with Tailwind CSS, ensuring a consistent design system.

## Deployment

The project can be easily deployed on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

### Deploying on Vercel

1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com/) and link your repository.
3. Set up the necessary environment variables in Vercel's dashboard.
4. Click "Deploy" – Vercel will handle the rest!

## Contributing

Contributions are welcome! If you have suggestions or find issues, please open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

