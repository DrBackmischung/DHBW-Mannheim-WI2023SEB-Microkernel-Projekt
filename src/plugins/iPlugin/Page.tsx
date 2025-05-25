
"use client";

export function YoutubePage() {
  const embedUrl = "https://www.youtube.com/embed/U9t-slLl30E";

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      
      <div className="w-full max-w-4xl" style={{ aspectRatio: "16/9" }}>
        <iframe
          src={embedUrl}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
}
