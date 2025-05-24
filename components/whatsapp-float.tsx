"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = "+254757676742"
  const message = "Hello! I'm interested in your epoxy services. Could you please provide more information?"

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Bubble */}
          {isOpen && (
            <div className="absolute bottom-16 right-0 mb-2 w-80 rounded-lg bg-white p-4 shadow-lg border animate-in slide-in-from-bottom-2">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Epoxy & Aesthetic Works</h4>
                    <p className="text-xs text-green-600">Online</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Hi there! 👋 Need help with epoxy flooring, furniture, or accessories? We're here to help!
              </p>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600" onClick={() => setIsOpen(false)}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Chat
                </a>
              </Button>
            </div>
          )}

          {/* Main WhatsApp Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
            aria-label="Contact us on WhatsApp"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
          </Button>

          {/* Pulse Animation */}
          {!isOpen && <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>}
        </div>
      </div>
    </>
  )
}
