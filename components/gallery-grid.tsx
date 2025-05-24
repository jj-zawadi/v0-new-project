"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Project } from "@/lib/supabase"

interface GalleryGridProps {
  projects: Project[]
}

export default function GalleryGrid({ projects }: GalleryGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openProject = (project: Project, index: number) => {
    setSelectedProject(project)
    setCurrentIndex(index)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const goToNext = () => {
    if (currentIndex < projects.length - 1) {
      setSelectedProject(projects[currentIndex + 1])
      setCurrentIndex(currentIndex + 1)
    } else {
      setSelectedProject(projects[0])
      setCurrentIndex(0)
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedProject(projects[currentIndex - 1])
      setCurrentIndex(currentIndex - 1)
    } else {
      setSelectedProject(projects[projects.length - 1])
      setCurrentIndex(projects.length - 1)
    }
  }

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg text-muted-foreground">No projects found in this category.</p>
        <p className="text-sm text-muted-foreground">Check back soon for new projects!</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openProject(project, index)}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={project.image_url || "/placeholder.svg?height=400&width=600"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <div className="w-full transform rounded bg-white/90 p-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:bg-black/80">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={closeProject}>
        {selectedProject && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.category} | {selectedProject.location} | {selectedProject.year}
              </DialogDescription>
            </DialogHeader>
            <div className="relative mt-2 h-[50vh] w-full overflow-hidden rounded-md">
              <Image
                src={
                  selectedProject.image_url ||
                  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-muted-foreground">{selectedProject.description}</p>
            <div className="mt-4 flex justify-between">
              <Button variant="outline" size="icon" onClick={goToPrevious}>
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous project</span>
              </Button>
              <Button variant="outline" size="icon" onClick={goToNext}>
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next project</span>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
