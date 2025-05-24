import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  try {
    let query = supabase.from("services").select("*").eq("active", true)

    if (category) {
      query = query.eq("category", category)
    }

    query = query.order("price_starting_from", { ascending: true })

    const { data: services, error } = await query

    if (error) {
      console.error("Error fetching services:", error)
      return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 })
    }

    return NextResponse.json(services)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
