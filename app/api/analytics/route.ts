import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Get analytics data
    const [
      { count: totalProjects },
      { count: totalServices },
      { count: totalTestimonials },
      { count: totalContacts },
      { data: recentProjects },
      { data: featuredProjects },
    ] = await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase.from("services").select("*", { count: "exact", head: true }),
      supabase.from("testimonials").select("*", { count: "exact", head: true }),
      supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
      supabase.from("projects").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("projects").select("*").eq("featured", true).limit(3),
    ])

    const analytics = {
      totals: {
        projects: totalProjects || 0,
        services: totalServices || 0,
        testimonials: totalTestimonials || 0,
        contacts: totalContacts || 0,
      },
      recentProjects: recentProjects || [],
      featuredProjects: featuredProjects || [],
    }

    return NextResponse.json(analytics)
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
  }
}
