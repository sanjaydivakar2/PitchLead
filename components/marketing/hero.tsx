import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            The QVC for B2B
          </div>

          <h1 className="text-display-2xl text-foreground">
            High-Signal{' '}
            <span className="text-gradient">B2B Stories</span>{' '}
            in 3 Minutes
          </h1>
          
          <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and share compelling business stories through micro-webinars. 
            Where brands showcase their expertise and buyers find solutions that matter.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/api/auth/login?screen_hint=signup">
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="#featured">
                <Play className="mr-2 h-4 w-4" />
                Watch Stories
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">3min</div>
              <div className="text-sm text-muted-foreground">Perfect Length</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">85%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">10x</div>
              <div className="text-sm text-muted-foreground">Higher Engagement</div>
            </div>
          </div>
        </div>

        {/* Hero Video Preview */}
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/5 to-gray-900/10 p-2 ring-1 ring-inset ring-gray-900/10 lg:p-4">
              <div className="video-player aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group cursor-pointer">
                <div className="video-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                    <p className="text-white/90 font-medium">
                      Watch: How TechCorp increased leads by 300%
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      3:00 • Enterprise Software
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
