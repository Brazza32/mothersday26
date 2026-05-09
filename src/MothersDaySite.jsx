export default function MothersDaySite() {
  const sections = [
    {
      label: "From Danny",
      message: "Thanks very much for being the most incredible mum to our children. You are the best",
      photo: "/photos/cath-6.jpg",
    },
    {
      label: "From Oscar",
      message: "Happy Mother’s Day Mum, you mean more to me than words can ever say. Your love, strength, and kindness have shaped so much of who I am. Thanks for being an amazing role model",
      photo: "/photos/cath-4.jpg",
    },
    {
      label: "Message Title 3",
      message: "Some of my favourite memories will always be the ones we share together.",
      photo: "/photos/cath-2.jpg",
    },
    {
      label: "From Henry",
      message: "Thank you mum for being the best and most supportive mum that anyone can ask for. I love you",
      photo: "/photos/cath-5.jpg",
    },
  ];

  const galleryPhotos = [
    "/photos/cath-1.jpg",
    "/photos/cath-2.jpg",
    "/photos/cath-3.jpg",
    "/photos/cath-4.jpg",
    "/photos/cath-5.jpg",
    "/photos/cath-6.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-700 mb-4">
            Happy Mother’s Day Cath
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A single page filled with love, memories, and a few words just for you.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryPhotos.map((photo, index) => (
            <div key={index} className="rounded-3xl overflow-hidden shadow-md bg-white">
              <img
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={section.photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-pink-600 mb-3">
                  {section.label}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.message}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
