import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Project {
  id: string
  title: string
  description: string | null
  category: string
  location: string | null
  year: number | null
  image_url: string | null
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  description: string | null
  category: string
  price_starting_from: number | null
  features: string[] | null
  image_url: string | null
  active: boolean
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  client_role: string | null
  quote: string
  rating: number | null
  project_type: string | null
  image_url: string | null
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description: string | null
  category: string
  price: number
  style: string | null
  color: string | null
  image_url: string | null
  in_stock: boolean
  featured: boolean
  created_at: string
  updated_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string | null
  image_url: string | null
  email: string | null
  linkedin_url: string | null
  active: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string | null
  service_interest: string | null
  message: string | null
  status: string
  created_at: string
  updated_at: string
}
