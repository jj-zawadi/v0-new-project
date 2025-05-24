import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const featured = searchParams.get("featured")
  const inStock = searchParams.get("in_stock")

  try {
    let query = supabase.from("products").select("*")

    if (category) {
      query = query.eq("category", category)
    }

    if (featured === "true") {
      query = query.eq("featured", true)
    }

    if (inStock === "true") {
      query = query.eq("in_stock", true)
    }

    query = query.order("created_at", { ascending: false })

    const { data: products, error } = await query

    if (error) {
      console.error("Error fetching products:", error)
      return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
    }

    return NextResponse.json(products)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
