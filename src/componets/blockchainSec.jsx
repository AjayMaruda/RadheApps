export const solutions = [
  {
    icon: "🖼️",
    title: "NFT Development",
    description:
      "Create and manage NFTs with secure smart contracts and seamless integration into marketplaces.",
    linkText: "Create and manage NFTs",
    linkHref: "#",
    linkColor: "text-blue-400",
  },
  {
    icon: "💳",
    title: "Blockchain Payment Platform",
    description:
      "Enable secure, fast, and transparent blockchain-based payment processing for businesses and users.",
  },
  {
    icon: "🧠",
    title: "DAO Development",
    description:
      "Build decentralized autonomous organizations with transparent governance and automated decision-making.",
    linkText: "Build decentralized autonomous organizations",
    linkHref: "#",
    linkColor: "text-blue-400",
  },
  {
    icon: "🏦",
    title: "DeFi Development",
    description:
      "Launch decentralized finance solutions like lending, staking, and yield farming platforms.",
  },
  {
    icon: "🔗",
    title: "Smart Contract Development",
    description:
      "Design and deploy secure, self-executing smart contracts tailored to your business needs.",
  },
  {
    icon: "📊",
    title: "Token Development",
    description:
      "Create utility, governance, or security tokens with custom logic on Ethereum, BSC, or Solana.",
  },
  {
    icon: "🔐",
    title: "Wallet Development",
    description:
      "Build secure multi-asset wallets with features like 2FA, backup, and easy onboarding.",
  },
  {
    icon: "🕸️",
    title: "Private Blockchain Development",
    description:
      "Develop permissioned blockchain networks for internal enterprise data sharing and operations.",
  },
  {
    icon: "⚙️",
    title: "Blockchain Consulting",
    description:
      "Get expert guidance on architecture, tokenomics, compliance, and scaling your blockchain product.",
  },
];

export const FAQ = () => {

    const FAQcont = [
      {
        id: "001",
        que: "What is a Blockchain Development Company?",
        ans: "A blockchain development company specializes in creating decentralized applications and solutions, offering blockchain development services to enhance business processes with transparency and security."
      },
      {
        id: "002",
        que: "How much does it Cost to Develop a Blockchain App?",
        ans: "Development costs vary based on project complexity and requirements. Consulting a blockchain development company is essential to obtain an accurate quote tailored to your specific needs."
      },
      {
        id: "003",
        que: "How Long Does it take to Develop a Blockchain Solution?",
        ans: "Development timelines depend on project scope and complexity. A blockchain development company can provide an estimated timeframe based on your specific requirements."
      },
      {
        id: "004",
        que: "What Industries can Benefit from Blockchain Development Services?",
        ans: "Industries such as finance, healthcare, supply chain, and real estate can leverage blockchain development services to improve transparency, security, and operational efficiency."
      },
      {
        id: "005",
        que: "Can Blockchain Development Services Integrate with Existing Systems?",
        ans: "Yes, a blockchain development company can integrate blockchain solutions with existing systems, enhancing data security and process automation."
      },
      {
        id: "006",
        que: "What is the Role of Smart Contracts in Blockchain Development Services?",
        ans: "Smart contracts are self-executing agreements coded within blockchain platforms. A blockchain development company utilizes them to automate and enforce contract terms without intermediaries."
      }
    ];
  
    return (
      <>
        <div className="flex justify-center">
        <div className="bg-white w-7/12 items-center space-y-3 mb-6 font-semibold">
          {FAQcont.map((faq) => (
            <div key={faq.id} className="collapse collapse-arrow bg-white border-b-2 border-black font-semibold">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-medium text-black peer-checked:bg-green-400 peer-checked:text-black">
                {faq.que}
              </div>
              <div className="collapse-content bg-green-100 text-gray-700 peer-checked:bg-green-200 peer-checked:text-black">
                <p>{faq.ans}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </>
    );
  };
