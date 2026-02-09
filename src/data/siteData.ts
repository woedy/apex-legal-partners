export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
  faqs: { question: string; answer: string }[];
  tags: string[];
}

export interface Attorney {
  name: string;
  slug: string;
  title: string;
  initials: string;
  bioShort: string;
  bioLong: string;
  practiceAreas: string[];
  education: string[];
  admissions: string[];
  languages?: string[];
  email: string;
  phone: string;
}

export interface CaseResult {
  title: string;
  practiceArea: string;
  summary: string;
  year: string;
  disclaimer: string;
}

export interface Insight {
  title: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  contentSections: { heading: string; body: string }[];
}

export interface Testimonial {
  quote: string;
  nameOrRole: string;
  industry: string;
}

export interface SiteFAQ {
  question: string;
  answer: string;
}

export const siteInfo = {
  name: "Apex Legal Partners",
  tagline: "Modern counsel. Practical solutions.",
  phone: "(212) 555-0190",
  email: "info@apexlegalpartners.com",
  address: "One Liberty Plaza, Suite 4200\nNew York, NY 10006",
  hours: "Monday–Friday: 8:30 AM – 6:00 PM",
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    title: "Corporate & Commercial",
    slug: "corporate-commercial",
    shortDescription:
      "Strategic counsel for businesses at every stage—from formation and governance to complex transactions and regulatory compliance.",
    fullDescription:
      "Our Corporate & Commercial team partners with businesses of all sizes to navigate the complexities of modern commerce. Whether you're launching a startup, structuring a joint venture, or managing a multi-million dollar acquisition, we bring rigorous analysis and pragmatic advice to every engagement. We understand that legal work must serve business objectives, and we structure our counsel accordingly—delivering solutions that are practical, efficient, and aligned with your strategic goals.",
    services: [
      "Business Formation & Structuring",
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Commercial Contracts",
      "Joint Ventures & Partnerships",
      "Regulatory Compliance",
    ],
    faqs: [
      {
        question: "What type of entity should I form for my business?",
        answer:
          "The right entity structure depends on your specific circumstances—tax considerations, liability exposure, ownership structure, and growth plans. We typically evaluate LLCs, corporations, and partnerships to determine the best fit for your situation.",
      },
      {
        question: "When should I involve a lawyer in a business transaction?",
        answer:
          "Ideally, before you sign anything. Early involvement allows us to identify risks, negotiate better terms, and structure the transaction efficiently. The cost of prevention is almost always less than the cost of remediation.",
      },
      {
        question: "Do you handle international transactions?",
        answer:
          "Yes. We regularly advise on cross-border matters and work with trusted international counsel when local expertise is required. We can coordinate multi-jurisdiction transactions from initial structuring through closing.",
      },
    ],
    tags: ["corporate", "business", "M&A", "contracts", "governance"],
  },
  {
    id: "2",
    title: "Employment & Labor",
    slug: "employment-labor",
    shortDescription:
      "Practical guidance for employers and employees on workplace matters, from hiring to separation and everything between.",
    fullDescription:
      "Employment relationships are governed by an evolving body of law that demands proactive attention. Our Employment & Labor practice advises both employers and individuals on the full spectrum of workplace issues—including employment agreements, discrimination and harassment claims, wage-and-hour compliance, and workforce restructuring. We combine deep subject-matter knowledge with an understanding of how workplaces actually operate, providing counsel that is both legally sound and practically actionable.",
    services: [
      "Employment Agreements & Policies",
      "Workplace Investigations",
      "Discrimination & Harassment Claims",
      "Wage & Hour Compliance",
      "Non-Compete & Restrictive Covenants",
      "Employee Handbooks & Training",
    ],
    faqs: [
      {
        question: "Is my non-compete agreement enforceable?",
        answer:
          "Enforceability depends on jurisdiction, scope, duration, and the specific circumstances of your employment. Recent legal developments have significantly changed the landscape. We can review your agreement and provide a clear assessment.",
      },
      {
        question: "What should I do if an employee files a discrimination complaint?",
        answer:
          "Take the complaint seriously, avoid retaliation, and conduct a prompt, thorough investigation. We can guide you through the investigation process and help you respond appropriately to protect both the employee and the organization.",
      },
      {
        question: "Do I need an employee handbook?",
        answer:
          "A well-drafted handbook is one of the most cost-effective risk management tools available. It sets clear expectations, ensures consistent policy application, and provides important legal protections for the employer.",
      },
    ],
    tags: ["employment", "labor", "workplace", "HR", "compliance"],
  },
  {
    id: "3",
    title: "Real Estate & Property",
    slug: "real-estate-property",
    shortDescription:
      "End-to-end legal support for commercial and residential real estate transactions, development, and disputes.",
    fullDescription:
      "Real estate transactions involve significant capital and complex regulatory frameworks. Our Real Estate & Property team handles acquisitions, dispositions, leasing, financing, zoning, and development matters for investors, developers, landlords, and tenants. We take a transactional approach that anticipates issues before they arise, helping clients close deals efficiently while protecting their interests throughout the lifecycle of their real estate holdings.",
    services: [
      "Commercial Leasing",
      "Residential Transactions",
      "Zoning & Land Use",
      "Real Estate Development",
      "Title Review & Insurance",
      "Real Estate Litigation",
    ],
    faqs: [
      {
        question: "What should I look for in a commercial lease?",
        answer:
          "Key provisions include rent escalation terms, maintenance responsibilities, assignment and subletting rights, renewal options, and termination clauses. We review every provision to ensure your interests are protected.",
      },
      {
        question: "How long does a typical real estate closing take?",
        answer:
          "Residential closings typically take 30–60 days. Commercial transactions vary widely depending on complexity, due diligence requirements, and financing. We work to keep transactions on schedule without cutting corners.",
      },
      {
        question: "Do you handle zoning and land use matters?",
        answer:
          "Yes. We represent property owners and developers before municipal zoning boards and planning commissions. We can assist with variance applications, special permits, and zoning compliance reviews.",
      },
    ],
    tags: ["real estate", "property", "leasing", "development", "zoning"],
  },
  {
    id: "4",
    title: "Litigation & Dispute Resolution",
    slug: "litigation-dispute-resolution",
    shortDescription:
      "Skilled trial lawyers and negotiators who resolve disputes efficiently—in court, through arbitration, or at the negotiating table.",
    fullDescription:
      "When disputes arise, the right legal strategy can make the difference between a favorable resolution and protracted, costly litigation. Our litigators bring courtroom skill, sharp legal analysis, and creative problem-solving to every case. We represent clients in state and federal courts, before regulatory agencies, and in arbitration and mediation proceedings. Our goal is always the most effective resolution available—whether that means aggressive advocacy at trial or a well-negotiated settlement.",
    services: [
      "Commercial Litigation",
      "Contract Disputes",
      "Arbitration & Mediation",
      "Appellate Advocacy",
      "Injunctions & Emergency Relief",
      "Regulatory Proceedings",
    ],
    faqs: [
      {
        question: "How much does litigation cost?",
        answer:
          "Litigation costs depend on the complexity of the case, the amount in dispute, and the opposing party's approach. We provide realistic cost estimates at the outset and work to manage expenses throughout the process.",
      },
      {
        question: "Should I try to settle or go to trial?",
        answer:
          "This depends on the strength of your case, the costs involved, and your business objectives. We provide candid assessments to help you make informed decisions. Most cases resolve before trial, but we prepare every case as if it will go the distance.",
      },
      {
        question: "What is arbitration and when is it appropriate?",
        answer:
          "Arbitration is a private dispute resolution process that can be faster and less formal than traditional litigation. It's often required by contract. We have extensive experience representing clients in arbitration proceedings under various rules.",
      },
    ],
    tags: ["litigation", "disputes", "trial", "arbitration", "mediation"],
  },
  {
    id: "5",
    title: "Intellectual Property",
    slug: "intellectual-property",
    shortDescription:
      "Comprehensive IP protection—from registration and licensing to enforcement and defense of trademarks, patents, copyrights, and trade secrets.",
    fullDescription:
      "Intellectual property is often a company's most valuable asset. Our IP practice helps clients identify, protect, monetize, and enforce their intellectual property rights. We work with businesses across industries—from technology and life sciences to consumer brands and creative enterprises—providing strategic counsel on trademark and patent portfolios, copyright matters, trade secret protection, and IP licensing. Our goal is to build IP strategies that create real business value.",
    services: [
      "Trademark Registration & Prosecution",
      "Patent Strategy & Counseling",
      "Copyright Protection",
      "Trade Secret & Confidentiality",
      "IP Licensing & Transactions",
      "IP Litigation & Enforcement",
    ],
    faqs: [
      {
        question: "When should I register a trademark?",
        answer:
          "As early as possible. Federal registration provides significant legal advantages, including nationwide priority and the ability to bring suit in federal court. We recommend conducting a clearance search before adoption and filing promptly.",
      },
      {
        question: "How do I protect my trade secrets?",
        answer:
          "Trade secret protection requires reasonable measures to maintain secrecy—including confidentiality agreements, access controls, and employee training. We help clients implement comprehensive trade secret protection programs.",
      },
      {
        question: "Can AI-generated content be copyrighted?",
        answer:
          "This is an evolving area of law. Current guidance suggests that purely AI-generated works may not qualify for copyright protection, but works involving significant human creative input may. We help clients navigate these emerging issues.",
      },
    ],
    tags: ["intellectual property", "trademark", "patent", "copyright", "IP"],
  },
  {
    id: "6",
    title: "Family Law & Estate Planning",
    slug: "family-estate-planning",
    shortDescription:
      "Sensitive, clear-headed counsel on family transitions and legacy planning—prenuptial agreements, divorce, custody, wills, trusts, and estates.",
    fullDescription:
      "Family law and estate matters are deeply personal. Our attorneys approach these cases with discretion, empathy, and rigorous attention to detail. We represent clients in divorce and separation proceedings, custody disputes, prenuptial and postnuptial agreements, and all aspects of estate planning and administration. We help clients protect their families and plan for the future with confidence, providing steady counsel during what are often the most challenging times in their lives.",
    services: [
      "Prenuptial & Postnuptial Agreements",
      "Divorce & Legal Separation",
      "Child Custody & Support",
      "Wills & Trusts",
      "Probate & Estate Administration",
      "Guardianship & Conservatorship",
    ],
    faqs: [
      {
        question: "Do I need a prenuptial agreement?",
        answer:
          "Prenuptial agreements are valuable tools for protecting assets, defining expectations, and reducing uncertainty. They are particularly important if either party owns a business, has significant assets, or has children from a prior relationship.",
      },
      {
        question: "What happens if someone dies without a will?",
        answer:
          "Without a will, your assets are distributed according to state intestacy laws, which may not reflect your wishes. We strongly recommend that every adult have at least a basic estate plan in place.",
      },
      {
        question: "How often should I update my estate plan?",
        answer:
          "We recommend reviewing your estate plan every three to five years, or whenever you experience a major life event—marriage, divorce, birth of a child, significant change in assets, or a move to a new state.",
      },
    ],
    tags: ["family law", "estate", "divorce", "trusts", "wills"],
  },
];

export const attorneys: Attorney[] = [
  {
    name: "Sarah Chen",
    slug: "sarah-chen",
    title: "Managing Partner",
    initials: "SC",
    bioShort:
      "Sarah leads Apex Legal Partners with over 18 years of experience in corporate law and complex transactions. She is recognized for her strategic approach to M&A and her commitment to building lasting client relationships.",
    bioLong:
      "Sarah Chen founded Apex Legal Partners with the belief that clients deserve legal counsel that is both sophisticated and accessible. Over her career, she has advised on transactions valued at over $2 billion, including cross-border mergers, private equity investments, and corporate restructurings.\n\nBefore founding the firm, Sarah practiced at a leading international law firm in New York, where she developed deep expertise in corporate governance and securities regulation. She is known for her ability to distill complex legal issues into clear, actionable guidance.\n\nSarah is an active member of the New York State Bar Association's Corporate Law Section and has been recognized by Super Lawyers as a Rising Star. Outside the office, she serves on the board of a nonprofit providing legal services to underserved communities.",
    practiceAreas: ["Corporate & Commercial", "Mergers & Acquisitions"],
    education: [
      "Harvard Law School, J.D., cum laude",
      "New York University, B.A., Economics",
    ],
    admissions: ["New York", "Connecticut"],
    languages: ["English", "Mandarin"],
    email: "schen@apexlegalpartners.com",
    phone: "(212) 555-0191",
  },
  {
    name: "Michael Torres",
    slug: "michael-torres",
    title: "Senior Partner",
    initials: "MT",
    bioShort:
      "Michael is a seasoned litigator with a track record of favorable outcomes in complex commercial disputes. His practice spans state and federal courts, arbitration, and regulatory proceedings.",
    bioLong:
      "Michael Torres brings intensity, preparation, and strategic clarity to every dispute he handles. Over 15 years of practice, he has tried cases to verdict in state and federal courts, argued before appellate panels, and resolved high-stakes disputes through negotiation and mediation.\n\nMichael's practice focuses on commercial litigation, including contract disputes, business torts, partnership and shareholder disputes, and real estate litigation. He is particularly effective in cases involving complex fact patterns and significant financial exposure.\n\nBefore joining Apex, Michael served as an Assistant United States Attorney for the Southern District of New York, where he developed his trial skills and earned commendations for his courtroom advocacy. He brings the same rigor and preparation to his civil practice.",
    practiceAreas: [
      "Litigation & Dispute Resolution",
      "Real Estate & Property",
    ],
    education: [
      "Columbia Law School, J.D.",
      "Georgetown University, B.A., Government",
    ],
    admissions: ["New York", "New Jersey", "District of Columbia"],
    email: "mtorres@apexlegalpartners.com",
    phone: "(212) 555-0192",
  },
  {
    name: "Rebecca Okafor",
    slug: "rebecca-okafor",
    title: "Partner",
    initials: "RO",
    bioShort:
      "Rebecca advises technology companies, creative businesses, and research institutions on all aspects of intellectual property protection and strategy.",
    bioLong:
      "Rebecca Okafor combines a technical background with sharp legal instincts to help clients protect and leverage their intellectual property. Her practice spans patent counseling, trademark portfolio management, copyright matters, trade secret protection, and IP licensing.\n\nRebecca works closely with clients in the technology, life sciences, media, and consumer products sectors. She has particular expertise in IP issues arising from emerging technologies, including artificial intelligence, blockchain, and biotechnology.\n\nBefore practicing law, Rebecca worked as a software engineer, giving her a practical understanding of the technologies her clients develop. She holds a Bachelor of Science from MIT and a J.D. from Stanford Law School, where she was an editor of the Stanford Technology Law Review.",
    practiceAreas: ["Intellectual Property", "Corporate & Commercial"],
    education: [
      "Stanford Law School, J.D.",
      "Massachusetts Institute of Technology, B.S., Computer Science",
    ],
    admissions: ["New York", "California"],
    languages: ["English", "Igbo"],
    email: "rokafor@apexlegalpartners.com",
    phone: "(212) 555-0193",
  },
  {
    name: "David Kim",
    slug: "david-kim",
    title: "Senior Associate",
    initials: "DK",
    bioShort:
      "David focuses on real estate transactions and corporate matters, with particular experience in commercial leasing, development projects, and entity structuring.",
    bioLong:
      "David Kim brings energy and meticulous attention to detail to his real estate and corporate practice. He represents developers, investors, landlords, and tenants in a wide range of transactions, including commercial and residential acquisitions, dispositions, leasing, and financing.\n\nDavid also advises startups and small businesses on entity formation, corporate governance, and commercial contracts. Clients value his responsiveness, clear communication, and ability to manage multiple complex workstreams simultaneously.\n\nDavid joined Apex from a boutique real estate firm in Manhattan, where he developed expertise in New York's complex real estate regulatory environment. He is a member of the Real Property Law Section of the New York State Bar Association.",
    practiceAreas: ["Real Estate & Property", "Corporate & Commercial"],
    education: [
      "NYU School of Law, J.D.",
      "University of Pennsylvania, B.A., Political Science",
    ],
    admissions: ["New York"],
    email: "dkim@apexlegalpartners.com",
    phone: "(212) 555-0194",
  },
];

export const caseResults: CaseResult[] = [
  {
    title: "$12.5M Settlement in Commercial Lease Dispute",
    practiceArea: "Litigation & Dispute Resolution",
    summary:
      "Represented a national retail tenant in a complex dispute with a commercial landlord involving lease termination, property damage claims, and lost profits. Achieved a favorable settlement after aggressive pre-trial discovery and motion practice.",
    year: "2024",
    disclaimer: "Prior results do not guarantee a similar outcome.",
  },
  {
    title: "Successful Defense of Employment Discrimination Claims",
    practiceArea: "Employment & Labor",
    summary:
      "Defended a mid-size financial services firm against multiple discrimination and retaliation claims brought by former employees. Obtained summary judgment on all claims after extensive factual investigation and expert analysis.",
    year: "2023",
    disclaimer: "Prior results do not guarantee a similar outcome.",
  },
  {
    title: "Multi-Property Portfolio Acquisition ($85M)",
    practiceArea: "Real Estate & Property",
    summary:
      "Advised a private equity-backed real estate fund on the acquisition of a 12-property commercial portfolio across three states. Managed due diligence, financing, and closing across all properties on an accelerated timeline.",
    year: "2024",
    disclaimer: "Prior results do not guarantee a similar outcome.",
  },
  {
    title: "Patent Portfolio Protection for AI Startup",
    practiceArea: "Intellectual Property",
    summary:
      "Developed and executed a comprehensive patent strategy for an early-stage artificial intelligence company, resulting in 8 provisional patent filings and successful prosecution of 3 utility patents covering core ML innovations.",
    year: "2023",
    disclaimer: "Prior results do not guarantee a similar outcome.",
  },
  {
    title: "$40M Corporate Restructuring",
    practiceArea: "Corporate & Commercial",
    summary:
      "Guided a family-owned manufacturing company through a complete corporate restructuring, including formation of a new holding company, renegotiation of key vendor contracts, and transition to professional management.",
    year: "2024",
    disclaimer: "Prior results do not guarantee a similar outcome.",
  },
  {
    title: "Complex Estate Resolution Across Jurisdictions",
    practiceArea: "Family Law & Estate Planning",
    summary:
      "Resolved a contested estate involving assets in three states and two countries, including real property, business interests, and significant financial accounts. Achieved a negotiated resolution avoiding protracted probate litigation.",
    year: "2023",
    disclaimer: "Prior results do not guarantee a similar outcome.",
  },
];

export const insights: Insight[] = [
  {
    title: "Navigating Non-Compete Agreements in 2024",
    slug: "navigating-non-compete-agreements-2024",
    date: "2024-11-15",
    author: "Sarah Chen",
    tags: ["Employment", "Contracts", "Compliance"],
    excerpt:
      "Recent regulatory changes have transformed the non-compete landscape. Here's what employers and employees need to know about enforceability, alternatives, and best practices.",
    contentSections: [
      {
        heading: "The Shifting Legal Landscape",
        body: "Non-compete agreements have long been a staple of employment law, used by employers to protect proprietary information and client relationships when employees depart. However, the legal landscape surrounding these agreements has shifted dramatically in recent years, driven by regulatory action, legislative reform, and evolving judicial attitudes.\n\nThe Federal Trade Commission's proposed rule to ban most non-compete clauses generated significant attention and uncertainty in the business community. While the rule's implementation has faced legal challenges, it signaled a clear regulatory trend toward limiting the use of non-competes, particularly for lower-wage workers. Several states have already enacted their own restrictions, creating a patchwork of rules that employers must navigate carefully.\n\nFor both employers and employees, understanding the current state of non-compete law is essential to making informed decisions about employment relationships and post-employment obligations.",
      },
      {
        heading: "What Recent Changes Mean for Employers",
        body: "Employers who have traditionally relied on non-compete agreements need to reassess their approach. In many jurisdictions, courts are scrutinizing non-competes more closely, requiring employers to demonstrate that the restrictions are reasonable in scope, duration, and geographic reach, and that they protect legitimate business interests.\n\nThis means that overly broad non-competes—those that restrict employees from working in their entire field for extended periods—are increasingly likely to be struck down. Employers should review their existing agreements and consider whether they would withstand judicial scrutiny under current standards. In some cases, narrower restrictions may actually provide more reliable protection.\n\nIt's also important to ensure that non-competes are supported by adequate consideration. In many states, continued employment alone is no longer sufficient consideration for a non-compete signed after the start of employment.",
      },
      {
        heading: "Practical Alternatives to Non-Competes",
        body: "As non-compete enforceability becomes less certain, many employers are turning to alternative protective measures. Non-solicitation agreements, which prevent former employees from soliciting clients or colleagues but don't restrict them from working for competitors, are generally viewed more favorably by courts and can provide meaningful protection for key business relationships.\n\nConfidentiality and non-disclosure agreements remain enforceable in virtually all jurisdictions and can protect proprietary information without restricting an employee's ability to earn a living. Trade secret protections under state and federal law provide additional safeguards, particularly when combined with robust internal policies around information security.\n\nGarden leave provisions—which require employees to provide extended notice before departure while continuing to receive compensation—offer another approach that balances employer protection with employee mobility.",
      },
      {
        heading: "Key Takeaways",
        body: "The non-compete landscape is evolving rapidly, and both employers and employees need to stay informed. Employers should audit their existing agreements, consider alternatives, and ensure that any restrictions they impose are tailored and defensible. Employees should seek legal advice before signing non-competes and before assuming that existing agreements are unenforceable.\n\nRegardless of which side of the employment relationship you're on, the key principle remains the same: agreements should be fair, reasonable, and clearly communicated. Our team regularly advises clients on these issues and can help you develop an approach that protects your interests while complying with current law.",
      },
    ],
  },
  {
    title:
      "Five Legal Essentials for Startup Founders Before Their First Funding Round",
    slug: "legal-essentials-startup-founders-funding",
    date: "2024-10-02",
    author: "Rebecca Okafor",
    tags: ["Corporate", "Startups", "Venture Capital"],
    excerpt:
      "Before signing a term sheet, founders need to get their legal house in order. These five fundamentals can make or break your fundraising process.",
    contentSections: [
      {
        heading: "Entity Structure and Capitalization",
        body: "The first thing any investor's counsel will examine is your corporate structure. Most venture-backed companies are organized as Delaware C-corporations for good reason—the legal framework is well-established, investors are familiar with it, and it provides the flexibility needed for equity compensation and multiple rounds of funding.\n\nIf you've been operating as an LLC or haven't formalized your entity structure, converting before you approach investors is essential. You'll also need a clean capitalization table that clearly shows who owns what, including any options or convertible instruments that have been issued. Ambiguity in your cap table is a red flag that can delay or derail a funding round.",
      },
      {
        heading: "Intellectual Property Ownership",
        body: "Investors are investing in your technology and ideas—they need to know that the company actually owns them. This means ensuring that all founders and employees have signed proper invention assignment agreements, and that any IP developed before the company's formation has been formally assigned.\n\nIf you used contractors to build your initial product, you need written agreements confirming that the company owns the work product. Under copyright law, work created by independent contractors is generally owned by the contractor unless there's a written assignment. This is one of the most common issues we see in pre-funding legal audits, and it's much easier to address proactively than after the fact.",
      },
      {
        heading: "Founder Agreements and Vesting",
        body: "Investors expect to see a clear founder agreement that addresses key issues like roles, decision-making authority, equity splits, and what happens if a founder departs. Equally important is a vesting schedule for founder equity—typically four years with a one-year cliff.\n\nVesting protects the company and the remaining founders if someone leaves early. Without it, a departing co-founder could walk away with a significant equity stake without having contributed proportionally. While these conversations can be uncomfortable, having them early prevents much larger problems later.",
      },
      {
        heading: "Understanding Term Sheets and Deal Terms",
        body: "Before you negotiate a term sheet, understand what you're agreeing to. Key terms include valuation (pre-money vs. post-money), liquidation preferences, anti-dilution provisions, board composition, and protective provisions that give investors veto rights over certain decisions.\n\nNot all money is equal. A higher valuation with aggressive investor protections may ultimately be worse than a slightly lower valuation with more founder-friendly terms. We help founders understand the long-term implications of deal terms so they can negotiate effectively and avoid provisions that could create problems in future rounds or at exit.\n\nTaking the time to get your legal foundation right before fundraising doesn't just protect you—it demonstrates to investors that you run a disciplined operation, which can positively influence their decision to invest.",
      },
    ],
  },
  {
    title:
      "Commercial Lease Negotiations: Key Provisions Every Tenant Should Understand",
    slug: "commercial-lease-negotiations-key-provisions",
    date: "2024-08-20",
    author: "David Kim",
    tags: ["Real Estate", "Leasing", "Business"],
    excerpt:
      "A commercial lease is one of the most significant financial commitments a business makes. Understanding these critical provisions can save you significant money and headaches.",
    contentSections: [
      {
        heading: "Rent Structure and Escalation",
        body: "Commercial lease rent structures are far more complex than residential leases. Beyond base rent, tenants may be responsible for operating expenses, property taxes, insurance, and common area maintenance—often referred to as 'triple net' or NNN charges. Understanding exactly what you're paying for is the first step in evaluating whether a lease makes financial sense for your business.\n\nRent escalation clauses determine how your rent will increase over the lease term. Fixed annual increases provide predictability, while CPI-based escalations tie your rent to inflation. Some leases include percentage rent provisions that require additional payments based on your gross sales—common in retail leases. Each structure has implications for your long-term occupancy costs that should be carefully modeled before signing.",
      },
      {
        heading: "Build-Out and Improvement Allowances",
        body: "Most commercial spaces require some modification to meet a tenant's operational needs. Negotiating a tenant improvement allowance—a contribution from the landlord toward the cost of build-out—can significantly reduce your upfront costs. The amount of the allowance is negotiable and typically depends on the length of the lease term and market conditions.\n\nPay attention to who owns the improvements at the end of the lease and whether the landlord requires you to restore the space to its original condition. Restoration obligations can be expensive and should be negotiated upfront. We also recommend ensuring that the lease clearly defines the build-out process, including approval timelines and responsibility for cost overruns.",
      },
      {
        heading: "Termination and Renewal Rights",
        body: "Flexibility is valuable in a commercial lease. Early termination rights allow you to exit the lease if your business needs change, though they typically come with penalties or requirements for advance notice. Renewal options give you the right to extend your lease on predetermined terms, protecting you from being displaced or facing dramatic rent increases at the end of your term.\n\nThe specific terms of termination and renewal clauses matter enormously. A renewal option that resets rent to 'fair market value' provides less certainty than one with a fixed increase or cap. We help tenants negotiate terms that provide meaningful flexibility without giving up too much in return.",
      },
      {
        heading: "Assignment and Subletting",
        body: "If your business is acquired, merges with another company, or simply needs to downsize, the ability to assign your lease or sublet your space can be critical. Many standard leases restrict or prohibit assignment and subletting without landlord consent, and some require that any sublease profits be shared with the landlord.\n\nNegotiating reasonable assignment and subletting rights at the outset of the lease gives you important optionality. At minimum, you should seek the right to assign the lease in connection with a sale of your business without requiring landlord consent. These provisions may seem unimportant when you're moving in, but they can become essential if your circumstances change.",
      },
    ],
  },
  {
    title: "Protecting Intellectual Property in the Age of AI",
    slug: "protecting-intellectual-property-age-of-ai",
    date: "2024-07-10",
    author: "Rebecca Okafor",
    tags: ["IP", "Technology", "AI"],
    excerpt:
      "Artificial intelligence is creating new challenges and opportunities for intellectual property protection. Here's how businesses can adapt their IP strategies.",
    contentSections: [
      {
        heading: "Who Owns AI-Generated Content?",
        body: "One of the most fundamental questions in AI and intellectual property law is who owns content created by artificial intelligence. The U.S. Copyright Office has taken the position that copyright protection requires human authorship, meaning that purely AI-generated works—those created without significant human creative input—may not be protectable.\n\nThis has significant implications for businesses that use AI tools to generate marketing copy, code, visual content, or other creative works. If those outputs aren't copyrightable, competitors can freely use them. However, works that involve substantial human selection, arrangement, or creative direction may still qualify for protection. The key is documenting the human contribution to the creative process.",
      },
      {
        heading: "Patent Challenges in Machine Learning",
        body: "Patent protection for AI inventions presents its own challenges. The question of whether an AI system can be named as an inventor has been litigated internationally, with most jurisdictions concluding that only natural persons can be inventors. This means that companies must identify the human inventors who conceived of AI-driven innovations.\n\nBeyond inventorship, patenting AI and machine learning innovations requires navigating subject matter eligibility rules that can exclude abstract ideas and mathematical algorithms from patent protection. Successful patent applications in this space typically focus on the technical implementation and practical application of AI methods rather than the underlying algorithms themselves. Strategic patent drafting is essential to securing meaningful protection.",
      },
      {
        heading: "Trade Secret Considerations for AI",
        body: "For many companies, trade secret protection may be the most practical approach to protecting AI-related innovations. Training data, model architectures, hyperparameters, and proprietary datasets can all qualify as trade secrets if the company takes reasonable measures to maintain their secrecy.\n\nHowever, the collaborative and open-source nature of much AI development creates tension with trade secret protection. Companies need clear policies about what information is proprietary, how it should be handled, and what employees and contractors can and cannot share. This is particularly important given the high mobility of AI talent and the frequency with which researchers move between organizations.",
      },
      {
        heading: "Building an AI-Ready IP Strategy",
        body: "An effective IP strategy for the AI age requires a multi-layered approach. Start by auditing your current IP portfolio and identifying assets that are most critical to your competitive position. Consider whether each asset is best protected through patents, trade secrets, copyrights, or a combination of these mechanisms.\n\nImplement robust agreements with employees, contractors, and collaborators that address AI-specific issues like ownership of training data, models, and outputs. Establish clear internal policies about the use of third-party AI tools and open-source AI frameworks, which may have licensing terms that affect your ability to commercialize derivative works.\n\nFinally, stay informed about the rapidly evolving legal landscape. New legislation, court decisions, and regulatory guidance are emerging regularly, and proactive adaptation is far more effective than reactive compliance.",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Apex guided us through a complex acquisition with remarkable efficiency. Their team anticipated issues before they became problems and kept the deal on track from start to finish. We've worked with larger firms before, but the level of personal attention here is unmatched.",
    nameOrRole: "CEO",
    industry: "FinTech Company",
  },
  {
    quote:
      "When we faced a significant employment dispute, Michael and his team were exactly what we needed—thorough, strategic, and calm under pressure. They understood our business and found a resolution that let us move forward.",
    nameOrRole: "Operations Director",
    industry: "Real Estate Development Firm",
  },
  {
    quote:
      "Rebecca helped us build an IP strategy from scratch. She took the time to understand our technology and our competitive landscape, and the portfolio she helped us develop has been instrumental in securing our Series B funding.",
    nameOrRole: "Founder & CTO",
    industry: "AI / Machine Learning Startup",
  },
];

export const faqs: SiteFAQ[] = [
  {
    question: "How do I know if I need a lawyer?",
    answer:
      "If you're facing a legal issue that could affect your finances, business, family, or freedom, it's worth consulting an attorney. We offer initial consultations to help you understand your situation and determine whether legal representation is advisable. Even when the answer is 'not yet,' we can help you identify the signs that it's time to act.",
  },
  {
    question: "What are your fees and billing practices?",
    answer:
      "We believe in transparent billing. Most of our work is billed on an hourly basis, with rates that reflect the experience level of the attorney handling your matter. For certain types of engagements, we offer flat-fee or alternative fee arrangements. We discuss fees openly during our initial consultation so there are no surprises.",
  },
  {
    question: "How long does a legal matter typically take to resolve?",
    answer:
      "Timelines vary significantly depending on the nature and complexity of the matter. A straightforward contract review might take days, while complex litigation can extend over months or even years. During our initial assessment, we'll give you a realistic estimate based on the specifics of your situation.",
  },
  {
    question: "Do you offer free initial consultations?",
    answer:
      "We offer a complimentary 30-minute initial consultation for most matter types. This meeting allows us to understand your situation, assess how we can help, and discuss fees and next steps. There is no obligation to retain the firm after the consultation.",
  },
  {
    question: "What practice areas does your firm cover?",
    answer:
      "We maintain active practices in Corporate & Commercial law, Employment & Labor, Real Estate & Property, Litigation & Dispute Resolution, Intellectual Property, and Family Law & Estate Planning. Our team structure allows us to staff matters with attorneys who have relevant subject-matter expertise while maintaining the responsiveness of a smaller firm.",
  },
  {
    question: "Can you handle legal matters outside of New York?",
    answer:
      "Yes. Several of our attorneys are admitted in multiple jurisdictions, and we regularly handle matters with multi-state or national dimensions. For matters in jurisdictions where we are not admitted, we work with trusted local counsel to ensure seamless representation.",
  },
];
