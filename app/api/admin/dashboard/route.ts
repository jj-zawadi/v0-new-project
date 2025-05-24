import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Get comprehensive dashboard data
    const [
      { count: totalProjects },
      { count: totalServices },
      { count: totalTestimonials },
      { count: totalContacts },
      { count: totalProducts },
      { count: pendingContacts },
      { data: recentContacts },
      { data: featuredProjects },
      { data: topServices },
    ] = await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase.from("services").select("*", { count: "exact", head: true }).eq("active", true),
      supabase.from("testimonials").select("*", { count: "exact", head: true }),
      supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
      supabase.from("products").select("*", { count: "exact", head: true }),
      supabase.from("contact_submissions").select("*", { count: "exact", head: true }).eq("status", "new"),
      supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }).limit(10),
      supabase.from("projects").select("*").eq("featured", true).order("created_at", { ascending: false }),
      supabase.from("services").select("*").eq("active", true).order("price_starting_from", { ascending: true }),
    ])

    const dashboard = {
      stats: {
        totalProjects: totalProjects || 0,
        totalServices: totalServices || 0,
        totalTestimonials: totalTestimonials || 0,
        totalContacts: totalContacts || 0,
        totalProducts: totalProducts || 0,
        pendingContacts: pendingContacts || 0,
      },
      recentContacts: recentContacts || [],
      featuredProjects: featuredProjects || [],
      topServices: topServices || [],
    }

    return NextResponse.json(dashboard)
  } catch (error) {
    console.error("Error fetching dashboard data:", error)
    return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 })
  }
}
