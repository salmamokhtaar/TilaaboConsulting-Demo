import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import heroImage from "@/assets/hero-image.jpg";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We deliver world-class solutions that exceed expectations."
    },
    {
      title: "Integrity", 
      description: "Transparent communication and ethical practices guide every decision."
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge methodologies to solve complex challenges."
    },
    {
      title: "Partnership",
      description: "Your success is our success. We're invested in your long-term growth."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                About ConsultCo
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're a team of seasoned strategists, operators, and problem-solvers who partner with ambitious leaders to unlock sustainable growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2015, ConsultCo has helped over 200 companies across industries achieve breakthrough results through strategic clarity and operational excellence.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img
                src={teamImage}
                alt="ConsultCo team"
                className="rounded-xl shadow-card-lg w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with the strategic clarity and operational discipline needed to achieve sustainable, profitable growth in an increasingly complex marketplace.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every business leader has access to world-class strategic guidance, enabling them to build thriving organizations that create lasting value for all stakeholders.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our work and partnerships"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="h-16 w-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;