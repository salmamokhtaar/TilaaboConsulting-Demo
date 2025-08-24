import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { services, approach } from "@/lib/data";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <Container>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive consulting solutions designed to accelerate your growth and optimize your operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="What We Do"
            subtitle="From strategy to execution, we partner with you at every stage of your growth journey"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="Our Approach"
            subtitle="A proven methodology that delivers results"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="h-20 w-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services;