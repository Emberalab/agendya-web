import {
  BookX,
  CalendarCheck2,
  CalendarX,
  Clock,
  LayoutGrid,
  MailCheck,
  MailQuestion,
  MessageSquareWarning,
  Rocket,
  ShieldCheck,
  Smile,
  TrendingDown,
  TrendingUp,
  UserPlus,
  Users,
  type LucideIcon,
} from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  CalendarX,
  BookX,
  MessageSquareWarning,
  Users,
  TrendingDown,
  MailQuestion,
  CalendarCheck2,
  LayoutGrid,
  Clock,
  Smile,
  ShieldCheck,
  TrendingUp,
  UserPlus,
  MailCheck,
  Rocket,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? CalendarCheck2;
}
