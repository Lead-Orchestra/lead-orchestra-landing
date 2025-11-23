# SEO Sync from Notion - Iterative Update Guide

This guide explains how to iteratively sync SEO metadata from Notion to both static and dynamic SEO configurations.

## Overview

The SEO sync system allows you to:
1. **Store SEO metadata in Notion** (pages or databases)
2. **Fetch SEO data** from Notion using MCP
3. **Update static SEO** (`landing/src/data/constants/seo.ts`)
4. **Update dynamic SEO** (`landing/src/utils/seo/dynamic/*.ts`)

## Setup

### 1. Create SEO Pages in Notion

Create pages in Notion for each route that needs SEO. Include:
- **Title**: Page title
- **Description**: Meta description
- **Keywords**: Comma-separated keywords
- **Canonical URL**: Full canonical URL
- **Image**: OG image path
- **Priority**: Sitemap priority (0.0-1.0)
- **Change Frequency**: always | hourly | daily | weekly | monthly | yearly | never

### 2. Map Notion Pages to Routes

Update `landing/src/utils/seo/notion-sync.ts`:

```typescript
export const NOTION_SEO_PAGE_MAP: Record<string, string> = {
  '/': 'your-notion-page-id',
  '/pricing': 'another-notion-page-id',
  // Add more mappings
};
```

## Iterative Sync Process

### Step 1: Fetch from Notion

Use the Notion MCP to fetch SEO data:

```typescript
import { mcp_notion_notion-fetch } from '@modelcontextprotocol/sdk';

const pageId = 'your-notion-page-id';
const page = await mcp_notion_notion-fetch({ id: pageId });
```

### Step 2: Extract SEO Data

Use `extractSeoFromNotionContent()` to parse the page content:

```typescript
import { extractSeoFromNotionContent } from '@/utils/seo/notion-sync';

const seoData = extractSeoFromNotionContent(page.text);
```

### Step 3: Update Static SEO

Update `landing/src/data/constants/seo.ts`:

```typescript
import { mergeSeoData } from '@/utils/seo/notion-sync';
import { STATIC_SEO_META } from '@/data/constants/seo';

const updated = mergeSeoData(STATIC_SEO_META['/'], seoData);
STATIC_SEO_META['/'] = updated;
```

### Step 4: Update Dynamic SEO

For dynamic pages (services, case studies, blog posts), update the respective generators:

- **Services**: `landing/src/utils/seo/dynamic/services.ts`
- **Case Studies**: `landing/src/utils/seo/dynamic/case-studies.ts`
- **Blog Posts**: `landing/src/utils/seo/dynamic/blog.ts`
- **Products**: `landing/src/utils/seo/dynamic/product.ts`

## Example: Updating Homepage SEO

1. **Fetch from Notion**:
   ```bash
   # Use Notion MCP to fetch brand guidelines page
   ```

2. **Extract SEO**:
   ```typescript
   const seo = extractSeoFromNotionContent(notionPageContent);
   ```

3. **Update Static SEO**:
   ```typescript
   // In landing/src/data/constants/seo.ts
   "/": {
     title: seo.title || "Lead Orchestra | Open-Source Lead Scraping",
     description: seo.description || "...",
     // ... merge with existing
   }
   ```

4. **Verify**:
   - Check `landing/src/app/page.tsx` uses `getStaticSeo('/')`
   - Verify metadata in browser dev tools
   - Test with SEO validators

## Automated Sync Script

Run the sync script (when fully implemented):

```bash
cd landing
npx tsx scripts/sync-seo-from-notion.ts
```

## Best Practices

1. **Iterative Updates**: Update one page at a time, test, then move to next
2. **Version Control**: Commit after each successful sync
3. **Validation**: Always validate SEO metadata after updates
4. **Fallbacks**: Keep default SEO values as fallbacks
5. **Documentation**: Document any manual overrides in code comments

## Current Status

- ✅ SEO sync utilities created
- ✅ Notion content extraction implemented
- ✅ Merge functions ready
- ⏳ Full automation script (in progress)
- ⏳ Notion database integration (in progress)

## Next Steps

1. Create SEO database in Notion with proper schema
2. Implement full sync script with file writing
3. Add validation and error handling
4. Set up automated sync on build/deploy




















