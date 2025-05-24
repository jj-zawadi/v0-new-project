import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 })
    }

    // Check if email already exists
    const { data: existing } = await supabase.from("newsletter_subscribers").select("email").eq("email", email).single()

    if (existing) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 400 })
    }

    // Insert newsletter subscription
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email, subscribed_at: new Date().toISOString() }])
      .select()

    if (error) {
      console.error("Error subscribing to newsletter:", error)
      return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to our newsletter!",
    })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "An unexpected error occurred. Please try again." }, { status: 500 })
  }
}
