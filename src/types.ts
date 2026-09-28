export type Listing = {
  id: string;
  slug: string;
  title: string;
  description: string;
  intent: "SALE" | "RENT";
  category: { name: string; slug: string };
  location: { city: string; township: string };
  price: { amount: number; currency: string; period?: "MONTH" | "WEEK" | "DAY" };
  facts: { bedrooms?: number; bathrooms?: number; floorAreaSqm?: number; landAreaSqm?: number; furnishing?: string };
  amenities: string[];
  images: string[];
  status: "PUBLISHED" | "DRAFT" | "SUBMITTED";
  publishedAt: string;
  ownerRole?: UserRole;
  createdBy?: string;
};

export type ApiListResponse = { data: Listing[]; meta: { total: number } };

export type UserRole = "OWNER" | "AGENT" | "BUYER_RENTER" | "STAFF" | "ADMIN";

export type AuthUser = { email: string; name: string; role: UserRole };

export type NewListingPayload = {
  title: string;
  description: string;
  intent: "SALE" | "RENT";
  category: string;
  city: string;
  township: string;
  priceAmount: number;
  rentPeriod?: "MONTH" | "WEEK" | "DAY";
  bedrooms?: number;
  bathrooms?: number;
  floorAreaSqm?: number;
  landAreaSqm?: number;
  furnishing?: string;
  amenities?: string[];
  imageUrl?: string;
};
