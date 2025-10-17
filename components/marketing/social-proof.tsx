export function SocialProof() {
  const companies = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'FinanceFlow', logo: '💰' },
    { name: 'CloudScale', logo: '☁️' },
    { name: 'DataDriven', logo: '📊' },
    { name: 'InnovateLab', logo: '🔬' },
    { name: 'GrowthHack', logo: '📈' },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground">
            Trusted by leading B2B companies
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
            >
              <div className="text-2xl mb-2">{company.logo}</div>
              <div className="text-sm font-medium text-muted-foreground">
                {company.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
