# Billphora website: deployment and updates

Public marketing site for Billphora. Live at **https://billphora.inphora.in**.
Next.js 16, React 19, Tailwind v4. No database and no backend. It is a static-style site.

## Where it runs

| Item | Value |
|---|---|
| Server | Hostinger VPS `srv1975591.hstgr.cloud` (IP `201.18.192.179`) |
| Server folder | `/root/billphora-website` (git clone of this repo) |
| Container | `billphora-website-landing-site-1` (Docker Compose) |
| Ports | container `3001`, host `127.0.0.1:3020` (not public, only nginx reaches it) |
| nginx file | `/etc/nginx/sites-available/billphora`, linked in `sites-enabled` |
| SSL | Let's Encrypt via certbot, auto-renews |
| DNS | GoDaddy, `A` record `billphora` to `201.18.192.179` |
| Repo | https://github.com/shiv90154/billphora-website |

This server also runs other projects (Billing admin panel on 3000, backend on 4000, school ERP on 3001, octapad on 3002, bharattrip on 3010). Do not reuse those ports. This site is fully separate from the Billing Software repo and its containers.

## Change something and update the live site

1. Edit code locally and test: `npm install`, `npm run dev`, open http://localhost:3001.
2. Check it builds: `npm run lint && npm run build`.
3. Commit and push:
   ```
   git add -A
   git commit -m "Describe the change"
   git push
   ```
4. On the server:
   ```
   ssh root@201.18.192.179
   cd /root/billphora-website
   git pull
   docker compose up -d --build
   ```
   Only this site is rebuilt. Other projects are not touched. Rebuild takes about one minute.
5. Open https://billphora.inphora.in and hard refresh (Cmd+Shift+R).

## Where to edit common things

| What | File |
|---|---|
| Phone, WhatsApp, email, address, login link, all page copy, plans, FAQ | `src/lib/site.ts` |
| Colors | `src/app/globals.css` (`:root` variables) |
| Logo images | `public/billphora-icon.png`, `public/billphora-logo.png`, `public/inphora-logo.png` |
| Share preview image (WhatsApp, social) | `src/app/opengraph-image.png` and `twitter-image.png` |
| Tab icon | `src/app/favicon.ico`, `src/app/apple-icon.png` |
| Security headers and CSP | `next.config.ts` |
| Demo form checks | `src/lib/validation.ts` |

WhatsApp caches share previews. After changing the preview image use the Facebook Sharing Debugger to refresh it.

## Pages

`/` home, `/features`, `/how-it-works`, `/pricing`, `/about`, `/contact` (demo form opens WhatsApp), `/privacy`, `/terms`.

## Useful server commands

```
docker compose ps
docker compose logs -f --tail=100
docker compose restart
nginx -t && systemctl reload nginx
certbot renew --dry-run
```

## Rollback

```
cd /root/billphora-website
git log --oneline
git checkout <good-commit>
docker compose up -d --build
```
Run `git checkout main` when ready to move forward again.

## Security notes

- Headers are set in `next.config.ts`: CSP, HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy, COOP.
- If you add an external script, font, image host or analytics, add it to the CSP or the browser will block it.
- The contact form has no backend. It validates input in the browser and opens WhatsApp with the message.
- Never commit passwords, keys or `.env` files. Use SSH keys for the server and disable password login.
- Security contact file: `public/.well-known/security.txt` (renew the `Expires` date each year).

## Placeholders to replace when ready

- Real pricing (plans currently say "Contact us").
- Confirm plan feature lists in `src/lib/site.ts` match what is actually offered.
