"use client"

import { useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions/contact"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [serviceInterest, setServiceInterest] = useState("")

  return (
    <div>
      {state?.success && (
        <div className="mb-6 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle className="h-5 w-5" />
          <p>{state.message}</p>
        </div>
      )}

      {state?.error && (
        <div className="mb-6 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-400">
          <AlertCircle className="h-5 w-5" />
          <p>{state.error}</p>
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="Enter your email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceInterest">Epoxy Service of Interest</Label>
          <Select name="serviceInterest" value={serviceInterest} onValueChange={setServiceInterest}>
            <SelectTrigger>
              <SelectValue placeholder="Select an epoxy service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="epoxy-flooring">Epoxy Flooring</SelectItem>
              <SelectItem value="epoxy-furniture">Custom Epoxy Furniture</SelectItem>
              <SelectItem value="epoxy-walls">Epoxy Wall Finishes</SelectItem>
              <SelectItem value="epoxy-accessories">Epoxy Accessories</SelectItem>
              <SelectItem value="consultation">Free Consultation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Project Details</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your epoxy project - area size, preferred colors, timeline, etc."
            rows={5}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Submitting..." : "Book Consultation"}
        </Button>
      </form>
    </div>
  )
}
