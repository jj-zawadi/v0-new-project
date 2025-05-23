"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  location: string
  category: string
  year: string
  imageSrc: string
}

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

  // Function to determine column span for masonry layout
  const getColumnSpan = (index: number) => {
    // Create a pattern for column spans to create a masonry effect
    const pattern = index % 5
    if (pattern === 0 || pattern === 3) return "md:col-span-2"
    return "md:col-span-1"
  }

  // Function to determine row span for masonry layout
  const getRowSpan = (index: number) => {
    // Create a pattern for row spans to create a masonry effect
    const pattern = index % 5
    if (pattern === 2 || pattern === 4) return "md:row-span-2"
    return "md:row-span-1"
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group cursor-pointer overflow-hidden rounded-lg ${getColumnSpan(index)} ${getRowSpan(index)}`}
            onClick={() => openProject(project, index)}
          >
            <div className="relative h-64 w-full md:h-full">
              <Image
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <div className="w-full transform rounded bg-white/90 p-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:bg-black/80">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
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
                src={selectedProject.imageSrc || "/placeholder.svg"}
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
