import { siteConfig } from "@/lib/site";

export function getSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: "Asad Jehan Zeb",
        givenName: "Asad",
        familyName: "Jehan Zeb",
        alternateName: ["zanni098", "zuhaib khan", "Jolly Roger"],
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.email,
        image: `${siteConfig.url}/open-graph.png`,
        jobTitle: "Full-Stack AI Engineer",
        knowsAbout: [
          "AI Agent Tooling",
          "LLM Evaluation",
          "Software Engineering",
          "Generative AI",
          "Open Source Development",
        ],
        sameAs: Object.values(siteConfig.social),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Islamabad",
          addressCountry: "PK",
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "University of Utah",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "The Fazlehaq College, Mardan",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };
}