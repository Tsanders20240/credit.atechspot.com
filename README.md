# A+ Credit Education Center

Production-ready static educational website for:

- GitHub repository: `Tsanders20240/credit.atechspot.com`
- Cloudflare Pages
- Custom domain: `https://credit.atechspot.com`

## Important positioning

This deployment is educational only. It does not offer paid credit-repair services and does not collect sensitive financial or identity records.

## Deploy to GitHub

1. Extract the ZIP.
2. Open the repository `credit.atechspot.com`.
3. Upload every extracted file and folder to the repository root.
4. Replace the current README if prompted.
5. Commit: `Deploy A+ Credit Education Center v1`

## Connect Cloudflare Pages

1. Cloudflare Dashboard -> Workers & Pages -> Create -> Pages.
2. Connect GitHub.
3. Select `Tsanders20240/credit.atechspot.com`.
4. Framework preset: None.
5. Build command: leave blank.
6. Build output directory: `/`.
7. Deploy.
8. Project -> Custom domains -> Add `credit.atechspot.com`.
9. Cloudflare will create DNS and SSL automatically.

## Analytics

Create separate GA4 and Microsoft Clarity projects for the credit subdomain.

Edit:

`assets/analytics-config.js`

Replace:

- `G-REPLACE_WITH_CREDIT_SITE_ID`
- `REPLACE_WITH_CREDIT_CLARITY_ID`

Do not reuse the main site's IDs unless you deliberately want combined reporting.

## Search Console

After the site is live:

1. Add URL-prefix property: `https://credit.atechspot.com`
2. Verify ownership.
3. Submit `https://credit.atechspot.com/sitemap.xml`
4. Request indexing for homepage, education, tools, resources, consumer rights, and FAQ.

## Legal note

The site is designed as public educational content. Before offering regulated credit-repair or credit-services activity, obtain qualified federal and Texas legal review.
