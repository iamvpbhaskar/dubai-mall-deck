# Deployment Guide - Dubai Mall Interactive Sales Deck

## ✅ Build Status
- **Build:** Successful ✓
- **API Routes:** 3 endpoints configured ✓
- **Email Service:** Resend integrated ✓
- **Environment:** .env.local configured ✓

---

## Deploy to Vercel (Recommended - 2 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Dubai Mall interactive sales deck"
git branch -M main
git remote add origin https://github.com/yourusername/dubai-mall-deck.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

### Step 3: Add Environment Variables
1. Go to Project Settings → Environment Variables
2. Add these variables:
   ```
   RESEND_API_KEY=re_DbpuUTJt_CobgafykrVToAtrsuGjE4jhE
   LEASING_EMAIL=leasing@dubaimall.com
   EVENTS_EMAIL=events@dubaimall.com
   SPONSORSHIP_EMAIL=partnerships@dubaimall.com
   ```
3. Redeploy

### Step 4: Test
- Visit your live URL
- Fill out a form
- Check your email for confirmation

---

## Deploy to Netlify (Alternative - 3 minutes)

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Deploy
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### Step 3: Add Environment Variables
1. Go to Site Settings → Build & Deploy → Environment
2. Add the same variables as Vercel

---

## Deploy to GitHub Pages (Free - 5 minutes)

### Step 1: Export as Static
```bash
npm run build
npm run export  # (requires next export config)
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Build: production ready"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to Repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch and "/root" folder
4. Save

**Note:** GitHub Pages doesn't support server-side functions (API routes). Use Vercel or Netlify for full functionality.

---

## Live URL Status

| Platform | Status | Time to Deploy |
|----------|--------|-----------------|
| Vercel | ✅ Ready | 2 min |
| Netlify | ✅ Ready | 3 min |
| GitHub Pages | ⚠️ Limited | 5 min |

---

## Post-Deployment Checklist

- [ ] Visit live URL
- [ ] Test leasing form
- [ ] Test events form
- [ ] Test sponsorship form
- [ ] Check email confirmations
- [ ] Verify all sections load
- [ ] Test on mobile
- [ ] Run Lighthouse audit

---

## Troubleshooting

### Forms Not Sending Emails
- Check environment variables are set
- Verify Resend API key is correct
- Check Resend dashboard for errors

### Build Fails
- Ensure all dependencies installed: `npm install`
- Clear cache: `npm run build` (retry)
- Check for TypeScript errors: `npm run build`

### Slow Performance
- Run Lighthouse audit
- Optimize images
- Enable caching headers

---

## Next Steps

1. **Deploy to Vercel** (recommended)
2. **Share live URL** with stakeholders
3. **Monitor form submissions** in Resend dashboard
4. **Collect feedback** and iterate
5. **Track analytics** (optional)

---

**Ready to go live!** 🚀

Last Updated: April 2026
