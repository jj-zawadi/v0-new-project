"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const serviceInterest = formData.get("serviceInterest") as string
  const message = formData.get("message") as string

  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone || null,
          service_interest: serviceInterest || null,
          message: message || null,
          status: "new",
        },
      ])
      .select()

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, error: "Failed to submit form. Please try again." }
    }

    revalidatePath("/contact")
    return { success: true, message: "Thank you for your message! We'll get back to you within 24 hours." }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
