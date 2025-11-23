# Landing Page Copy Update Plan
## Based on Business Notes - Using TOON & POML

**Created:** 2025-01-21  
**Status:** Planning  
**Objective:** Update landing page copy to reflect Lead Orchestra business model, positioning, and value propositions from business notes

---

## 📋 Executive Summary

This plan outlines the systematic update of the Lead Orchestra landing page copy to align with the business model documented in the Business Model Notes. The update will use **TOON (Token Oriented Object Notation)** for structured data representation and **POML (Project Orchestration Markup Language)** for workflow orchestration.

---

## 🎯 Key Business Model Points to Reflect

### 1. Dual-Engine Business Model
- **Engine 1:** Open-Source Freemium (Distribution Engine)
  - Free, open-source, local-first
  - MCP-based, developer-friendly
  - Zero marginal cost per user
  - Community-powered growth

- **Engine 2:** Deal Scale AI Monetization (Revenue Engine)
  - Natural upsell to Deal Scale
  - Enrichment, scoring, AI follow-up
  - CRM sync, automations

### 2. Core Positioning
- **Tagline:** "Open-source lead scraping and data ingestion that plugs into anything"
- **Value Prop:** The open-source engine that powers your lead pipeline
- **Differentiation:** Not a CRM, AI engine, or outreach tool - ONLY data ingestion layer

### 3. Target Audiences (ICP)
- Developers needing reliable scraping + schemas
- Lead-gen agencies (SEO, recruiting, real estate, local services)
- Startups needing scraping without compliance-heavy infrastructure
- Enterprise Data Teams (RevOps, SDR, Growth)

### 4. Key Features to Highlight
- MCP server framework
- Playwright + proxy adapter
- CLI tools
- Standardized TOON/JSON output schemas
- Plugin ecosystem
- Open-source templates
- Developer SDKs

---

## 📊 TOON Data Structure for Copy Management

### TOON Schema: Landing Copy Sections

```toon
landing_copy_sections[8]{
  section_id,
  section_name,
  current_copy,
  updated_copy,
  business_note_source,
  toon_data_ref,
  status,
  priority
}:
hero, Hero Section, "Current hero copy...", "Open-source lead scraping...", business_model.md, hero.toon, pending, high
value_prop, Value Proposition, "Current value prop...", "The open-source engine...", brian_dump_1.md, value_prop.toon, pending, high
features, Features Section, "Current features...", "MCP-based scraping...", business_model.md, features.toon, pending, medium
pricing, Pricing Section, "Current pricing...", "Free open-source + Deal Scale upsell...", pricing.md, pricing.toon, pending, high
cta, Call to Action, "Current CTA...", "Get started free...", business_model.md, cta.toon, pending, high
testimonials, Social Proof, "Current testimonials...", "Developer testimonials...", business_model.md, testimonials.toon, pending, low
integrations, Integrations, "Current integrations...", "Deal Scale, MCP, API...", brian_dump_1.md, integrations.toon, pending, medium
footer, Footer Copy, "Current footer...", "Open-source + Enterprise...", business_model.md, footer.toon, pending, low
```

### TOON Schema: Copy Tokens

```toon
copy_tokens[15]{
  token_id,
  token_name,
  token_value,
  token_type,
  usage_count,
  section_refs
}:
tagline, Main Tagline, "Open-source lead scraping and data ingestion that plugs into anything", headline, 3, hero,value_prop,footer
value_engine1, Engine 1 Value, "Free, open-source, MCP-based scraping engine", description, 2, hero,features
value_engine2, Engine 2 Value, "Natural upsell to Deal Scale for AI enrichment", description, 2, pricing,cta
target_dev, Target Developers, "Developers needing reliable scraping + schemas", audience, 1, hero
target_agency, Target Agencies, "Lead-gen agencies (SEO, recruiting, real estate)", audience, 1, hero
target_startup, Target Startups, "Startups needing scraping without compliance overhead", audience, 1, hero
target_enterprise, Target Enterprise, "Enterprise Data Teams (RevOps, SDR, Growth)", audience, 1, hero
feature_mcp, MCP Feature, "MCP server framework for AI-native scraping", feature, 1, features
feature_playwright, Playwright Feature, "Playwright + proxy adapter for reliable scraping", feature, 1, features
feature_cli, CLI Feature, "Developer-friendly CLI tools", feature, 1, features
feature_toon, TOON Output, "Standardized TOON/JSON output schemas", feature, 1, features
feature_plugins, Plugin Ecosystem, "Open-source plugin marketplace", feature, 1, features
pricing_free, Free Tier, "100% free and open-source", pricing, 1, pricing
pricing_enterprise, Enterprise Tier, "Self-hosted enterprise licensing", pricing, 1, pricing
differentiation, Differentiation, "Not a CRM, AI engine, or outreach tool - ONLY data ingestion", positioning, 2, value_prop,features
```

---

## 🔄 POML Workflow for Copy Update Process

```poml
<poml version="3.0">
  <role>
    Landing Page Copy Update Orchestrator - Systematically update all landing page copy sections based on business notes using TOON data structures and POML workflows.
  </role>

  <memory name="CopyUpdateContext">
    <field name="businessNotesPath" type="string" description="Path to business notes directory"/>
    <field name="landingCopyPath" type="string" description="Path to landing page copy files"/>
    <field name="toonDataPath" type="string" description="Path to TOON data files"/>
    <field name="sectionsUpdated" type="array" description="List of sections that have been updated"/>
    <field name="sectionsPending" type="array" description="List of sections pending update"/>
  </memory>

  <task>
    <section title="Copy Update Workflow">
      <steps>
        <step id="1" name="Extract Business Notes Content">
          <function name="extractBusinessNotes">
            // Extract key messaging from business notes
            business_model = READ_FILE("business_model.md")
            brian_dump = READ_FILE("brian_dump_1.md")
            pricing = READ_FILE("pricing.md")
            
            // Extract key phrases, taglines, value props
            key_messages = EXTRACT_MESSAGES([business_model, brian_dump, pricing])
            
            RETURN key_messages
          </function>
        </step>

        <step id="2" name="Generate TOON Copy Data">
          <function name="generateToonCopyData">
            // Convert extracted messages to TOON format
            copy_tokens = GENERATE_TOON_TOKENS(key_messages)
            copy_sections = GENERATE_TOON_SECTIONS(copy_tokens)
            
            // Save TOON files
            WRITE_FILE("landing_copy_tokens.toon", copy_tokens)
            WRITE_FILE("landing_copy_sections.toon", copy_sections)
            
            RETURN {copy_tokens, copy_sections}
          </function>
        </step>

        <step id="3" name="Map TOON Data to Landing Sections">
          <function name="mapToonToSections">
            // Map TOON tokens to actual landing page sections
            section_mapping = {
              hero: ["tagline", "value_engine1", "target_dev", "target_agency"],
              value_prop: ["tagline", "differentiation", "value_engine1", "value_engine2"],
              features: ["feature_mcp", "feature_playwright", "feature_cli", "feature_toon", "feature_plugins"],
              pricing: ["pricing_free", "pricing_enterprise", "value_engine2"],
              cta: ["value_engine2", "pricing_free"],
              integrations: ["feature_mcp", "value_engine2"]
            }
            
            RETURN section_mapping
          </function>
        </step>

        <step id="4" name="Update Landing Page Copy Files">
          <function name="updateLandingCopy">
            FOR each section in section_mapping:
              current_copy = READ_LANDING_SECTION(section)
              new_copy = GENERATE_COPY_FROM_TOON(section_mapping[section])
              
              // Update component files
              UPDATE_COMPONENT(section, new_copy)
              
              // Track updates
              CopyUpdateContext.sectionsUpdated.append(section)
            ENDFOR
          </function>
        </step>

        <step id="5" name="Validate and Review">
          <function name="validateUpdates">
            // Validate all sections updated
            FOR each section in CopyUpdateContext.sectionsUpdated:
              VALIDATE_COPY(section)
              CHECK_BUSINESS_ALIGNMENT(section)
            ENDFOR
            
            // Generate review document
            review_doc = GENERATE_REVIEW_DOC(CopyUpdateContext.sectionsUpdated)
            WRITE_FILE("copy_update_review.md", review_doc)
          </function>
        </step>
      </steps>
    </section>
  </task>
</poml>
```

---

## 📝 Detailed Section Update Plan

### 1. Hero Section
**Current State:** [To be analyzed]  
**Target State:**
- Headline: "Open-source lead scraping and data ingestion that plugs into anything"
- Subheadline: "The free, MCP-based scraping engine that powers your lead pipeline. Built for developers, agencies, and data teams."
- CTA Primary: "Get Started Free (Open Source)"
- CTA Secondary: "View on GitHub"

**TOON Reference:** `hero.toon`  
**Business Notes Source:** `business_model.md`, `brian_dump_1.md`  
**Priority:** High

---

### 2. Value Proposition Section
**Current State:** [To be analyzed]  
**Target State:**
- Main Value: "We're NOT a CRM, AI engine, or outreach tool. We're ONLY the data ingestion layer."
- Engine 1: "Free, open-source scraping with zero marginal cost"
- Engine 2: "Natural upsell to Deal Scale for AI enrichment, scoring, and automation"
- Differentiation: Clear separation from competitors (Apollo, Clay, ZoomInfo, PhantomBuster)

**TOON Reference:** `value_prop.toon`  
**Business Notes Source:** `business_model.md`  
**Priority:** High

---

### 3. Features Section
**Current State:** [To be analyzed]  
**Target State:**
- MCP Server Framework (AI-native architecture)
- Playwright + Proxy Adapter (Reliable scraping)
- CLI Tools (Developer-friendly)
- TOON/JSON Output Schemas (Standardized data)
- Plugin Ecosystem (Community-powered)
- Open-Source Templates (GitHub-ready)

**TOON Reference:** `features.toon`  
**Business Notes Source:** `brian_dump_1.md`  
**Priority:** Medium

---

### 4. Pricing Section
**Current State:** [To be analyzed]  
**Target State:**
- Free Tier: "100% free and open-source - no credit card required"
- Enterprise Tier: "Self-hosted enterprise licensing - $7,999/year"
- Deal Scale Integration: "Natural upsell to Deal Scale for AI features"
- Success Bonus Model: Mentioned for Deal Scale integration

**TOON Reference:** `pricing.toon`  
**Business Notes Source:** `pricing.md`  
**Priority:** High

---

### 5. Target Audience Section
**Current State:** [To be analyzed]  
**Target State:**
- Developers: "Reliable scraping + standardized schemas"
- Agencies: "Lead-gen, SEO, recruiting, real estate, local services"
- Startups: "Scraping without compliance-heavy infrastructure"
- Enterprise: "RevOps, SDR, Growth teams needing custom solutions"

**TOON Reference:** `audience.toon`  
**Business Notes Source:** `brian_dump_1.md`  
**Priority:** Medium

---

### 6. Integrations Section
**Current State:** [To be analyzed]  
**Target State:**
- Deal Scale Integration (Primary)
- MCP Protocol Support
- API Access
- Webhook System
- GitHub Actions Templates
- SDKs (JS, Python, Go)

**TOON Reference:** `integrations.toon`  
**Business Notes Source:** `brian_dump_1.md`  
**Priority:** Medium

---

### 7. Call-to-Action Section
**Current State:** [To be analyzed]  
**Target State:**
- Primary CTA: "Start Scraping Free" → Links to GitHub
- Secondary CTA: "Enrich Leads in Deal Scale" → Links to Deal Scale
- Developer CTA: "View Documentation" → Links to docs
- Enterprise CTA: "Contact Sales" → Links to contact form

**TOON Reference:** `cta.toon`  
**Business Notes Source:** `business_model.md`  
**Priority:** High

---

## 🛠️ Implementation Steps

### Phase 1: Data Extraction & TOON Generation (Week 1)
1. ✅ Extract all key messaging from business notes
2. ✅ Generate TOON data structures for copy tokens
3. ✅ Create TOON schema files for each section
4. ✅ Map business notes to landing sections

### Phase 2: Copy Writing (Week 1-2)
1. ⏳ Write new copy for each section based on TOON tokens
2. ⏳ Ensure consistency across all sections
3. ⏳ Align with business model positioning
4. ⏳ Review for clarity and developer-friendliness

### Phase 3: Component Updates (Week 2)
1. ⏳ Update React/Next.js components with new copy
2. ⏳ Update meta tags and SEO content
3. ⏳ Update Open Graph tags
4. ⏳ Update structured data (JSON-LD)

### Phase 4: Testing & Validation (Week 2-3)
1. ⏳ Test all CTAs and links
2. ⏳ Validate TOON data integrity
3. ⏳ Review for business alignment
4. ⏳ A/B test key messaging

### Phase 5: Deployment (Week 3)
1. ⏳ Deploy to staging
2. ⏳ Final review
3. ⏳ Deploy to production
4. ⏳ Monitor analytics

---

## 📁 File Structure

```
landing/
├── _docs/
│   └── _business/
│       ├── landing-copy-update-plan.md (this file)
│       ├── business_model.md
│       ├── brian_dump_1.md
│       └── pricing.md
├── data/
│   └── toon/
│       ├── landing_copy_tokens.toon
│       ├── landing_copy_sections.toon
│       ├── hero.toon
│       ├── value_prop.toon
│       ├── features.toon
│       ├── pricing.toon
│       └── cta.toon
├── poml/
│   └── copy-update-workflow.poml
└── src/
    └── components/
        └── landing/
            ├── Hero.tsx
            ├── ValueProp.tsx
            ├── Features.tsx
            ├── Pricing.tsx
            └── CTA.tsx
```

---

## ✅ Success Criteria

1. **Business Alignment:** All copy reflects the dual-engine business model
2. **TOON Integration:** All copy data stored in TOON format for easy updates
3. **POML Workflow:** Copy update process documented in POML
4. **Developer Focus:** Messaging clearly targets developer/technical audience
5. **Clear Differentiation:** Positioned as data ingestion layer, not CRM/AI tool
6. **Deal Scale Integration:** Natural upsell path clearly communicated
7. **SEO Optimized:** All copy optimized for search while maintaining clarity

---

## 📚 References

- Business Model Notes: `_docs/_business/business_model.md`
- Brian Dump 1: `_docs/_business/brian_dump_1.md`
- Pricing Model: `_docs/_business/pricing.md`
- TOON Documentation: `packages/shared/src/toonjs/README.md`
- POML Documentation: `landing/landing/poml/discover-landing-structure.poml`

---

## 🔄 Next Steps

1. Review and approve this plan
2. Extract current landing page copy for comparison
3. Generate TOON data structures
4. Begin Phase 1 implementation
5. Set up POML workflow automation

---

**Last Updated:** 2025-01-21  
**Owner:** Product Team  
**Status:** Planning → Ready for Implementation




















