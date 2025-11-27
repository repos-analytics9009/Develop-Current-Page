# REPOS - Fuel and Asset Management Platform

A modern, responsive web application for fuel and asset management built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Customer Profile Form** - Interactive onboarding with industry selection
- **Dashboard** - Real-time metrics for fuel inventory, consumption, and credit
- **Orders Management** - Track and manage fuel orders
- **Asset Management** - Monitor assets across categories (DG Sets, Infrastructure, Heavy Vehicles, etc.)
- **Analytics** - Comprehensive fuel purchase, consumption, and payment analytics
- **Payments Tracking** - Manage payment history and outstanding credits
- **Responsive Design** - Optimized for desktop and mobile devices

## 📋 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation and routing
- **Tailwind CSS v4** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Sonner** - Toast notifications
- **ShadCN UI** - Component library

## 🎨 Project Structure

```
/
├── components/          # Reusable React components
│   ├── ui/             # ShadCN UI components
│   ├── Header.tsx      # Application header
│   ├── NavigationPanel.tsx  # Sidebar navigation
│   ├── CustomerProfileForm.tsx  # Landing page form
│   └── ...             # Other components
├── imports/            # Figma import components
├── utils/              # Utility functions
│   ├── routes.ts       # React Router configuration
│   └── assetDistribution.ts  # Asset calculation logic
├── styles/             # Global styles
│   └── globals.css     # Tailwind and custom CSS
└── App.tsx             # Main application entry point
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd repos-platform
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📱 Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | CustomerProfileForm | Landing page with profile form |
| `/dashboard` | HomePageFinal | Main dashboard with metrics |
| `/orders` | OrdersWithNavigation | Orders management |
| `/assets` | AssetWithNavigation | Asset tracking |
| `/payments` | PaymentsWithNavigation | Payment history |
| `/analytics` | AnalyticsWithNavigation | Analytics dashboard |

## 💾 Data Storage

Currently, the application uses **localStorage** for data persistence:

- **Customer Profile**: Stored under `"customerProfile"` key
- **Analytics Data**: Accessed via `window.__analyticsData`

### Example Data Structure

```json
{
  "companyName": "Early Bird Logistics Pvt Ltd",
  "industry": "Logistics",
  "contactPerson": "John Doe",
  "mobile": "+91 98765 43210",
  "email": "contact@company.com",
  "monthlyConsumption": "9,00,000",
  "monthlyPurchased": "10,00,000",
  "totalAssetCount": "125",
  "totalBusinessSites": "5",
  "monthlyCreditWithPartner": "1,00,00,000"
}
```

## 🔌 Backend Integration

This is a **frontend-only** application. For backend integration instructions, see [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md).

Key integration points:
- Customer profile submission
- Dashboard metrics API
- Orders CRUD operations
- Asset management
- Analytics data fetching
- Payment tracking

## 🎯 Key Features Explained

### 1. Dynamic Asset Distribution
Assets are automatically distributed across categories based on the total count:
- **DG Set**: 35%
- **Infra Equip**: 25%
- **Heavy Veh**: 20%
- **Machinery**: 15%
- **Farm Equip**: 5%
- **DATUMs**: Fixed at 3

### 2. Real-time Analytics
All analytics tabs display actual values from the customer profile form:
- Fuel Purchase Analytics
- Fuel Consumption Analytics
- Fuel Payment Analytics

### 3. Form Auto-navigation
After submitting the customer profile form, users are automatically redirected to the dashboard.

### 4. Industry Selection
Visual card-based industry selection with 5 options:
- Infrastructure
- Mining
- Logging
- Manufacturing
- Other (with custom input)

## 🎨 Design System

### Colors
- **Primary**: `#059492` (Teal)
- **Background**: `#EBEEF1` (Light Gray)
- **Text**: `#172b4d` (Dark Blue)
- **Border**: `#C1C7D0` (Gray)

### Typography
- **Font Family**: Poppins, Montserrat
- Font sizes and weights are pre-configured in `globals.css`

### Components
All UI components from ShadCN are available in `/components/ui/`

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Adding New Features

1. Create components in `/components/`
2. Add routes in `/utils/routes.ts`
3. Update navigation in `/components/NavigationPanel.tsx`
4. Follow existing patterns for data access (localStorage)

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain component modularity

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `/dist` folder, ready for deployment.

## 🌐 Deployment

Deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

## 📄 License

[Add your license here]

## 🤝 Contributing

[Add contribution guidelines here]

## 📞 Support

For questions or issues, please contact [your contact information]

---

**Note**: This is a frontend-only application. See `INTEGRATION_GUIDE.md` for backend integration instructions.
