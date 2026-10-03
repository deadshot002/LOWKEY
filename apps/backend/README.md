<p align="center">
  <a href="https://github.com/deadshot002">
    <img src="https://img.shields.io/badge/LOWKEY-Ecommerce-black.svg" alt="LOWKEY Ecommerce" />
  </a>
</p>

<h1 align="center">
  LOWKEY
</h1>

<h4 align="center">
  Modern Ecommerce Platform
</h4>

<p align="center">
  A customizable direct-to-consumer ecommerce platform built with Medusa and Next.js.
</p>

<p align="center">
  <a href="https://github.com/deadshot002">
    <img src="https://img.shields.io/badge/Project-LOWKEY-black.svg" alt="LOWKEY" />
  </a>
  <a href="https://github.com/medusajs/medusa">
    <img src="https://img.shields.io/badge/Powered%20by-Medusa-8B5CF6.svg" alt="Powered by Medusa" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16-black.svg" alt="Next.js" />
  <img src="https://img.shields.io/badge/Node.js-20%2B-green.svg" alt="Node.js 20+" />
  <img src="https://img.shields.io/badge/PostgreSQL-15%2B-blue.svg" alt="PostgreSQL 15+" />
</p>

---

## About LOWKEY

**LOWKEY** is a modern direct-to-consumer ecommerce platform built for selling products online.

The platform uses **Medusa** as the commerce backend and **Next.js** for the storefront, providing a flexible foundation for product management, shopping carts, checkout, customers, orders, inventory, payments, and other ecommerce functionality.

The project is designed to be highly customizable and can be extended with custom modules, workflows, API routes, administrative functionality, and storefront components.

---

## Features

- Product catalog
- Product categories
- Product variants
- Brand management
- Product search
- Shopping cart
- Promotion codes
- Checkout
- Shipping
- Payment integration
- Customer accounts
- Customer addresses
- Order history
- Inventory management
- Order management
- Multi-region support
- Custom Medusa workflows
- Custom API routes
- Custom backend modules
- Medusa Admin dashboard
- Next.js storefront
- PostgreSQL database

---

## Technology Stack

| Technology | Purpose |
|---|---|
| **Medusa** | Ecommerce backend |
| **Next.js** | Storefront |
| **React** | User interface |
| **TypeScript** | Application development |
| **PostgreSQL** | Database |
| **Node.js** | Runtime |
| **Turborepo** | Monorepo |
| **pnpm** | Package manager |

---

## Compatibility

LOWKEY is built using **Medusa v2** and is intended to work with compatible versions of the Medusa ecosystem.

The project currently uses the Medusa DTC Starter architecture with a backend application and optional Next.js storefront.

---

# Getting Started

## Prerequisites

Before running LOWKEY locally, install:

- [Node.js](https://nodejs.org/) v20+
- [PostgreSQL](https://www.postgresql.org/) v15+
- [pnpm](https://pnpm.io/) v10+
- Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/deadshot002/LOWKEY.git
cd LOWKEY
```

Install dependencies:

```bash
pnpm install
```

---

## 2. Configure the Backend

Create the backend environment file:

```bash
cp apps/backend/.env.template apps/backend/.env
```

Configure your PostgreSQL connection in:

```text
apps/backend/.env
```

Example:

```env
DATABASE_URL=postgres://postgres:YOUR_PASSWORD@localhost:5432/lowkey
```

Additional backend configuration may include:

```env
STORE_CORS=
ADMIN_CORS=
AUTH_CORS=
REDIS_URL=
JWT_SECRET=
COOKIE_SECRET=
```

Do not commit `.env` files or expose secret values.

---

## 3. Set Up the Database

Create the LOWKEY PostgreSQL database:

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

Create a Medusa admin account:

```bash
pnpm exec medusa user -e admin@example.com -p YOUR_PASSWORD
```

Replace the email and password with your own credentials.

---

## 5. Start the Backend

From the backend directory:

```bash
pnpm dev
```

The backend will normally run at:

```text
http://localhost:9000
```

The Medusa Admin dashboard is available at:

```text
http://localhost:9000/app
```

---

## 6. Configure the Storefront

If the repository contains `apps/storefront`, create the storefront environment file:

```bash
cp apps/storefront/.env.template apps/storefront/.env.local
```

Configure:

```env
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_...
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_DEFAULT_REGION=in
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

Your publishable API key can be obtained from the Medusa Admin dashboard.

---

## 7. Start the Storefront

From the storefront directory:

```bash
cd apps/storefront
pnpm dev
```

The LOWKEY storefront will be available at:

```text
http://localhost:8000
```

If both applications are configured in the root workspace, you can also start the development environment from the repository root:

```bash
pnpm dev
```

---

# Project Structure

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

> `apps/storefront/` is optional. If it does not exist, LOWKEY can run as a backend-only Medusa application.

---

# Architecture

```text
                         LOWKEY
                           │
                           ▼
                ┌────────────────────┐
                │  Next.js Storefront │
                └─────────┬──────────┘
                          │
                     Medusa API
                          │
                          ▼
                ┌────────────────────┐
                │   Medusa Backend   │
                └─────────┬──────────┘
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
        PostgreSQL      Redis       Payments
```

---

# Development

### Start all applications

```bash
pnpm dev
```

### Backend only

```bash
pnpm run backend:dev
```

### Storefront only

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

### Test

```bash
pnpm run test
```

---

# Database

Generate a migration for a custom module:

```bash
cd apps/backend
pnpm exec medusa db:generate <module-name>
```

Run migrations:

```bash
pnpm exec medusa db:migrate
```

Create an admin user:

```bash
pnpm exec medusa user -e admin@example.com -p YOUR_PASSWORD
```

---

# Custom Development

LOWKEY can be extended using Medusa's modular architecture.

Backend customization lives under:

```text
apps/backend/src/
```

### API Routes

Custom API routes use Medusa's file-based routing:

```text
apps/backend/src/api/
```

For example:

```text
apps/backend/src/api/store/products/route.ts
```

### Workflows

Business logic should be implemented through Medusa workflows and workflow steps.

```text
apps/backend/src/workflows/
```

### Custom Modules

Custom business functionality can be implemented as Medusa modules:

```text
apps/backend/src/modules/
```

A module can contain:

- Models
- Services
- Migrations
- Module configuration

### Admin Customization

Admin dashboard extensions can be added under:

```text
apps/backend/src/admin/
```

---

# Security

Never commit sensitive environment files.

Do not commit:

```text
.env
.env.local
```

Never expose:

- Database passwords
- JWT secrets
- Cookie secrets
- Stripe secret keys
- Private API keys
- Production credentials

Use environment variables for local and production configuration.

---

# Medusa

LOWKEY uses [Medusa](https://medusajs.com/) as its commerce engine.

Medusa provides the underlying commerce modules and infrastructure used by LOWKEY, including functionality for products, carts, customers, orders, payments, fulfillment, regions, and other ecommerce primitives.

Learn more:

- [Medusa Documentation](https://docs.medusajs.com/)
- [Medusa GitHub](https://github.com/medusajs/medusa)
- [Medusa Architecture](https://docs.medusajs.com/learn/introduction/architecture)
- [Medusa Commerce Modules](https://docs.medusajs.com/learn/fundamentals/modules/commerce-modules)

---

# License

LOWKEY contains software derived from and built using Medusa.

Medusa is released under the **MIT License**.

Copyright (c) 2022 Medusa.

The applicable original copyright and MIT license notice must be retained with copies or substantial portions of the applicable Medusa-licensed software.

See the original Medusa license:

https://github.com/medusajs/medusa/blob/develop/LICENSE

---

# Project Status

LOWKEY is currently under active development.

Current development focuses on:

- Ecommerce storefront
- Product management
- Cart and checkout
- Customer accounts
- Order management
- Inventory
- Payments
- Admin functionality
- Custom backend functionality
- Production deployment

---

<p align="center">
  <strong>LOWKEY</strong>
</p>

<p align="center">
  Built with Next.js and Medusa
</p>