export const site = {
  name: "YRVAAN GeoSystems",
  legal: "YRVAAN GeoSystems Pvt Ltd",
  tagline: "Engineered earth retention & substructure works",
  domain: "yrvaangeo.com",
  url: "https://yrvaangeo.com",
  email: "projects@yrvaangeo.com",
  phone: "+91 00000 00000",
  address: "Plot no. 1, opp. Hafed Godown, Jhajjar - Gwalison Road, V.P.O talao, Jhajjar -124103",
  hours: "Mon – Sat · 9:00 AM – 6:00 PM",
};

export const services = [
  {
    slug: "soldier-pile",
    title: "Soldier Pile Walls",
    short: "Vertical steel sections with lagging for cost-efficient temporary and permanent retention.",
    long: "Soldier pile walls combine driven or drilled steel H-sections with timber, concrete, or steel lagging to support deep excavations in cohesive soils. We engineer pile spacing, embedment, and anchoring to suit your site geology and adjacent structures.",
    use: ["Deep basements", "Road & metro cuts", "Adjacent-to-building excavations"],
  },
  {
    slug: "d-wall",
    title: "Diaphragm (D) Wall Works",
    short: "Reinforced concrete walls cast in-situ for the deepest, watertight retention.",
    long: "Diaphragm walls are constructed in slurry-supported trenches and reinforced with prefabricated cages, producing a continuous structural wall that doubles as a permanent foundation element. Ideal for high water tables, deep cuts, and projects demanding minimal vibration.",
    use: ["Metro stations", "High-rise basements", "Waterfront & marine works"],
  },
  {
    slug: "shotcreting",
    title: "Shotcreting Works",
    short: "Wet & dry-mix sprayed concrete for slope stabilization and tunnel linings.",
    long: "Our shotcrete crews deliver controlled wet-mix and dry-mix applications using calibrated nozzles, fiber-reinforced mixes, and accelerated admixtures to achieve specified strengths on vertical and overhead surfaces.",
    use: ["Rock & soil slope protection", "Tunnel primary lining", "Repair & strengthening"],
  },
  {
    slug: "retention",
    title: "Retention Systems",
    short: "Engineered soil-nailing, anchors, and tie-back systems for permanent stability.",
    long: "We design and execute integrated retention systems — soil nails, ground anchors, micro-piles, and bracing — backed by geotechnical analysis and instrumented monitoring through every construction stage.",
    use: ["Permanent slope retention", "Tie-back walls", "Hybrid composite systems"],
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];