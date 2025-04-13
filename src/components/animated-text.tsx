"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100) // Adjust speed here

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <h1 className={className}>
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  )
}
