import { Play, Clock, Eye } from 'lucide-react';

export function FeaturedRails() {
  const rails = [
    {
      title: 'Trending in Enterprise Software',
      videos: [
        {
          id: '1',
          title: 'How TechCorp Increased Leads by 300%',
          company: 'TechCorp',
          duration: '3:00',
          views: '12.5K',
          thumbnail: 'gradient-1',
        },
        {
          id: '2',
          title: 'Scaling Customer Success at CloudScale',
          company: 'CloudScale',
          duration: '2:45',
          views: '8.2K',
          thumbnail: 'gradient-2',
        },
        {
          id: '3',
          title: 'AI-Powered Sales Pipeline Optimization',
          company: 'DataDriven',
          duration: '3:15',
          views: '15.1K',
          thumbnail: 'gradient-3',
        },
        {
          id: '4',
          title: 'Building Trust in B2B Marketplaces',
          company: 'TrustFlow',
          duration: '2:30',
          views: '6.8K',
          thumbnail: 'gradient-4',
        },
      ],
    },
    {
      title: 'New in Fintech',
      videos: [
        {
          id: '5',
          title: 'Revolutionizing Payment Processing',
          company: 'FinanceFlow',
          duration: '2:55',
          views: '9.3K',
          thumbnail: 'gradient-5',
        },
        {
          id: '6',
          title: 'Compliance Made Simple',
          company: 'RegTech Pro',
          duration: '3:10',
          views: '7.1K',
          thumbnail: 'gradient-6',
        },
        {
          id: '7',
          title: 'The Future of Digital Banking',
          company: 'NeoBank',
          duration: '2:40',
          views: '11.2K',
          thumbnail: 'gradient-7',
        },
        {
          id: '8',
          title: 'Fraud Detection with Machine Learning',
          company: 'SecureFinance',
          duration: '3:05',
          views: '5.9K',
          thumbnail: 'gradient-8',
        },
      ],
    },
  ];

  const getGradientClass = (gradient: string) => {
    const gradients = {
      'gradient-1': 'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
      'gradient-2': 'bg-gradient-to-br from-green-500/20 to-blue-500/20',
      'gradient-3': 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      'gradient-4': 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
      'gradient-5': 'bg-gradient-to-br from-teal-500/20 to-cyan-500/20',
      'gradient-6': 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20',
      'gradient-7': 'bg-gradient-to-br from-pink-500/20 to-rose-500/20',
      'gradient-8': 'bg-gradient-to-br from-amber-500/20 to-orange-500/20',
    };
    return gradients[gradient as keyof typeof gradients] || gradients['gradient-1'];
  };

  return (
    <section id="featured" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-display-lg text-foreground">
            Discover compelling{' '}
            <span className="text-gradient">B2B stories</span>
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Browse curated collections of 3-minute micro-webinars from leading B2B companies.
          </p>
        </div>

        <div className="space-y-16">
          {rails.map((rail, railIndex) => (
            <div key={railIndex}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-display-sm text-foreground">{rail.title}</h3>
                <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  View all →
                </button>
              </div>

              <div className="rail-container">
                {rail.videos.map((video) => (
                  <div key={video.id} className="video-card group">
                    <div className={`video-card-image ${getGradientClass(video.thumbnail)}`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Video Stats */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                          <Clock className="w-3 h-3 text-white" />
                          <span className="text-xs text-white font-medium">{video.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                          <Eye className="w-3 h-3 text-white" />
                          <span className="text-xs text-white font-medium">{video.views}</span>
                        </div>
                      </div>
                    </div>

                    <div className="video-card-content">
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {video.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{video.company}</span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-success rounded-full" />
                          <span>Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to share your B2B story?
          </p>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <span>Start creating</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
