# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

---

# TDS Rate Navigator

## Core Features:

- **Data Parsing & Storage**: Fetch and parse TDS rates for AY 2026-27 from the provided URL, converting the data into a local persistent JSON structure for offline access.
- **Intelligent Search**: Enable searching by section or nature of payment. Implement fuzzy search and suggestions.
- **Parameterized Filtering**: Enable the selection of 'Deductor Type' and 'Deductee Type' from dropdown menus to filter TDS rates accordingly.
- **Offline Mode**: Ensure the app functions 100% offline by caching the parsed data.
- **TDS Calculator**: Calculate TDS amount automatically based on user-inputted invoice amount and selected TDS section.
- **Compliance Alerts**: Provide a section for key monthly due dates related to TDS deposit (7th) and returns (31st).
- **Expert CA Connection**: Include a 'Consult CA Tanmay' floating button linked to WhatsApp for expert consultations.
