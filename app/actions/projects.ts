"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const category = formData.get("category") as string
  const location = formData.get("location") as string
  const year = Number.parseInt(formData.get("year") as string)
  const imageUrl = formData.get("imageUrl") as string
  const featured = formData.get("featured") === "true"

  try {
    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          title,
          description,
          category,
          location,
          year,
          image_url: imageUrl,
          featured,
        },
      ])
      .select()

    if (error) {
      console.error("Error creating project:", error)
      return { success: false, error: "Failed to create project" }
    }

    revalidatePath("/gallery")
    revalidatePath("/")
    return { success: true, data: data[0] }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function updateProject(id: string, formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const category = formData.get("category") as string
  const location = formData.get("location") as string
  const year = Number.parseInt(formData.get("year") as string)
  const imageUrl = formData.get("imageUrl") as string
  const featured = formData.get("featured") === "true"

  try {
    const { data, error } = await supabase
      .from("projects")
      .update({
        title,
        description,
        category,
        location,
        year,
        image_url: imageUrl,
        featured,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()

    if (error) {
      console.error("Error updating project:", error)
      return { success: false, error: "Failed to update project" }
    }

    revalidatePath("/gallery")
    revalidatePath("/")
    return { success: true, data: data[0] }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function deleteProject(id: string) {
  try {
    const { error } = await supabase.from("projects").delete().eq("id", id)

    if (error) {
      console.error("Error deleting project:", error)
      return { success: false, error: "Failed to delete project" }
    }

    revalidatePath("/gallery")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
