export default function About() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-8">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300">Your about content here...</p>
      </div>
    </section>
  );
}
