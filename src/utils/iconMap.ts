import {
  Ban,
  CalendarCheck2,
  CalendarX2,
  Clock,
  LayoutGrid,
  Link2,
  MessageSquareWarning,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  MessageSquareWarning,
  CalendarX2,
  Users,
  Ban,
  Clock,
  CalendarCheck2,
  ShieldCheck,
  LayoutGrid,
  Link2,
  TrendingUp,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? CalendarCheck2;
}
