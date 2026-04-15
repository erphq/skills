---
title: Localization & Internationalization
description: Build ERP applications for global use -- use when implementing multi-language support, multi-currency handling, timezone management, locale-specific formatting, and multi-country regulatory compliance.
audience: both
category: skill
related:
  - skills/data-modeling.md
  - skills/configuration-management.md
  - skills/reporting-analytics.md
  - skills/workflow-automation.md
---

# Localization & Internationalization

## Purpose

Enterprise software serves global organizations. A single ERP instance may process purchase orders in Japanese, calculate VAT for a German subsidiary, display financial reports in Arabic (right-to-left), convert between Brazilian Real and Euro, and schedule batch jobs across twelve time zones -- all simultaneously.

Internationalization (i18n) is the architecture that makes an application capable of supporting multiple languages, currencies, and locales without code changes. Localization (l10n) is the process of adapting the application for a specific locale -- translating strings, configuring currency rules, formatting dates and numbers, and complying with local regulations.

Builders need this skill when:

- The application must display its UI in more than one language
- Financial transactions involve multiple currencies with exchange rate conversions
- Users operate across time zones and expect dates and times to reflect their local context
- Business operations span countries with different tax rules, legal requirements, and document formats
- Address, phone number, and name formats vary by country
- Reports and documents must be generated in the recipient's language and format
- A single platform instance serves tenants in multiple countries

Getting localization wrong has tangible consequences: invoices rejected by tax authorities because the date format is wrong, financial statements with currency conversion errors, user interfaces that break when translated into languages with longer words, and scheduling bugs that cause jobs to run at the wrong time during daylight saving transitions.

## Key Concepts

### Internationalization Architecture

**i18n vs l10n**: Internationalization (i18n) is the engineering work -- externalizing strings, supporting Unicode, designing for variable-length text, using locale-aware formatting APIs. It happens once and enables all future localization. Localization (l10n) is the content work -- translating strings, configuring locale-specific rules, validating against local regulations. It happens per locale.

**i18n first**: Retrofitting internationalization into an application that was built assuming a single language and locale is extraordinarily expensive. Build i18n into the architecture from day one, even if the first release supports only one language.

**Unicode and UTF-8**: All text storage, transmission, and processing must use UTF-8. This is non-negotiable.

| Layer | Requirement |
|---|---|
| **Database** | Column collation set to `utf8mb4` (MySQL) or equivalent. Supports full Unicode including CJK characters and emoji. |
| **API** | `Content-Type: application/json; charset=utf-8` on all responses. Accept UTF-8 on all inputs. |
| **File I/O** | Read and write files with explicit UTF-8 encoding. Never rely on system default encoding. |
| **Search and Sort** | Use locale-aware collation for sorting (German ä sorts differently than English a). Use Unicode-aware full-text search. |
| **String Length** | Measure string length in characters (code points), not bytes. A single emoji can be 4 bytes. Database column sizes must account for multi-byte characters. |

**String externalization**: No user-visible string should be hard-coded in source code. Every string is stored in a resource bundle (key-value file) keyed by a stable identifier.

```
# en-US.yaml
invoice.title: "Invoice"
invoice.due_date_label: "Due Date"
invoice.amount_due: "Amount Due"
invoice.overdue_warning: "This invoice is {days} days past due."

# de-DE.yaml
invoice.title: "Rechnung"
invoice.due_date_label: "Fälligkeitsdatum"
invoice.amount_due: "Fälliger Betrag"
invoice.overdue_warning: "Diese Rechnung ist {days} Tage überfällig."
```

**ICU Message Format**: Use ICU (International Components for Unicode) message format for strings that contain variables, plurals, or gender-dependent text. ICU handles the complexity of pluralization and gender across languages.

```
# English: "You have 1 item" vs "You have 5 items"
# ICU format:
cart.item_count: "{count, plural, one {You have # item} other {You have # items}}"

# Arabic has six plural forms (zero, one, two, few, many, other):
cart.item_count: "{count, plural, zero {ليس لديك عناصر} one {لديك عنصر واحد} two {لديك عنصران} few {لديك # عناصر} many {لديك # عنصرًا} other {لديك # عنصر}}"
```

erp.ai's localization framework uses ICU Message Format natively and provides a String Manager UI for translators.

### Multi-Language Support

**Translation workflows**:

| Stage | Actor | Activity |
|---|---|---|
| **Extract** | Build system | Scan source code and templates for new/changed translatable strings. Generate a translation request file. |
| **Translate** | Translator (human or MT) | Translate strings from the source language to the target language(s). |
| **Review** | In-country reviewer | Verify translations for accuracy, tone, and domain correctness. |
| **Integrate** | Build system | Merge approved translations into the resource bundles. |
| **Test** | QA | Verify strings display correctly in context (not just in isolation). |

**Fallback chains**: When a string is not available in the user's preferred locale, fall back through a defined chain:

```
pt-BR (Brazilian Portuguese)
  -> pt (Portuguese)
    -> en-US (English US, platform default)
      -> key ID (display the string key as last resort, for debugging)
```

Never show a blank string. Always fall back to something readable.

**Right-to-left (RTL) layout**: Arabic, Hebrew, Farsi, and Urdu are RTL languages. RTL support requires:

- CSS `direction: rtl` and logical properties (`margin-inline-start` instead of `margin-left`).
- Mirrored layouts (navigation on the right, back buttons on the right).
- Bidirectional text handling (embedded LTR text within RTL, e.g., product codes, URLs).
- Icon mirroring (directional icons like arrows must flip; non-directional icons like a phone do not).
- Table column order reversal.

erp.ai's component library includes RTL-aware components that automatically mirror based on the active locale direction.

**Pluralization rules**: English has two plural forms (singular and plural). Other languages have more:

| Language | Plural Forms | Example |
|---|---|---|
| English | 2 (one, other) | 1 item, 2 items |
| French | 2 (one, other) | 0 élément, 1 élément, 2 éléments (note: 0 is singular in French) |
| Arabic | 6 (zero, one, two, few, many, other) | Complex rules based on the number |
| Japanese | 1 (other) | No plural distinction |
| Polish | 3 (one, few, many) | 1 plik, 2 pliki, 5 plików |

Use CLDR (Common Locale Data Repository) plural rules. Never hand-code plural logic.

**Gender-aware translations**: Some languages require gender agreement. "Your invoice was sent" translates differently in French depending on who "your" refers to. ICU Message Format supports `select` for gender:

```
notification.invoice_sent: "{gender, select, female {Votre facture a été envoyée} male {Votre facture a été envoyé} other {Votre facture a été envoyé(e)}}"
```

### Multi-Currency Handling

**Core currency concepts**:

| Concept | Definition | Example |
|---|---|---|
| **Functional currency** | The currency of the primary economic environment where the entity operates. Used for day-to-day transactions. | A German subsidiary's functional currency is EUR. |
| **Presentation currency** | The currency in which financial statements are presented. May differ from functional currency. | The US parent company presents consolidated statements in USD. |
| **Transaction currency** | The currency in which an individual transaction is denominated. | A purchase order to a Japanese supplier is in JPY. |
| **Reporting currency** | Additional currency for statutory or management reporting. | A UK entity reports in GBP for HMRC and in USD for the US parent. |

**Exchange rate management**:

- Store exchange rates with effective date ranges, not as a single current rate.
- Support multiple rate types: spot rate, average rate, closing rate, budget rate, historical rate.
- Source rates from a reliable provider (ECB, Reuters, Bloomberg, open exchange rate APIs). Automate daily imports.
- Allow manual rate overrides with audit trail (for contracted rates, hedged rates).
- Store rates with sufficient precision (6+ decimal places). JPY/USD can be 0.006734.

**Currency triangulation**: When no direct exchange rate exists between two currencies, convert through a common intermediate (usually USD or EUR). A -> USD -> B. erp.ai supports configurable triangulation currency per entity.

**Revaluation**: At period end, unrealized foreign currency gains and losses must be calculated and posted. Open receivables and payables denominated in foreign currencies are revalued at the closing rate. The difference between the transaction rate and closing rate is posted to a foreign exchange gain/loss account.

**Rounding**: Currency rounding rules vary:

| Currency | Minor Units | Rounding Rule |
|---|---|---|
| USD, EUR, GBP | 2 decimal places | Standard rounding (0.5 rounds up) |
| JPY, KRW | 0 decimal places (no minor units) | Round to whole number |
| BHD, KWD | 3 decimal places | Standard rounding |
| CHF | 2 decimal places | Round to nearest 0.05 (Swiss rounding) for cash transactions |

Use the ISO 4217 currency definition for minor unit count. erp.ai uses Java's `RoundingMode.HALF_UP` by default, configurable per currency.

**Multi-currency in financial statements**: Consolidation requires translating subsidiary financials from functional currency to presentation currency. Balance sheet items use the closing rate. Income statement items use the average rate (or transaction date rate). Equity items use historical rates. The resulting translation difference is posted to Other Comprehensive Income (OCI).

### Timezone Management

**UTC storage**: Store all timestamps in UTC in the database. No exceptions. Convert to the user's local timezone only at the display layer.

**Display conversion**: The user's timezone preference (stored in their profile) determines how timestamps are displayed. A transaction recorded at `2026-04-14T15:30:00Z` displays as:

- `Apr 14, 2026, 11:30 AM` for a user in New York (EDT, UTC-4)
- `Apr 15, 2026, 12:30 AM` for a user in Tokyo (JST, UTC+9)

Note that the same UTC timestamp can display as different dates depending on the timezone. This has implications for reporting.

**Daylight Saving Time (DST)**: DST transitions cause two problems:

- **Spring forward**: A 1-hour gap. 2:00 AM becomes 3:00 AM. Scheduling a job at 2:30 AM means it does not fire (the time does not exist). Handle by firing at the next valid time.
- **Fall back**: A 1-hour overlap. 1:00 AM to 2:00 AM occurs twice. A timestamp of "1:30 AM" is ambiguous. Handle by storing UTC (which is unambiguous) and using the IANA timezone database for conversions.

Always use the IANA timezone database (e.g., `America/New_York`, not `EST` or `UTC-5`). The abbreviation `EST` does not account for DST. The offset `UTC-5` is not always correct for New York.

**Business date vs system date**: The business date is the date assigned to a transaction for accounting purposes. The system date is the current UTC timestamp. They may differ:

- An invoice created at 11:30 PM on March 31 in New York (April 1 UTC) should be dated March 31 for the business.
- Month-end cutoff: transactions entered after 5:00 PM on the last business day may be assigned to the next period.

erp.ai supports a configurable business date per entity, separate from the system timestamp. Business date logic is defined per tenant.

**Timezone-aware scheduling**: Batch jobs and scheduled reports must respect the user's intended timezone. "Run this report every Monday at 8:00 AM Tokyo time" means different UTC times depending on whether Japan is in standard time or (hypothetically) DST. Use timezone-aware cron expressions: `0 8 * * 1 Asia/Tokyo`.

### Number and Date Formatting

**Locale-specific number formats**:

| Locale | Thousands Separator | Decimal Separator | Example (1234567.89) |
|---|---|---|---|
| en-US | , | . | 1,234,567.89 |
| de-DE | . | , | 1.234.567,89 |
| fr-FR | (space) | , | 1 234 567,89 |
| hi-IN | , (lakh grouping) | . | 12,34,567.89 |

Use the platform's locale-aware formatting library. Never format numbers by hand.

**Date formats**:

| Locale | Short Date | Long Date |
|---|---|---|
| en-US | 04/14/2026 (MM/DD/YYYY) | April 14, 2026 |
| en-GB | 14/04/2026 (DD/MM/YYYY) | 14 April 2026 |
| de-DE | 14.04.2026 (DD.MM.YYYY) | 14. April 2026 |
| ja-JP | 2026/04/14 (YYYY/MM/DD) | 2026年4月14日 |

**CLDR data**: The Unicode Common Locale Data Repository (CLDR) provides the definitive reference for locale-specific formatting rules, calendar systems, and numbering systems. erp.ai's formatting engine uses CLDR data. Do not invent formatting rules.

**Fiscal calendar support**: Not all organizations use the calendar year as their fiscal year. Common fiscal calendars:

| Type | Example | Considerations |
|---|---|---|
| **Calendar year** | Jan 1 - Dec 31 | Simplest. Common in many countries. |
| **Offset fiscal year** | Apr 1 - Mar 31 (UK, Japan, India) | "FY2026" may mean Apr 2025 - Mar 2026 or Apr 2026 - Mar 2027 depending on convention. |
| **4-4-5 calendar** | 13 periods of 4 or 5 weeks | Common in retail. Periods do not align with calendar months. |
| **Custom** | 13 periods with specific cutoff dates | Some organizations define their own periods. |

erp.ai supports configurable fiscal calendars per legal entity with period open/close controls.

### Address and Phone Formats

**Country-specific address formats**: Address structures vary dramatically by country:

| Country | Format |
|---|---|
| **US** | Street, City, State ZIP |
| **UK** | Street, Locality, City, County, Postcode |
| **Japan** | Postal code, Prefecture, City, District, Block, Building (large to small, often reversed from Western order) |
| **Brazil** | Street, Number, Complement, Neighborhood, City, State, CEP |
| **Germany** | Street + Number, PLZ + City |

Use Google's `libaddressinput` or a similar library for address formatting and validation. Store addresses in structured fields (street_line_1, city, state, postal_code, country_code), not as a single free-text field.

**Phone number normalization**: Store phone numbers in E.164 format (`+14155551234`). Display in the local format based on the viewer's locale. Use Google's `libphonenumber` for parsing, validation, and formatting. Validate that the number is plausible for the given country code.

**Postal code formats**:

| Country | Format | Example |
|---|---|---|
| US | 5 digits or 5+4 | 94105, 94105-1234 |
| UK | Alphanumeric, complex pattern | EC1A 1BB |
| Canada | Letter-Digit-Letter Digit-Letter-Digit | K1A 0B1 |
| Japan | 7 digits with hyphen | 100-0001 |
| India | 6 digits | 110001 |

Validate postal codes per country. Do not apply US ZIP code validation globally.

### Legal and Regulatory Localization

**Tax rules by jurisdiction**: Tax calculation is one of the most complex localization challenges:

| Dimension | Examples |
|---|---|
| **Tax type** | Sales tax (US), VAT (EU), GST (India, Australia), Consumption tax (Japan) |
| **Tax rate** | Varies by jurisdiction, product category, customer type, transaction type |
| **Tax-on-tax (cascading)** | Some jurisdictions apply taxes on top of other taxes |
| **Reverse charge** | In B2B cross-border EU transactions, the buyer self-assesses VAT |
| **Withholding tax** | Payer withholds tax on behalf of the payee (common in Latin America, India) |
| **Tax exemptions** | Non-profit status, export exemptions, intra-group transactions |

erp.ai integrates with tax engines (Avalara, Vertex, or erp.ai's built-in Tax Engine) that maintain jurisdiction-specific tax rules. Do not hard-code tax rates.

**Statutory reporting formats**: Many countries mandate specific report formats:

- **SAF-T** (Standard Audit File for Tax): Required in Portugal, Norway, Luxembourg, Poland, and expanding.
- **SII** (Suministro Inmediato de Información): Real-time VAT reporting in Spain.
- **e-Invoicing**: Mandatory in Italy (SDI), India (GST e-Invoice), Brazil (NF-e), Mexico (CFDI), and expanding rapidly.
- **XBRL**: Financial statement filing format required by SEC (US), HMRC (UK), and others.

erp.ai provides country-specific reporting packs that generate required formats from standard ERP data.

**Labor law compliance**: Payroll and HR localization includes:

- Working hour limits and overtime rules (vary by country and region)
- Mandatory leave types (maternity, paternity, sick leave entitlements differ per jurisdiction)
- Termination notice periods and severance calculations
- Social security contribution rates and caps

**Document templates**: Invoices, purchase orders, contracts, and payslips must use country-appropriate templates with required legal disclosures, registered office address, tax registration numbers, and mandatory language.

### Content Localization Workflow

**Translation memory (TM)**: A database of previously translated strings. When a new string is similar to an existing translation, the TM suggests the previous translation. Over time, TM reduces translation cost and improves consistency. erp.ai integrates with TM systems (memoQ, SDL Trados, Phrase).

**Machine translation + human review**: For initial translations, use machine translation (DeepL, Google Translate, or Claude) to generate a draft, then have a human reviewer correct errors, improve terminology, and ensure domain accuracy. This workflow is 2-3x faster than human-only translation.

**Context annotations**: Provide translators with context for each string:

- **Screenshot**: Show where the string appears in the UI.
- **Character limit**: "This string appears in a button. Maximum 20 characters."
- **Description**: "This is a warning message shown when a payment fails."
- **Placeholders**: "The `{amount}` placeholder will be replaced with a currency amount."

Without context, translators make incorrect assumptions, leading to rework.

**Screenshot references**: Automatically capture UI screenshots during development and attach them to translation requests. erp.ai's String Manager links each translatable string to the UI component where it appears.

### Testing for Localization

**Pseudo-localization**: Replace all UI strings with accented versions of the original text (e.g., "Invoice" becomes "[Ïñvöîçé!!!]"). This technique, run before any actual translation, reveals:

- Hard-coded strings (they remain in English while everything else is pseudo-localized).
- Layout issues from string expansion (the pseudo-localized text is ~30% longer).
- Character encoding problems (accented characters display as garbled text).
- Concatenation issues (pseudo-localized fragments reveal where strings are incorrectly assembled from parts).

erp.ai supports pseudo-localization as a built-in locale that can be activated in development environments.

**String expansion testing**: Translated text is often longer than English:

| Target Language | Typical Expansion |
|---|---|
| German | +30% |
| French | +20% |
| Finnish | +30-40% |
| Arabic | +25% |
| Chinese, Japanese, Korean | -10 to -30% (fewer characters, but may be wider) |

Design UI layouts to accommodate at least 40% text expansion. Use flexible layouts, not fixed-width containers.

**RTL testing**: Test the full application in an RTL locale. Check:

- Layout mirroring is correct.
- Bidirectional text renders properly (mixed English and Arabic in the same sentence).
- Icons are mirrored where appropriate.
- Tables and forms read correctly right-to-left.
- Data entry works correctly (cursor direction, text selection).

**Locale switching**: Test switching locales mid-session. All UI text, date/number formats, and currency symbols should update immediately without a page reload or re-login.

**Edge cases**:

- Languages with very long words (German compound nouns like "Geschwindigkeitsbegrenzung").
- Languages with no spaces between words (Thai, Chinese, Japanese) -- word wrapping requires linguistic analysis, not space-based breaking.
- Numbers formatted as text in sort order (sorting "1, 10, 11, 2" alphabetically vs "1, 2, 10, 11" numerically).
- Currency amounts with 0 or 3 decimal places (JPY, BHD) vs the assumed 2.

### Multi-Country Deployment Patterns

**Single instance, multi-country**:

| Advantage | Disadvantage |
|---|---|
| One codebase, one deployment, one database | Complexity in a single instance |
| Easier cross-country reporting and consolidation | All countries affected by any downtime |
| Single source of truth for master data | Data residency requirements may prevent this |
| Lower infrastructure cost | Performance for distant regions may suffer |

**Separate instances per country**:

| Advantage | Disadvantage |
|---|---|
| Data residency compliance by design | Siloed data, complex consolidation |
| Independent release schedules per country | N times the infrastructure and maintenance cost |
| Country-specific customization freedom | Master data duplication |
| Failure isolation | Divergent configurations over time |

**erp.ai recommendation**: Use a **single instance with multi-country configuration** where data residency allows. Use **data-residency-aware partitioning** (erp.ai's Geo-Partition feature) to keep data in the required region while maintaining a single logical instance. Deploy separate instances only when legally mandated or when country requirements are fundamentally incompatible.

**Legal entity mapping**: Each country operation typically maps to a legal entity in the ERP. A legal entity has its own chart of accounts, fiscal calendar, functional currency, tax configuration, and statutory reporting requirements. erp.ai's Legal Entity model encapsulates all country-specific configuration and inherits from the tenant-level defaults.

## Workflow

### 1. Assess Localization Requirements

- Identify the countries and languages to support at launch and in the roadmap.
- Determine currency requirements (functional, presentation, transaction currencies per entity).
- Identify regulatory requirements per country (tax, e-invoicing, statutory reporting, data residency).
- Determine timezone coverage for users and automated processes.
- **Tool**: erp.ai Country Requirements Matrix.
- **Watch out for**: Assuming "English + USD" is sufficient for a first release. If the organization operates in Europe, you need EUR, VAT, and GDPR compliance from day one.
- **Output**: Localization requirements matrix (countries x requirements).

### 2. Architect for Internationalization

- Implement string externalization across all UI components and API error messages.
- Configure UTF-8 at every layer (database, API, file I/O).
- Design data models with locale-awareness (currency codes on financial fields, timezone on date fields, language code on text content).
- Select and integrate formatting libraries (ICU, CLDR-based).
- Design the multi-currency architecture (exchange rate tables, functional/presentation currency per entity, revaluation process).
- **Tool**: erp.ai's i18n Architecture Guide. ICU4J (Java) or equivalent for message formatting.
- **Watch out for**: String concatenation. "Dear " + name + ", your invoice #" + number + " is due." is untranslatable because word order varies by language. Use ICU message format with named placeholders.
- **Output**: i18n-ready application architecture.

### 3. Configure Country-Specific Settings

- Set up legal entities with country-appropriate chart of accounts, fiscal calendar, and functional currency.
- Configure tax rules per jurisdiction (via tax engine integration or erp.ai Tax Engine).
- Set up country-specific document templates (invoices, purchase orders, payslips).
- Configure address and phone number formats per country.
- Set up statutory reporting requirements (SAF-T, e-invoicing, XBRL).
- **Tool**: erp.ai Country Configuration Packs (pre-built templates for common countries).
- **Watch out for**: Assuming tax is simple. US sales tax alone has 13,000+ jurisdictions. Use a tax engine.
- **Output**: Country-specific configuration for each legal entity.

### 4. Translate and Localize Content

- Extract translatable strings from the application.
- Set up translation memory and translation workflow (MT + human review).
- Translate UI strings, error messages, email templates, notification texts, and report labels.
- Provide translators with context (screenshots, character limits, descriptions).
- Review translations with in-country business users.
- **Tool**: erp.ai String Manager. Translation management platforms (Phrase, Lokalise, Crowdin).
- **Watch out for**: Translating in isolation. A translator needs to see where the string appears in the UI to translate it correctly. "Save" could be "Speichern" (save data) or "Sparen" (save money) in German.
- **Output**: Complete translation packages for each target locale.

### 5. Test Localization

- Run pseudo-localization to catch hard-coded strings and layout issues.
- Test each locale end-to-end: login, navigate, create a transaction, generate a report.
- Test RTL layouts if Arabic/Hebrew is supported.
- Test multi-currency transactions: create a transaction in a foreign currency, run revaluation, generate reports in presentation currency.
- Test timezone scenarios: user in Tokyo creates a transaction, user in London views it.
- Test edge cases: long German words, Japanese address entry, Swiss franc rounding.
- **Tool**: erp.ai's Localization Test Suite. Browser DevTools for layout testing.
- **Watch out for**: Testing only in the developer's locale. Every supported locale must be tested by someone who reads that language and understands local conventions.
- **Output**: Localization test results per locale.

### 6. Deploy and Monitor

- Deploy localization resources alongside application code.
- Monitor for missing translations (strings falling through to fallback locale).
- Monitor currency conversion for stale exchange rates.
- Monitor timezone-related scheduling failures (especially around DST transitions).
- Collect feedback from in-country users on translation quality and formatting correctness.
- **Tool**: erp.ai's Localization Dashboard (missing translation count, fallback rate, exchange rate freshness).
- **Watch out for**: "Launch and forget." Languages evolve, tax rates change, new regulations appear. Localization is ongoing.
- **Output**: Live multi-locale application with monitoring.

## Decision Guide

### Single-Language vs Multi-Language Architecture

| Your Situation | Use |
|---|---|
| All users speak one language, one country only | Single-language is acceptable for MVP, but externalize strings from day one for future expansion. |
| Users in 2+ countries with different languages | Multi-language required. Full i18n architecture. |
| B2B application with external users (suppliers, customers) | Multi-language likely required. Documents (POs, invoices) must be in the recipient's language. |
| Internal application, all employees speak English | Externalize strings. Even if UI stays in English, number/date formats should respect user locale. |

### Currency Architecture

| Factor | Single-Currency | Multi-Currency |
|---|---|---|
| All entities use the same functional currency | Sufficient | Not needed |
| Entities in different countries | Insufficient | Required |
| Cross-border transactions (buying/selling in foreign currencies) | Insufficient | Required |
| Consolidated financial reporting across currencies | Insufficient | Required with presentation currency support |
| Budget planning in multiple currencies | Insufficient | Required with budget rate support |

**Default to multi-currency** if the organization operates in more than one country or transacts in more than one currency. Retrofitting multi-currency is extremely expensive.

### Translation Approach

| Approach | Speed | Cost | Quality | Best For |
|---|---|---|---|---|
| **Professional human translation** | Slow (weeks) | High ($0.10-0.25/word) | Highest | Legal documents, marketing content, customer-facing text |
| **Machine translation + human review** | Fast (days) | Medium ($0.02-0.05/word) | High | UI strings, error messages, notifications |
| **Machine translation only** | Immediate | Low ($0.001/word) | Variable | Internal tools, development environments, low-risk content |
| **Community/crowdsource** | Variable | Low | Variable (needs strong QA) | Open-source projects, large-scale consumer apps |

**erp.ai recommendation**: Use **MT + human review** for UI and operational content. Use **professional translation** for legal and financial documents. Never use MT-only for customer-facing content in production.

### Timezone Strategy

| Your Situation | Approach |
|---|---|
| All users in one timezone | Store UTC, display in the single timezone. Simple. |
| Users across timezones, transactions are timezone-independent | Store UTC, display in user's timezone. Standard approach. |
| Business date matters (financial close, regulatory cutoff) | Store UTC timestamp AND business date separately. Business date determined by the entity's timezone at transaction time. |
| Scheduling across timezones | Use timezone-aware scheduling (IANA timezone names). Account for DST transitions. |

## Common Patterns

### Multi-Currency Invoice Processing

- **Scenario**: A US parent company (USD functional) receives an invoice from a German supplier in EUR.
- **Flow**: AP creates the invoice in EUR (transaction currency). erp.ai records the EUR amount and the USD equivalent at the spot rate on the invoice date. When the invoice is paid 30 days later, the exchange rate has changed. The payment is recorded at the new rate. The difference between the invoice rate and payment rate is posted as a realized foreign exchange gain or loss.
- **Critical design points**: Store both the original transaction currency amount and the functional currency equivalent. Never discard the original amount. Revaluation at month-end captures unrealized gains/losses on unpaid invoices. The GL must support multi-currency postings (debit AP in EUR, credit bank in USD, post FX gain/loss).

### Multi-Language Document Generation

- **Scenario**: A French entity sends purchase orders to suppliers in France (French), Germany (German), and the US (English).
- **Flow**: The purchase order template is defined once with translatable placeholders. When generating the PO, erp.ai determines the supplier's language preference and renders the document in that language, with locale-appropriate date formats, number formats, and currency symbols. The PO for the French supplier shows "14/04/2026" and "1 234,56 EUR"; the US supplier sees "04/14/2026" and "$1,234.56."
- **Critical design points**: Document templates must be fully parameterized -- no hard-coded text. Legal disclaimers and terms and conditions must be translated and reviewed by legal for each target language. PDF generation must support Unicode fonts (CJK characters, Arabic script).

### Cross-Timezone Month-End Close

- **Scenario**: A global organization with entities in New York, London, and Tokyo performs month-end close.
- **Flow**: Each entity's month-end cutoff is defined by the entity's business timezone. Tokyo's March close (JST, UTC+9) happens 14 hours before New York's (EDT, UTC-4). Batch jobs (accruals, revaluation, reconciliation) run per entity in the entity's timezone. Consolidated reporting waits until all entities have closed. The consolidation process translates each entity's financials from functional currency to the group's presentation currency.
- **Critical design points**: Do not use a single global cutoff timestamp. Each entity closes independently based on its own business timezone and fiscal calendar. Intercompany transactions between entities in different time zones must be handled carefully -- a transaction that is in March for Tokyo may be in March or April for New York depending on the exact time.

### Anti-Patterns to Avoid

- **Hardcoded Strings**: User-visible text embedded directly in source code. Impossible to translate without code changes. Every string must be externalized to a resource bundle with a stable key.
- **Concatenation for Sentences**: Building sentences by concatenating fragments: "You have " + count + " new " + (count === 1 ? "message" : "messages"). This breaks in languages with different word order, plural forms, or gender agreement. Use ICU Message Format.
- **Assuming USD**: Storing monetary amounts without a currency code. Performing calculations without specifying which currency. Displaying "$" without clarifying USD vs AUD vs CAD vs SGD. Every monetary amount must have an explicit currency code (ISO 4217).
- **Timezone-Naive Dates**: Storing dates as `2026-04-14` without timezone context. Is this April 14 in New York or Tokyo? For timestamps, always store UTC. For business dates, store the date with the entity's timezone context.
- **Translating UI at Display Time**: Calling a translation API on every page render. Translations must be pre-loaded and cached. API-based real-time translation adds latency and creates a dependency on an external service for every page load.
- **One-Size-Fits-All Address Field**: A single free-text "Address" field for all countries. Prevents validation, formatting, and structured search. Use country-specific structured address fields.
- **Ignoring Collation**: Sorting names and text using the default (often ASCII or English) collation. German, Swedish, Turkish, and many other languages have sorting rules that differ from English. Use locale-aware collation.
- **Fixed-Width Date/Number Columns**: Designing report columns to exactly fit "MM/DD/YYYY" and breaking when the German locale renders "14. April 2026". Design for variable-width output.

## Checklist

- [ ] All user-visible strings externalized to resource bundles with stable keys
- [ ] ICU Message Format used for strings with variables, plurals, and gender
- [ ] UTF-8 encoding configured at database, API, and file I/O layers
- [ ] Locale-aware formatting used for all numbers, dates, and currency amounts
- [ ] Fallback chain defined for missing translations (specific locale -> language -> default -> key)
- [ ] RTL layout support implemented and tested (if Arabic/Hebrew/Farsi required)
- [ ] Pseudo-localization run and all hard-coded strings resolved
- [ ] String expansion tested (40% expansion accommodated in UI layouts)
- [ ] Translation workflow established (extract, translate, review, integrate, test)
- [ ] Translation memory integrated to reduce cost and improve consistency
- [ ] Context (screenshots, descriptions, character limits) provided to translators
- [ ] Multi-currency architecture implemented (functional, presentation, transaction currencies)
- [ ] Exchange rates sourced automatically with configurable rate types
- [ ] Foreign currency revaluation process configured for period-end
- [ ] Currency rounding rules configured per ISO 4217 (including JPY, BHD, CHF cash)
- [ ] All timestamps stored in UTC in the database
- [ ] User timezone preference respected at the display layer
- [ ] Business date separated from system timestamp where required
- [ ] DST transitions handled for scheduling and display
- [ ] IANA timezone names used (not abbreviations or fixed offsets)
- [ ] Address formats validated per country using structured fields
- [ ] Phone numbers stored in E.164 format, displayed in local format
- [ ] Tax engine integrated for jurisdiction-specific tax calculations
- [ ] Statutory reporting configured per country (SAF-T, e-invoicing, XBRL)
- [ ] Country-specific document templates created with legal disclosures
- [ ] Fiscal calendar configured per legal entity
- [ ] Locale switching tested mid-session without re-login
- [ ] Every supported locale tested end-to-end by a native reader
- [ ] Data residency requirements assessed and addressed per country

## Related

- [Data Modeling](data-modeling.md) -- entity design must accommodate multi-currency fields, locale-specific text, and timezone-aware timestamps
- [Configuration Management](configuration-management.md) -- country-specific configuration managed through promotion pipelines
- [Reporting & Analytics](reporting-analytics.md) -- multi-currency consolidation, locale-specific report formatting, and timezone-aware date filtering
- [Workflow Automation](workflow-automation.md) -- approval workflows that vary by country and regulatory jurisdiction
