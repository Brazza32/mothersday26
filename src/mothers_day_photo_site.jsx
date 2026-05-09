export default function MothersDaySite() {
  const messages = [
    "Thank you for always being the person I can count on, no matter what.",
    "Your love, strength, and kindness have shaped so much of who I am.",
    "Some of my favourite memories will always be the ones we share together.",
    "Happy Mother’s Day Cath — you mean more to me than words can ever say.",
  ];

  const photos = [
    "/photos/cath-1.jpg",
    "/photos/cath-2.jpg",
    "/photos/cath-3.jpg",
    "/photos/cath-4.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-700 mb-4">
            Happy Mother’s Day Cath
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A single page filled with love, memories, and a few words just for you.
          </p>
        </header>

        <div className="space-y-12">
          {messages.map((message, index) => (
            <section
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={photos[index]}
                alt={`Memory ${index + 1}`}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-pink-600 mb-3">
                  Memory {index + 1}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">{message}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
