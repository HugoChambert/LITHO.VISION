import HeroParallaxDemo from "@/components/hero-parallax-demo"
import SidebarDemo from "@/components/sidebar-demo"

function App() {
  return (
    <div className="bg-black min-h-screen">
      <SidebarDemo>
        <HeroParallaxDemo />
      </SidebarDemo>
    </div>
  )
}

export default App
