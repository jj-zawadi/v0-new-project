import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get("featured")

  try {
    let query = supabase.from("testimonials").select("*")

    if (featured === "true") {
      query = query.eq("featured", true)
    }

    query = query.order("created_at", { ascending: false })

    const { data: testimonials, error } = await query

    if (error) {
      console.error("Error fetching testimonials:", error)
      return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
    }

    return NextResponse.json(testimonials)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
