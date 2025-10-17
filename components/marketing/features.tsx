import { 
  Video, 
  Search, 
  BarChart3, 
  Zap, 
  Users, 
  Shield,
  Clock,
  Target,
  Sparkles
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Video,
      title: '3-Minute Format',
      description: 'Perfect length for B2B attention spans. Get your message across without losing your audience.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Search,
      title: 'Smart Discovery',
      description: 'AI-powered search and recommendations help viewers find exactly what they need.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: BarChart3,
      title: 'Deep Analytics',
      description: 'Track engagement, completion rates, and CTA performance with detailed insights.',
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      icon: Zap,
      title: 'AI-Powered Scripts',
      description: 'Generate compelling scripts tailored to your industry, market, and product.',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Multi-user organizations with role-based permissions and approval workflows.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with advanced security features and audit logs.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Clock,
      title: 'Quick Publishing',
      description: 'From upload to published in minutes with automated transcription and SEO.',
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      icon: Target,
      title: 'Built-in CTAs',
      description: 'Seamless integration with calendars, CRMs, and lead capture forms.',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Platform Features
          </div>
          <h2 className="text-display-lg text-foreground">
            Everything you need to create{' '}
            <span className="text-gradient">compelling B2B stories</span>
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            From AI-powered content creation to advanced analytics, PitchLead provides 
            all the tools you need to engage your B2B audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border card-hover"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to see these features in action?
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span>Book a demo</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
