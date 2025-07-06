// utils/getLucideIcon.ts
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function getLucideIcon(iconName: string) {
    if (!iconName || typeof iconName !== 'string') {
        return undefined;
    }

    try {
        // Attempt to resolve the icon by its given name first.
        let icon = LucideIcons[iconName as keyof typeof LucideIcons];

        // If not found, try a common "2" suffixed variant (e.g. FileCheck → FileCheck2)
        if (!icon && !iconName.endsWith("2")) {
            icon = LucideIcons[`${iconName}2` as keyof typeof LucideIcons];
        }

        // If still not found, try some common fallbacks
        if (!icon) {
            const fallbackMap: Record<string, string> = {
                'HandCoins': 'Coins',
                'IndianRupee': 'DollarSign',
                'Building2': 'Building',
                'MoreHorizontal': 'MoreHorizontal',
                'Video': 'Video',
                'Monitor': 'Monitor',
                'Calculator': 'Calculator',
                'Receipt': 'Receipt',
                'Shield': 'Shield',
                'FileCheck': 'FileCheck',
                'Rocket': 'Rocket',
                'BookOpen': 'BookOpen',
                'Users': 'Users',
                'Mail': 'Mail',
                'Home': 'Home',
                'Info': 'Info'
            };

            const fallbackName = fallbackMap[iconName];
            if (fallbackName) {
                icon = LucideIcons[fallbackName as keyof typeof LucideIcons];
            }
        }

        return icon as LucideIcon | undefined;
    } catch (error) {
        console.warn(`Failed to load icon "${iconName}":`, error);
        return undefined;
    }
}


export function getIcon(name: string) {
    return getLucideIcon(name);
}
