# LOWKEY

<p align="center">
  <strong>Modern Direct-to-Consumer Ecommerce Platform</strong>
</p>

<p align="center">
  A full-stack ecommerce platform built with Medusa, Next.js, PostgreSQL, and modern web technologies.
</p>

<p align="center">
  <a href="https://github.com/medusajs/medusa">
    <img src="https://img.shields.io/badge/Powered%20by-Medusa-8B5CF6" alt="Powered by Medusa" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/Node.js-20%2B-green" alt="Node.js" />
  <img src="https://img.shields.io/badge/PostgreSQL-15%2B-blue" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" />
</p>

---

## About LOWKEY

**LOWKEY** is a modern direct-to-consumer ecommerce platform designed for selling products online with a flexible and scalable commerce backend.

The project uses **Medusa** as the commerce engine and provides a customizable storefront, product catalog, cart, checkout, customer accounts, order management, and administrative functionality.

The goal is to build a production-ready ecommerce experience while keeping the platform modular and easy to extend.

---

## Features

### Ecommerce

- Product catalog
- Product variants
- Product categories
- Brand management
- Product search
- Shopping cart
- Promotion codes
- Multi-step checkout
- Shipping options
- Payment integration
- Customer accounts
- Customer addresses
- Order history
- Order management
- Multi-region support
- Country/region detection

### Administration

- Medusa Admin dashboard
- Product management
- Inventory management
- Order management
- Customer management
- Promotions
- Regions and currencies
- Sales channels
- Payment and fulfillment configuration

### Developer Features

- TypeScript
- Next.js storefront
- Medusa commerce backend
- PostgreSQL database
- Turborepo monorepo
- API-based architecture
- Custom Medusa workflows
- Custom API routes
- Custom modules
- Docker support
- Environment-based configuration

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** | Storefront |
| **React** | Frontend UI |
| **TypeScript** | Application development |
| **Medusa** | Commerce backend |
| **PostgreSQL** | Database |
| **Node.js** | Runtime |
| **Turborepo** | Monorepo management |
| **pnpm** | Package management |
| **Docker** | Development infrastructure |

---

## Project Structure

```text
.
├── apps/
│   ├── backend/
│   │   ├── medusa-config.ts
│   │   ├── integration-tests/
│   │   └── src/
│   │       ├── admin/
│   │       ├── api/
│   │       ├── jobs/
│   │       ├── links/
│   │       ├── migration-scripts/
│   │       ├── modules/
│   │       ├── subscribers/
│   │       └── workflows/
│   │
│   └── storefront/
│       └── Next.js application
│
├── eslint.config.ts
├── turbo.json
├── package.json
└── README.md
```

> `apps/storefront/` is optional. If it is not included in a particular installation, the project can run as a backend-only Medusa application.

---

# Getting Started

## Prerequisites

Make sure you have the following installed:

- Node.js 20+
- PostgreSQL 15+
- pnpm 10+
- Git

---

## 1. Clone the Repository

```bash
git clone <YOUR-REPOSITORY-URL>
cd <YOUR-REPOSITORY-DIRECTORY>
```

Install dependencies:

```bash
pnpm install
```

---

## 2. Configure the Backend

Copy the environment template:

```bash
cp apps/backend/.env.template apps/backend/.env
```

Configure the database connection in:

```text
apps/backend/.env
```

Example:

```env
DATABASE_URL=postgres://postgres:YOUR_PASSWORD@localhost:5432/lowkey
```

> Never commit `.env` files or expose database passwords, API keys, JWT secrets, or other credentials.

---

## 3. Create the Database

Create a PostgreSQL database for LOWKEY.

Example:

```sql
CREATE DATABASE lowkey;
```

Then run the Medusa migrations:

```bash
cd apps/backend
pnpm exec medusa db:migrate
```

---

## 4. Create an Admin User

From the backend directory:

```bash
pnpm exec medusa user -e admin@example.com -p YOUR_PASSWORD
```

Use the credentials you created to access the Medusa Admin dashboard.

---

## 5. Start the Backend

From:

```text
apps/backend
```

run:

```bash
pnpm dev
```

The Medusa backend runs by default at:

```text
http://localhost:9000
```

The admin dashboard is available at:

```text
http://localhost:9000/app
```

---

## 6. Configure the Storefront

If the storefront is included, create its environment file:

```bash
cp apps/storefront/.env.template apps/storefront/.env.local
```

Configure:

```env
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your_publishable_key
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_DEFAULT_REGION=in
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

### Publishable API Key

After logging into Medusa Admin, retrieve your publishable API key from:

```text
Settings → Publishable API Keys
```

Then add it to:

```text
apps/storefront/.env.local
```

Example:

```env
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_...
```

---

## 7. Start the Storefront

From:

```text
apps/storefront
```

run:

```bash
pnpm dev
```

The LOWKEY storefront will be available at:

```text
http://localhost:8000
```

---

## Run Everything

If the repository's root scripts are configured for both applications, you can start the development environment from the root:

```bash
pnpm dev
```

This starts the available applications through Turborepo.

---

# Environment Variables

## Backend

Backend configuration is stored in:

```text
apps/backend/.env
```

Common variables include:

```env
DATABASE_URL=
STORE_CORS=
ADMIN_CORS=
AUTH_CORS=
REDIS_URL=
JWT_SECRET=
COOKIE_SECRET=
```

Never commit the actual values.

---

## Storefront

Storefront configuration is stored in:

```text
apps/storefront/.env.local
```

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` | Medusa publishable API key | `pk_...` |
| `NEXT_PUBLIC_MEDUSA_BACKEND_URL` | Medusa backend URL | `http://localhost:9000` |
| `NEXT_PUBLIC_DEFAULT_REGION` | Default region/country | `in` |
| `NEXT_PUBLIC_BASE_URL` | Storefront URL | `http://localhost:8000` |
| `NEXT_PUBLIC_STRIPE_KEY` | Stripe publishable key | Optional |

---

# Development Commands

### Start development

```bash
pnpm dev
```

### Start backend

```bash
pnpm run backend:dev
```

### Start storefront

```bash
pnpm run storefront:dev
```

### Build

```bash
pnpm run build
```

### Start production

```bash
pnpm run start
```

### Lint

```bash
pnpm run lint
```

### Run tests

```bash
pnpm run test
```

---

# Database Commands

Generate migrations for a custom Medusa module:

```bash
cd apps/backend
pnpm exec medusa db:generate <module-name>
```

Run migrations:

```bash
cd apps/backend
pnpm exec medusa db:migrate
```

Create an admin user:

```bash
cd apps/backend
pnpm exec medusa user -e admin@example.com -p YOUR_PASSWORD
```

---

# Customization

LOWKEY is designed to be extended beyond the default Medusa functionality.

Custom functionality can be added through:

```text
apps/backend/src/
├── admin/
├── api/
├── jobs/
├── links/
├── modules/
├── subscribers/
└── workflows/
```

### API Routes

Backend API routes use Medusa's file-based routing system.

Example:

```text
apps/backend/src/api/store/products/route.ts
```

### Workflows

Business logic should be implemented using Medusa workflows rather than putting complex logic directly inside route handlers.

### Modules

Custom business domains can be implemented as Medusa modules containing:

- Models
- Services
- Migrations
- Module configuration

---

# Architecture

```text
                    ┌─────────────────────┐
                    │       LOWKEY        │
                    │     Storefront      │
                    │      Next.js        │
                    └──────────┬──────────┘
                               │
                               │ Medusa API
                               ▼
                    ┌─────────────────────┐
                    │   Medusa Backend    │
                    │      Node.js        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        ┌──────────┐     ┌───────────┐    ┌──────────┐
        │PostgreSQL│     │   Redis   │    │ Payments │
        └──────────┘     └───────────┘    └──────────┘
```

---

# Security

Do not commit sensitive configuration.

The following files should remain local:

```text
.env
.env.local
```

Never commit:

- Database passwords
- JWT secrets
- Cookie secrets
- Stripe secret keys
- API tokens
- Publishable/private credentials that should remain secret
- Production credentials

Use environment variables for deployment configuration.

---

# License

LOWKEY uses Medusa as its commerce engine.

Medusa is released under the **MIT License**.

Copyright (c) 2022 Medusa.

The original Medusa license and copyright notice must remain with applicable Medusa source code.

For the complete license, see:

https://github.com/medusajs/medusa/blob/develop/LICENSE

---

# Credits

Built with:

- Medusa
- Next.js
- React
- PostgreSQL
- Node.js
- Turborepo

Medusa documentation:

https://docs.medusajs.com

Medusa website:

https://medusajs.com

---

# Project Status

LOWKEY is currently under active development.

The platform is being developed with a focus on:

- Modern ecommerce UX
- Scalable commerce infrastructure
- Product management
- Customer accounts
- Checkout
- Payments
- Inventory
- Order management
- Custom administration
- Production deployment

---

<p align="center">
  Built with Medusa and Next.js
</p>
<p align="center">
  <strong>LOWKEY</strong>
</p>