# Dynamic Breadcrumb System

This project includes a dynamic breadcrumb system that automatically generates breadcrumbs based on the current route, with support for custom configurations.

## Features

- **Automatic Route Detection**: Breadcrumbs are automatically generated from the current URL path
- **Custom Labels**: Configure custom labels for route segments
- **Custom Configurations**: Override default behavior for specific routes
- **Responsive Design**: Hides first breadcrumb on mobile devices
- **Accessibility**: Proper ARIA labels and semantic HTML

## Usage

### Basic Usage

Simply import and use the `DynamicBreadcrumb` component in any page:

```tsx
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

export default function MyPage() {
  return (
    <div>
      <DynamicBreadcrumb />
      {/* Your page content */}
    </div>
  );
}
```

### Configuration

#### 1. Route Labels

Edit `src/lib/breadcrumb-config.ts` to customize route segment labels:

```typescript
export const routeLabels: Record<string, string> = {
  dashboard: "Dashboard",
  about: "About",
  missions: "Missions",
  login: "Login",
  // Add more mappings as needed
};
```

#### 2. Custom Breadcrumb Configurations

For specific routes that need custom breadcrumb behavior, add configurations:

```typescript
export const customBreadcrumbs: Record<string, BreadcrumbConfig[]> = {
  "/dashboard": [
    { label: "Home", href: "/" },
    { label: "Dashboard", isCurrentPage: true },
  ],
  "/about/missions": [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Missions", isCurrentPage: true },
  ],
};
```

## How It Works

1. **Route Detection**: Uses Next.js `usePathname()` hook to get the current route
2. **Custom Check**: First checks for custom breadcrumb configurations
3. **Default Generation**: Falls back to automatic generation based on URL segments
4. **Label Mapping**: Applies custom labels from the configuration
5. **Rendering**: Renders breadcrumbs with proper navigation links

## Examples

### Automatic Generation

For a route like `/about/missions`, the system automatically generates:
- Home → About → Missions

### Custom Configuration

You can override the automatic generation for specific routes by adding them to `customBreadcrumbs`.

## File Structure

```
src/
├── components/
│   ├── dynamic-breadcrumb.tsx    # Main dynamic breadcrumb component
│   └── ui/
│       └── breadcrumb.tsx        # Base breadcrumb UI components
└── lib/
    └── breadcrumb-config.ts      # Configuration and utilities
```

## Customization

### Adding New Routes

1. Add route labels to `routeLabels` in `breadcrumb-config.ts`
2. Optionally add custom configurations to `customBreadcrumbs`

### Styling

The breadcrumb uses the existing UI components from `@/components/ui/breadcrumb`. You can customize the styling by modifying the base components or adding CSS classes.

### Responsive Behavior

The first breadcrumb item is hidden on mobile devices (`hidden md:block`). You can modify this behavior in the `DynamicBreadcrumb` component. 