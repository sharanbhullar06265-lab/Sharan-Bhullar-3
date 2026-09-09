# DESIGNMYSITES - Web Design & Social Growth

A modern, high-converting digital agency website showcasing custom WordPress/Shopify design and multi-platform social media growth services.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (`motion/react`)
- **Icons**: Lucide React (`lucide-react`)

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Deploying to GitHub

1. **Initialize Git (if not already initialized):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - DESIGNMYSITES agency website"
   ```

2. **Create a repository on GitHub:**
   - Go to [github.com/new](https://github.com/new)
   - Name your repository (e.g. `designmysites-web`)
   - Leave "Initialize with README" unchecked

3. **Link and Push to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

---

## Deploying to Netlify

This project is pre-configured with `netlify.toml` and `public/_redirects` for continuous deployment and Single Page Application (SPA) routing.

### Method 1: Continuous Deployment via GitHub (Recommended)
1. Push your code to your GitHub repository (see steps above).
2. Log in to [Netlify](https://app.netlify.com).
3. Click **Add new site** > **Import an existing project**.
4. Select **GitHub** and authorize access.
5. Choose your repository.
6. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **Deploy site**.
8. Any future commits pushed to the `main` branch will automatically trigger a new deployment on Netlify!

### Method 2: Instant Drag & Drop (Netlify Drop)
1. Build the production files:
   ```bash
   npm run build
   ```
2. Visit [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder directly into your browser.

### Method 3: Netlify CLI
1. Install the Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```
2. Login and initialize:
   ```bash
   netlify login
   netlify init
   ```
3. Deploy to production:
   ```bash
   netlify deploy --prod --dir=dist
   ```
