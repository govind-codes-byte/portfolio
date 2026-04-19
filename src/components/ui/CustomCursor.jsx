import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if ('ontouchstart' in window) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let animFrame

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setIsVisible(true)

      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      animFrame = requestAnimationFrame(animateRing)
    }

    const handleMouseEnterLink = () => setIsHovering(true)
    const handleMouseLeaveLink = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)
    animFrame = requestAnimationFrame(animateRing)

    // Track hoverable elements
    const hoverables = document.querySelectorAll('a, button, [data-hover]')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterLink)
      el.addEventListener('mouseleave', handleMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'scale-0' : 'scale-100'}`}
        style={{ transition: 'transform 0.2s ease, opacity 0.3s' }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'scale-[2.5] border-primary/80' : 'scale-100'}`}
        style={{ transition: 'transform 0.3s ease, opacity 0.3s, border-color 0.3s' }}
      />
    </>
  )
}

export default CustomCursor
