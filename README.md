<div align="center">

  <picture>

    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Lead-Orchestra/lead-orchestra-frontend/main/public/vite.svg">

    <img src="https://raw.githubusercontent.com/Lead-Orchestra/lead-orchestra-frontend/main/public/vite.svg" alt="Lead Orchestra Logo" width="200"/>

  </picture>



  <h1>Lead Orchestra</h1>

  <p><strong>Scrape Anything • Clean Everything • Export Everywhere</strong></p>



  [![GitHub stars](https://img.shields.io/github/stars/Lead-Orchestra/lead-orchestra-frontend?logo=github)](https://github.com/Lead-Orchestra/lead-orchestra-frontend/stargazers)

  [![License: MIT](https://img.shields.io/github/license/Lead-Orchestra/lead-orchestra-frontend)](LICENSE)

  [![Next.js](https://img.shields.io/badge/Next.js-13+-000000?logo=next.js&logoColor=white)](https://nextjs.org/)

  [![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>



---



## 🚀 What is Lead Orchestra?



Lead Orchestra is an open-source scraping engine built for modern growth teams and developers.



You paste a URL (or list of URLs) → Lead Orchestra scrapes the pages → it normalizes & cleans the data → you export it (CSV/JSON) or push to your pipeline (e.g., for enrichment in Deal Scale).



> Unlike traditional paid databases, you control the datasource — no credits, no rented lists, no stale data.



---



## 🔍 Why It Matters



- **Outdated data**, generic lists and high costs plague outbound teams.  

- **Scraping on your own** has been hard, brittle and complex.  

- Lead Orchestra gives you *fresh*, *untouched*, *niche-specific* leads — an unfair advantage.



---



## ✨ Features



- **MCP Plugin Architecture**: Add new "provider" scrapers easily.  

- **Lead Standard Format (LSF)**: All output normalized (name, email, phone, company, website, source, timestamp).  

- **One-click scrape**: Enter URL(s), hit "Scrape", get results.  

- **Export**: CSV / JSON download.  

- **Upgrade-ready**: Send exported results to Deal Scale for enrichment, scoring, AI-follow-up.  

- **Open Source**: No vendor lock-in, fully transparent.

- **Real-Time Dashboard**: Beautiful analytics and visualization of scraping performance

- **Multi-Source Scraping**: BiggerPockets forums, business directory, user profiles, and more

- **AI-Powered Extraction**: ScrapeGraphAI integration for intelligent data extraction

- **Proxy Support**: Bright Data SDK integration for bypassing rate limits

- **Stealth Browsers**: Camoufox and Lightpanda support for anti-detection scraping



---



## 🖼 Demo Screenshots



<div align="center">

  <img src="./public/images/charts/dashboard.png" alt="Dashboard Screenshot" width="800"/>

  <p><em>Lead Orchestra Dashboard - Real-time analytics and performance monitoring</em></p>

  

  <img src="./public/images/charts/rechart.png" alt="Charts Screenshot" width="800"/>

  <p><em>Advanced charting and data visualization capabilities</em></p>

</div>



---



## 🧭 Getting Started



### Prerequisites  

- Node.js 20+  

- pnpm 9.0.0+

- Optionally Docker if you use the local mode



### Installation  



```bash

git clone https://github.com/Lead-Orchestra/lead-orchestra-frontend.git

cd lead-orchestra-frontend

pnpm install

```



### Run locally



```bash

pnpm run dev

```



### Quick Start



```bash

# 1. Add a URL or upload list

# 2. Click "Scrape"

# 3. Download CSV/JSON

# 4. (Optional) Push to Deal Scale for enrichment

```



---



## 📦 Usage Example



```js

import { scrape } from 'lead-orchestra';



const results = await scrape('https://example-domain.com/directory');

console.log(results);

/*

[

  {

    name: "Jane Doe",

    email: "jane@example.com",

    phone: "123-456-7890",

    company: "ExampleCo",

    website: "example.com",

    source_url: "https://example-domain.com/directory/jane-doe",

    timestamp: "2025-11-21T12:34:56Z"

  },

  …

]

*/

```



---



## 🎯 Use Cases



* Grow unique lead lists for cold outreach, niche verticals.

* Developers building scraper-based side-projects or SaaS.

* Real-estate teams scraping FSBO or off-market sources.

* Agencies seeking fresh data edge.

* SDR teams wanting clean lists for high-volume outreach.



---



## 🤝 Contributing & Plugin System



We welcome contributions!



1. Fork the repo.

2. Create a new branch: `feature/your-provider`.

3. See `mcp/providers/README.md` for how to build a plugin.

4. Submit a pull request.



Please read our [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) and [CONTRIBUTING.md](CONTRIBUTING.md) before submitting.



---



## 📜 Roadmap



| Version | Feature / Plan                                     |

| ------- | -------------------------------------------------- |

| v1.0.0  | MVP: Core scraping, export, LSF support            |

| v1.1.0  | Plugin marketplace, UI enhancements                |

| v2.0.0  | Hosted SaaS edition, direct Deal Scale integration |

| v3.0.0+ | Multi-user, team plans, workflow automation        |



---



## 📞 Support



Need help or want to say hi?



* Issues: [https://github.com/Lead-Orchestra/lead-orchestra-frontend/issues](https://github.com/Lead-Orchestra/lead-orchestra-frontend/issues)



---



## 📄 License



Distributed under the MIT License. See the [LICENSE](LICENSE) file for details.



---



## 📎 Acknowledgments



Thanks to [jehna/readme-best-practices](https://github.com/jehna/readme-best-practices) for README templates and [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template) for inspiration.



---



*Last updated: 2025-11-21*
