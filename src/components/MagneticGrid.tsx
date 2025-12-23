import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
}

export default function MagneticGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      const nodes: Node[] = []
      const spacing = 60
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodes.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            baseX: i * spacing + spacing / 2,
            baseY: j * spacing + spacing / 2,
            vx: 0,
            vy: 0,
          })
        }
      }
      nodesRef.current = nodes
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const nodes = nodesRef.current

      nodes.forEach((node) => {
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 250

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const pullStrength = 0.6
          node.vx += (dx / distance) * force * pullStrength
          node.vy += (dy / distance) * force * pullStrength
        }

        const returnForce = 0.05
        node.vx += (node.baseX - node.x) * returnForce
        node.vy += (node.baseY - node.y) * returnForce

        node.vx *= 0.9
        node.vy *= 0.9

        node.x += node.vx
        node.y += node.vy

        const distanceFromBase = Math.sqrt(
          Math.pow(node.x - node.baseX, 2) + Math.pow(node.y - node.baseY, 2)
        )
        const intensity = Math.min(distanceFromBase / 50, 1)

        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${0.5 + intensity * 0.5})`
        ctx.fill()

        if (distance < maxDistance) {
          ctx.strokeStyle = `rgba(59, 130, 246, ${
            0.15 + (1 - distance / maxDistance) * 0.35
          })`
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      })

      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${
              0.05 * (1 - distance / 100)
            })`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  )
}
