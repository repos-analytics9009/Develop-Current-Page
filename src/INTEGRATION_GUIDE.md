# Backend Integration Guide

This REPOS web application is currently **frontend-only** and uses **localStorage** for data persistence. This guide will help developers integrate it with a backend API.

## Current Architecture

### Data Storage
- All form data is stored in **localStorage** under the key `"customerProfile"`
- Data structure:
```json
{
  "companyName": "string",
  "industry": "string",
  "contactPerson": "string",
  "mobile": "string",
  "email": "string",
  "monthlyConsumption": "string",
  "monthlyPurchased": "string",
  "totalBusinessSites": "string",
  "totalAssetCount": "string",
  "monthlyCreditWithPartner": "string"
}
```

### Application Flow
1. **Landing Page** (`/`) - Customer Profile Form
2. After form submission → Data saved to localStorage → Navigate to `/dashboard`
3. **Dashboard** (`/dashboard`) - Reads from localStorage to display metrics
4. **Other Pages**: Orders, Assets, Payments, Analytics - All read from localStorage

## Backend Integration Points

### 1. Customer Profile Form (`/components/CustomerProfileForm.tsx`)

**Current Implementation:**
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const industryValue = formData.industry === "Other" ? formData.otherIndustry : formData.industry;
  const localStorageData = {
    ...formData,
    industry: industryValue,
  };
  
  localStorage.setItem("customerProfile", JSON.stringify(localStorageData));
  toast.success("Profile saved successfully!");
  
  setTimeout(() => {
    navigate("/dashboard");
  }, 500);
};
```

**Recommended Backend Integration:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const industryValue = formData.industry === "Other" ? formData.otherIndustry : formData.industry;
  const submissionData = {
    company_name: formData.companyName,
    industry: industryValue,
    contact_person: formData.contactPerson,
    mobile_number: formData.mobile,
    business_email: formData.email,
    monthly_consumption: formData.monthlyConsumption,
    monthly_purchased: formData.monthlyPurchased,
    total_business_sites: formData.totalBusinessSites,
    total_asset_count: formData.totalAssetCount,
    monthly_credit_with_partner: formData.monthlyCreditWithPartner,
  };
  
  try {
    const response = await fetch("YOUR_API_ENDPOINT/customer/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_AUTH_TOKEN", // Add authentication
      },
      body: JSON.stringify(submissionData),
    });
    
    if (!response.ok) {
      throw new Error("Failed to submit profile");
    }
    
    const result = await response.json();
    
    // Optionally still save to localStorage for offline access
    localStorage.setItem("customerProfile", JSON.stringify(submissionData));
    
    toast.success("Profile submitted successfully!");
    navigate("/dashboard");
  } catch (error) {
    console.error("Submission error:", error);
    toast.error("Failed to submit profile. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

### 2. Dashboard Data (`/imports/HomePageFinal.tsx`)

**Current Implementation:**
```typescript
function getCustomerProfile() {
  const storedData = localStorage.getItem("customerProfile");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return {
    companyName: "Early Bird Logistics Pvt Ltd",
    monthlyConsumption: "9,00,000",
    monthlyPurchased: "10,00,000",
    totalAssetCount: "125",
    totalBusinessSites: "5",
    monthlyCreditWithPartner: "1,00,00,000",
  };
}
```

**Recommended Backend Integration:**
```typescript
// Use React Query or similar for data fetching
import { useQuery } from '@tanstack/react-query';

function useDashboardData() {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: async () => {
      const response = await fetch('YOUR_API_ENDPOINT/dashboard/metrics', {
        headers: {
          'Authorization': 'Bearer YOUR_AUTH_TOKEN',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      
      return response.json();
    },
    // Fallback to localStorage if offline
    placeholderData: () => {
      const stored = localStorage.getItem('customerProfile');
      return stored ? JSON.parse(stored) : null;
    },
  });
}
```

### 3. Analytics Data (`/components/AnalyticsWithNavigation.tsx`)

**Current Implementation:**
- Reads from `window.__analyticsData` object which is populated from localStorage

**Recommended Backend Integration:**
- Replace with API calls to fetch real analytics data
- Implement endpoints for:
  - `/api/analytics/fuel-purchase`
  - `/api/analytics/fuel-consumption`
  - `/api/analytics/fuel-payments`

### 4. Asset Distribution (`/utils/assetDistribution.ts`)

**Current Implementation:**
- Calculates asset distribution client-side based on total asset count

**Recommended Backend Integration:**
- Fetch actual asset counts from backend
- Endpoint: `/api/assets/distribution`

## API Endpoints to Implement

### Customer Management
- `POST /api/customer/profile` - Create/Update customer profile
- `GET /api/customer/profile` - Get customer profile
- `GET /api/customer/dashboard` - Get dashboard metrics

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders` - Create new order
- `PATCH /api/orders/:id` - Update order status

### Assets
- `GET /api/assets` - Get all assets
- `GET /api/assets/distribution` - Get asset distribution
- `GET /api/assets/:id` - Get asset details

### Payments
- `GET /api/payments` - Get all payments
- `GET /api/payments/:id` - Get payment details

### Analytics
- `GET /api/analytics/fuel-purchase` - Fuel purchase analytics
- `GET /api/analytics/fuel-consumption` - Fuel consumption analytics
- `GET /api/analytics/fuel-payments` - Fuel payment analytics

## Authentication

The application currently has no authentication. Add:

1. **Login/Signup Pages**
2. **JWT Token Management** - Store in httpOnly cookies or secure localStorage
3. **Protected Routes** - Add route guards to check authentication
4. **API Authentication** - Add Authorization headers to all requests

Example protected route:
```typescript
import { Navigate } from 'react-router';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = !!localStorage.getItem('authToken');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}
```

## State Management Recommendations

Consider using:
- **React Query / TanStack Query** - For server state management
- **Zustand / Redux** - For client state management
- **Context API** - For simple shared state

## Error Handling

Add proper error handling for:
- Network failures
- API errors
- Validation errors
- Session expiration

## Environment Variables

Create a `.env` file for API configuration:
```env
VITE_API_BASE_URL=https://your-api-domain.com
VITE_API_TIMEOUT=5000
```

## Testing

Before deploying with backend:
1. Test all API endpoints individually
2. Test error scenarios (network issues, invalid data)
3. Test offline functionality if implementing
4. Load testing for performance

## Migration Checklist

- [ ] Set up backend API
- [ ] Implement authentication system
- [ ] Replace localStorage calls with API calls
- [ ] Add error handling and loading states
- [ ] Implement data caching strategy
- [ ] Add proper TypeScript types for API responses
- [ ] Update forms to handle server-side validation
- [ ] Implement real-time updates (if needed)
- [ ] Add analytics tracking
- [ ] Security audit (CORS, XSS, CSRF protection)

## Contact

For questions about the frontend implementation, refer to the component documentation in the codebase.
