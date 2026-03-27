# 🚀 Deployment Guide

Deploy your stunning portfolio to the world in minutes!

## Option 1: Vercel (⭐ Recommended - Easiest)

### Prerequisites
- GitHub account (or GitLab/Bitbucket)
- GitHub repo with your portfolio code

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pfp
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"
   - Done! Your site is live

3. **Custom Domain (Optional)**
   - Go to Vercel dashboard
   - Settings → Domains
   - Add your custom domain (woospiegrassy.dev)

### Domain Recommendations
- **Freenom** - Free domains (.tk, .ml)
- **Namecheap** - Cheap domains ($0.88/year)
- **Google Domains** - Quality domains

---

## Option 2: Netlify (Easy)

### Steps

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify UI**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

3. **Connect Domain**
   - Site settings → Domain management
   - Add your custom domain

---

## Option 3: GitHub Pages

### Warning
Next.js requires special setup for GitHub Pages static export.

### Steps

1. **Update next.config.js**
   ```js
   const nextConfig = {
     output: 'export',
     unoptimized: true,
   }
   ```

2. **Build & Deploy**
   ```bash
   npm run build
   ```

3. **Push to GitHub**
   - Repository → Settings → Pages
   - Build from: `main` branch, `out` folder
   - Custom domain: (optional)

---

## Option 4: Traditional VPS/Hosting

### Using DigitalOcean, Linode, AWS, etc.

1. **Create Linux server** (Ubuntu 22.04 recommended)

2. **SSH into server**
   ```bash
   ssh root@YOUR_SERVER_IP
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/pfp.git
   cd pfp
   ```

5. **Install & build**
   ```bash
   npm install
   npm run build
   ```

6. **Use PM2 for persistence**
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "portfolio" -- run start
   pm2 startup
   pm2 save
   ```

7. **Setup Nginx reverse proxy** (optional but recommended)
   ```bash
   sudo apt-get install nginx
   ```

   Create `/etc/nginx/sites-available/default`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Enable HTTPS** (Let's Encrypt)
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Performance Optimization After Deployment

### Enable Content Compression
Vercel/Netlify do this automatically. For VPS:

```nginx
# In nginx config
gzip on;
gzip_types text/plain text/css text/javascript application/json;
```

### Cache Static Assets
Next.js automatically handles cache headers.

### Monitor Performance
- [Vercel Analytics](https://vercel.com/analytics)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)

---

## Cost Comparison

| Platform | Cost | Ease | Features |
|----------|------|------|----------|
| **Vercel** | Free | ⭐⭐⭐⭐⭐ | Optimal for Next.js |
| **Netlify** | Free | ⭐⭐⭐⭐⭐ | Great CI/CD |
| **GitHub Pages** | Free | ⭐⭐⭐ | Limited features |
| **DigitalOcean** | $5/month | ⭐⭐⭐⭐ | Full control |

---

## My Recommendation: Vercel

✅ **Why Vercel for your portfolio?**
- 100% optimized for Next.js
- Auto deploys on Git push
- Free SSL/HTTPS
- Global CDN (fast worldwide)
- Free tier plenty for portfolio
- Amazing developer experience
- One-click rollbacks
- Edge functions for advanced features

**Deployment time: ~2 minutes**

---

## Post-Deployment Checklist

- [ ] Portfolio loads on custom domain
- [ ] All animations work smoothly
- [ ] Mobile responsive looks good
- [ ] Contact form works
- [ ] Links to Discord/GitHub work
- [ ] SEO meta tags visible
- [ ] Page load speed is fast (<2s)
- [ ] No console errors
- [ ] SSL certificate active (green lock)

---

## Domain Setup

### For Vercel
1. Buy domain from Namecheap/GoDaddy
2. Go to Vercel dashboard
3. Settings → Domains → Add Domain
4. Vercel provides nameservers to point to

### For Other Hosts
1. Buy domain
2. Point nameservers to your host
3. Add DNS records as host instructs
4. Wait 24 hours for propagation

---

## Custom Email (Optional)

Add professional email like `contact@woospiegrassy.dev`:

- **Namecheap Email** - $0.88-2.88/year per mailbox
- **Google Workspace** - $6/month per user
- **Proton Mail** - Free or paid

---

**🎉 You're ready to launch! Choose your platform and Ship It!**
