const videos = [
  {
    title: "শিক্ষা বিষয়ক ভিডিও",
    url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1423106042701926%2F&show_text=false&width=560&t=0",
  },
  {
    title: "তারবিয়া বিষয়ক ভিডিও",
    url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1009960712193618%2F&show_text=false&width=560&t=0",
  },

  {
    title: "জীবনযাপন বিষয়ক ভিডিও",
    url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1895917034620555%2F&show_text=false&width=560&t=0",
  },
];

const gradients = [
  "from-blue-500 to-cyan-400",
  "from-emerald-500 to-green-400",
  "from-orange-500 to-amber-400",
];

export default function VideoSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="my-container text-center">
        {/* 🔹 Header */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          আমাদের ভিডিওসমূহ
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          শিক্ষা, তারবিয়া, ও জীবনযাপনের বিভিন্ন বিষয়ে আমাদের বিশেষ ভিডিও
          সংগ্রহ দেখুন
        </p>

        {/* 🎥 Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => {
            const gradient = gradients[index % gradients.length];

            return (
              <div key={index} className="relative group">
                {/* 🔥 Gradient Glow Border */}
                <div
                  className={`absolute -inset-0.5 bg-linear-to-r ${gradient} rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500`}
                />

                {/* 🧱 Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                  <iframe
                    className="w-full h-56 md:h-56"
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

                  {/* 🌈 Bottom hover line */}
                  <div
                    className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-linear-to-r ${gradient}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
