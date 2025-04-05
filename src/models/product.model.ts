import { Alter25BadgeProps } from '@/models/badge.model';

export interface Product {
  id: string;
  name: string;
	badges?: Alter25BadgeProps[];
	discountPercent?: number;
	price: number;
	regularPrice?: number;
	pastMonthSales?: number;
  description: string;
	included: string[];
	findings: string[];
	findingsList: { text: string; icon: React.ElementType; }[];
  testimonials?: {
    name: string;
    title: string;
    description: string;
    badges: Alter25BadgeProps[];
  }[];
}
