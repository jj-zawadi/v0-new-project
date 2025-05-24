"use server"

import { supabase } from "@/lib/supabase"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return { success: false, error: "Valid email address is required" }
  }

  try {
    // Check if email already exists
    const { data: existing } = await supabase.from("newsletter_subscribers").select("email").eq("email", email).single()

    if (existing) {
      return { success: false, error: "Email already subscribed" }
    }

    // Insert newsletter subscription
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email, subscribed_at: new Date().toISOString() }])

    if (error) {
      console.error("Error subscribing to newsletter:", error)
      return { success: false, error: "Failed to subscribe. Please try again." }
    }

    return { success: true, message: "Successfully subscribed to our newsletter!" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
