// "use client"

// import React, { useEffect, useRef, useState } from "react"
// import { motion, useSpring } from "framer-motion"

// const DefaultCursorSVG = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={50}
//       height={54}
//       viewBox="0 0 50 54"
//       fill="none"
//       style={{ scale: 0.5 }}
//     >
//       <g filter="url(#filter0_d_91_7928)">
//         <path
//           d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
//           fill="black"
//         />
//         <path
//           d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
//           stroke="white"
//           strokeWidth={2.25825}
//         />
//       </g>
//       <defs>
//         <filter
//           id="filter0_d_91_7928"
//           x={0.602397}
//           y={0.952444}
//           width={49.0584}
//           height={52.428}
//           filterUnits="userSpaceOnUse"
//           colorInterpolationFilters="sRGB"
//         >
//           <feFlood floodOpacity={0} result="BackgroundImageFix" />
//           <feColorMatrix
//             in="SourceAlpha"
//             type="matrix"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//             result="hardAlpha"
//           />
//           <feOffset dy={2.25825} />
//           <feGaussianBlur stdDeviation={2.25825} />
//           <feComposite in2="hardAlpha" operator="out" />
//           <feColorMatrix
//             type="matrix"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
//           />
//           <feBlend
//             mode="normal"
//             in2="BackgroundImageFix"
//             result="effect1_dropShadow_91_7928"
//           />
//           <feBlend
//             mode="normal"
//             in="SourceGraphic"
//             in2="effect1_dropShadow_91_7928"
//             result="shape"
//           />
//         </filter>
//       </defs>
//     </svg>
//   )
// }

// export function SmoothCursor({
//   cursor = <DefaultCursorSVG />,
//   springConfig = {
//     damping: 90,
//     stiffness: 900,
//     mass: 0.1,
//     restDelta: 0.0001,
//   },
// }) {
//   const [enabled, setEnabled] = useState(false)
//   const lastMousePos = useRef({ x: 0, y: 0 })
//   const velocity = useRef({ x: 0, y: 0 })
//   const lastUpdateTime = useRef(Date.now())
//   const previousAngle = useRef(0)
//   const accumulatedRotation = useRef(0)

//   const cursorX = useSpring(0, springConfig)
//   const cursorY = useSpring(0, springConfig)
  
//   const rotation = useSpring(0, {
//     ...springConfig,
//     damping: 60,
//     stiffness: 300,
//   })
  
//   const scale = useSpring(1, {
//     ...springConfig,
//     stiffness: 500,
//     damping: 35,
//   })

//   useEffect(() => {
//     // Check if device has a fine pointer (Laptop/Desktop)
//     const isDesktop = window.matchMedia("(pointer: fine)").matches
//     if (!isDesktop) return
//     setEnabled(true)

//     const updateVelocity = (currentPos) => {
//       const currentTime = Date.now()
//       const deltaTime = currentTime - lastUpdateTime.current

//       if (deltaTime > 0) {
//         velocity.current = {
//           x: (currentPos.x - lastMousePos.current.x) / deltaTime,
//           y: (currentPos.y - lastMousePos.current.y) / deltaTime,
//         }
//       }

//       lastUpdateTime.current = currentTime
//       lastMousePos.current = currentPos
//     }

//     const smoothMouseMove = (e) => {
//       const currentPos = { x: e.clientX, y: e.clientY }
//       updateVelocity(currentPos)

//       const speed = Math.sqrt(
//         Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
//       )

//       cursorX.set(currentPos.x)
//       cursorY.set(currentPos.y)

//       if (speed > 0.1) {
//         const currentAngle =
//           Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90

//         let angleDiff = currentAngle - previousAngle.current
//         if (angleDiff > 180) angleDiff -= 360
//         if (angleDiff < -180) angleDiff += 360
        
//         accumulatedRotation.current += angleDiff
//         rotation.set(accumulatedRotation.current)
//         previousAngle.current = currentAngle

//         // Subtle shrink while moving
//         scale.set(0.95)
//       }
//     }

//     // Handle the "Squeeze" on Click
//     const handleMouseDown = () => scale.set(0.7)
//     const handleMouseUp = () => scale.set(1)

//     let rafId
//     const throttledMouseMove = (e) => {
//       if (rafId) return

//       rafId = requestAnimationFrame(() => {
//         smoothMouseMove(e)
//         rafId = 0
//       })
//     }

//     // Hide default cursor
//     document.body.style.cursor = "none"
//     window.addEventListener("mousemove", throttledMouseMove)
//     window.addEventListener("mousedown", handleMouseDown)
//     window.addEventListener("mouseup", handleMouseUp)

//     return () => {
//       window.removeEventListener("mousemove", throttledMouseMove)
//       window.removeEventListener("mousedown", handleMouseDown)
//       window.removeEventListener("mouseup", handleMouseUp)
//       document.body.style.cursor = "auto"
//       if (rafId) cancelAnimationFrame(rafId)
//     }
//   }, [cursorX, cursorY, rotation, scale])

//   // Don't render on mobile/tablet
//   if (!enabled) return null

//   return (
//     <motion.div
//       style={{
//         position: "fixed",
//         left: cursorX,
//         top: cursorY,
//         translateX: "-50%",
//         translateY: "-50%",
//         rotate: rotation,
//         scale: scale,
//         zIndex: 100,
//         pointerEvents: "none",
//         willChange: "transform",
//       }}
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//     >
//       {cursor}
//     </motion.div>
//   )
// }

// export default SmoothCursor;



// "use client"

// import React, { useEffect, useRef, useState } from "react"
// import { motion, useSpring } from "framer-motion"

// const DefaultCursorSVG = () => {
//   return (
//     <div className="relative">
//       <svg width={30} height={30} viewBox="0 0 50 54" fill="none">
//         <path
//           d="M42.6 41L27.5 6.8C26.7 5 24.2 5 23.4 6.8L7.6 41C6.7 43 8.5 44.8 10.4 44.1L24.3 39C24.9 38.8 25.4 38.8 26 39L39.8 44.1C41.7 44.8 43.5 43 42.6 41Z"
//           fill="black"
//           stroke="white"
//           strokeWidth={2}
//         />
//       </svg>
//     </div>
//   )
// }

// export function SmoothCursor({
//   cursor = <DefaultCursorSVG />,
// }) {
//   const [enabled, setEnabled] = useState(false)
//   const lastMouse = useRef({ x: 0, y: 0 })
//   const velocity = useRef({ x: 0, y: 0 })
//   const prevAngle = useRef(0)
//   const totalRotation = useRef(0)

//   // ⚡ Faster springs (less lag)
//   const cursorX = useSpring(0, { stiffness: 1200, damping: 40 })
//   const cursorY = useSpring(0, { stiffness: 1200, damping: 40 })

//   const rotation = useSpring(0, { stiffness: 400, damping: 30 })
//   const scale = useSpring(1, { stiffness: 600, damping: 25 })

//   const containerRef = useRef(null)

//   useEffect(() => {
//     if (!window.matchMedia("(pointer: fine)").matches) return
//     setEnabled(true)

//     const move = (e) => {
//       const x = e.clientX
//       const y = e.clientY

//       // velocity (simple + fast)
//       velocity.current = {
//         x: x - lastMouse.current.x,
//         y: y - lastMouse.current.y,
//       }

//       lastMouse.current = { x, y }

//       cursorX.set(x)
//       cursorY.set(y)

//       const speed = Math.hypot(velocity.current.x, velocity.current.y)

//       if (speed > 0.5) {
//         const angle =
//           Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90

//         let diff = angle - prevAngle.current
//         if (diff > 180) diff -= 360
//         if (diff < -180) diff += 360

//         totalRotation.current += diff
//         rotation.set(totalRotation.current)
//         prevAngle.current = angle

//         scale.set(0.95)
//       }
//     }

//     // 🔥 CLICK REPEL EFFECT
//     const handleClick = (e) => {
//       scale.set(0.7)

//       const container = containerRef.current
//       if (!container) return

//       for (let i = 0; i < 6; i++) {
//         const dot = document.createElement("div")

//         dot.style.cssText = `
//           position:fixed;
//           width:6px;
//           height:6px;
//           border-radius:50%;
//           background:rgba(132,0,255,0.8);
//           pointer-events:none;
//           z-index:999;
//           left:${e.clientX}px;
//           top:${e.clientY}px;
//         `

//         document.body.appendChild(dot)

//         const angle = (Math.PI * 2 * i) / 6
//         const distance = 40 + Math.random() * 20

//         const x = Math.cos(angle) * distance
//         const y = Math.sin(angle) * distance

//         dot.animate(
//           [
//             { transform: "translate(0,0)", opacity: 1 },
//             { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
//           ],
//           {
//             duration: 400,
//             easing: "ease-out"
//           }
//         )

//         setTimeout(() => dot.remove(), 400)
//       }

//       setTimeout(() => scale.set(1), 120)
//     }

//     document.body.style.cursor = "none"
//     window.addEventListener("mousemove", move)
//     window.addEventListener("mousedown", handleClick)

//     return () => {
//       window.removeEventListener("mousemove", move)
//       window.removeEventListener("mousedown", handleClick)
//       document.body.style.cursor = "auto"
//     }
//   }, [])

//   if (!enabled) return null

//   return (
//     <motion.div
//       ref={containerRef}
//       style={{
//         position: "fixed",
//         left: cursorX,
//         top: cursorY,
//         translateX: "-50%",
//         translateY: "-50%",
//         rotate: rotation,
//         scale: scale,
//         zIndex: 999,
//         pointerEvents: "none",
//       }}
//     >
//       {cursor}
//     </motion.div>
//   )
// }

// export default SmoothCursor



"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useMotionValue } from "framer-motion"

const DefaultCursorSVG = () => (
  <svg width={30} height={30} viewBox="0 0 50 54" fill="none">
    <path
      d="M42.6 41L27.5 6.8C26.7 5 24.2 5 23.4 6.8L7.6 41C6.7 43 8.5 44.8 10.4 44.1L24.3 39C24.9 38.8 25.4 38.8 26 39L39.8 44.1C41.7 44.8 43.5 43 42.6 41Z"
      fill="black"
      stroke="white"
      strokeWidth={2}
    />
  </svg>
)

export function SmoothCursor({ cursor = <DefaultCursorSVG /> }) {
  const [enabled, setEnabled] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const rotation = useMotionValue(0)
  const scale = useMotionValue(1)

  const lastMouse = useRef({ x: 0, y: 0 })
  const prevAngle = useRef(0)
  const totalRotation = useRef(0)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    setEnabled(true)

    const move = (e) => {
      const x = e.clientX
      const y = e.clientY

      // instant update (no lag)
      cursorX.set(x)
      cursorY.set(y)

      const dx = x - lastMouse.current.x
      const dy = y - lastMouse.current.y

      lastMouse.current = { x, y }

      const speed = Math.hypot(dx, dy)

      if (speed > 0.5) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90

        let diff = angle - prevAngle.current
        if (diff > 180) diff -= 360
        if (diff < -180) diff += 360

        totalRotation.current += diff
        rotation.set(totalRotation.current)
        prevAngle.current = angle

        scale.set(0.95)
      }
    }

    // 🔥 CLICK EFFECT (repel burst)
    const handleClick = (e) => {
      scale.set(0.7)

      for (let i = 0; i < 6; i++) {
        const dot = document.createElement("div")

        dot.style.cssText = `
          position:fixed;
          width:6px;
          height:6px;
          border-radius:50%;
          background:rgba(132,0,255,0.9);
          pointer-events:none;
          z-index:999;
          left:${e.clientX}px;
          top:${e.clientY}px;
        `

        document.body.appendChild(dot)

        const angle = (Math.PI * 2 * i) / 6
        const distance = 40 + Math.random() * 20

        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance

        dot.animate(
          [
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
          ],
          { duration: 400, easing: "ease-out" }
        )

        setTimeout(() => dot.remove(), 400)
      }

      setTimeout(() => scale.set(1), 120)
    }

    document.body.style.cursor = "none"
    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", handleClick)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", handleClick)
      document.body.style.cursor = "auto"
    }
  }, [])

  if (!enabled) return null

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale: scale,
        zIndex: 999,
        pointerEvents: "none",
      }}
    >
      {cursor}
    </motion.div>
  )
}

export default SmoothCursor