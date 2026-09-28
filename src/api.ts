import type { ApiListResponse, AuthUser, Listing, NewListingPayload } from "./types";

const request = async <T,>(path: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(path, init);
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.json() as Promise<T>;
};

export const fetchListings = (params: URLSearchParams) => request<ApiListResponse>(`/api/v1/listings?${params}`);
export const fetchListing = (slug: string) => request<{ data: Listing }>(`/api/v1/listings/${slug}`);
export const login = (email: string, password: string) => request<{ data: { accessToken: string; user: AuthUser } }>("/api/v1/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});
export const fetchMyListings = (token: string) => request<{ data: Listing[]; meta: { total: number } }>("/api/v1/me/listings", { headers: { Authorization: `Bearer ${token}` } });
export const createListing = (token: string, payload: NewListingPayload) => request<{ data: Listing }>("/api/v1/listings", {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
  body: JSON.stringify(payload),
});
