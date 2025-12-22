export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full opacity-30">
        <div
          className="w-96 h-96 rounded-full blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />
      </div>
      <div className="absolute top-1/3 -right-1/4 w-full h-full opacity-20">
        <div
          className="w-[32rem] h-[32rem] rounded-full blur-3xl animate-float-slower"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
            animationDelay: '2s',
          }}
        />
      </div>
      <div className="absolute bottom-0 left-1/4 w-full h-full opacity-25">
        <div
          className="w-80 h-80 rounded-full blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            animationDelay: '4s',
          }}
        />
      </div>
    </div>
  );
}
