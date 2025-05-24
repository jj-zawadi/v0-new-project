import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { data: project, error } = await supabase.from("projects").select("*").eq("id", params.id).single()

    if (error) {
      console.error("Error fetching project:", error)
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()

    const { data: project, error } = await supabase.from("projects").update(body).eq("id", params.id).select().single()

    if (error) {
      console.error("Error updating project:", error)
      return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
