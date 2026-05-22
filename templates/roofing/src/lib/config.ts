import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Lynch Roofing",
    tagline: "Your Roof, Our Priority. Always.",
    phone: "(520) 214-8051",
    phoneHref: "tel:+15202148051",
    email: "info@lynchroofing.com",
    address: "123 Main St",
    city: "Tucson",
    serviceAreas: ["Phoenix metro area", "Tucson", "Casa Grande", "Catalina Foothills", "Green Valley", "Oro Valley", "Sahuarita", "Sierra Vista"],
    license: "AZ ROC #123456",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Roof Repairs", desc: "Expert repairs for leaks, storm damage, and general wear, extending your roof's life.", urgent: true },
    { icon: "truck", title: "Roof Replacements", desc: "Complete roof overhauls with durable materials for lasting protection and enhanced curb appeal.", urgent: false },
    { icon: "droplets", title: "Roof Coatings", desc: "Protective coatings to improve energy efficiency and waterproof your existing roof.", urgent: false },
    { icon: "hammer", title: "New Roofs", desc: "Professional installation of new roofing systems for residential and commercial properties.", urgent: false },
    { icon: "shield-check", title: "Commercial Roofing", desc: "Specialized roofing solutions for businesses, ensuring durability and minimal disruption.", urgent: false },
    { icon: "star", title: "Real Estate Roof Inspections", desc: "Thorough roof inspections for real estate transactions, providing detailed reports.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Phoenix, AZ", stars: 5, text: "Lynch Roofing replaced our old, leaky roof last month, and the difference is incredible! From the initial free estimate to the final cleanup, their team was professional and efficient. They even helped us understand the financing options. Our home feels much safer now, and the new roof looks fantastic. Highly recommend!" },
    { name: "Mark T.", location: "Tucson, AZ", stars: 5, text: "Had a sudden leak after a heavy storm. Called Lynch Roofing, and they were at my house in Oro Valley within hours. The repair was quick, effective, and the technician was very transparent about the cost. It's been weeks, and no more leaks! Truly a lifesaver when you need it most." },
    { name: "Emily R.", location: "Casa Grande, AZ", stars: 5, text: "We used Lynch Roofing for a new build project, and their attention to detail was outstanding. They worked seamlessly with our contractors, and the quality of the spray foam roofing is top-notch. The project finished on time and within budget. Fantastic experience from start to finish." }
  ],

  trustBadges: [
    "GAF Master Elite Contractor", "Licensed, Bonded, Insured", "0% Interest Financing", "Free Estimates & Inspections", "Extended Warranties", "Arizona's #1 Roofer"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent roofing needs with rapid scheduling and efficient service." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, detailed estimates with no hidden fees, ensuring you know the cost before we start." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists dedicated to quality." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work, ensuring your complete satisfaction with every roofing project." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our intelligent reception is available around the clock to assist with inquiries and scheduling." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all necessary tools and materials for efficient, high-quality work." }
  ],

  formServiceOptions: ["Roof Repairs", "Roof Replacements", "Roof Coatings", "New Roofs", "Commercial Roofing", "Real Estate Roof Inspections"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!