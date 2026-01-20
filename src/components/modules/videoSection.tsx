const videos = [
  {
    title: "শিক্ষা বিষয়ক ভিডিও",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // এখানে তোমার ভিডিও লিংক বসাও
  },
  {
    title: "তারবিয়া বিষয়ক ভিডিও",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "জীবনযাপন বিষয়ক ভিডিও",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="my-container text-center">
        {/* উপরের টেক্সট */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          জীবনমুখী ভিডিওসমূহ
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          শিক্ষা, তারবিয়া, ও জীবনযাপনের বিভিন্ন বিষয়ে আমাদের বিশেষ ভিডিও
          সংগ্রহ দেখুন
        </p>

        {/* ভিডিও গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <iframe
                className="w-full h-56 md:h-64"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
