# Abhishek Chaudhary — Portfolio with CMS

A static portfolio site hosted on **GitHub Pages** with a **Decap CMS** dashboard to add projects and blog posts without touching any code.

---

## Project Structure

```
/
├── index.html              ← Main portfolio page
├── assets/
│   └── main.js             ← Loads JSON data, renders projects & posts
├── data/
│   ├── projects.json       ← Your projects (edited via CMS)
│   └── posts.json          ← Your blog posts (edited via CMS)
└── admin/
    ├── index.html          ← Decap CMS dashboard UI
    └── config.yml          ← CMS configuration (MUST update repo name)
```

---

## One-Time Setup (15 minutes)

### Step 1 — Push to GitHub
1. Create a GitHub repo named `abhishekgit-hub.github.io` (or any repo name)
2. Push all files to the `main` branch

### Step 2 — Enable GitHub Pages
1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save — your site is live at `https://abhishekgit-hub.github.io`

### Step 3 — Create a free Netlify OAuth App (for CMS login)
Decap CMS needs OAuth to authenticate with GitHub. We use a tiny free Netlify proxy:

1. Go to [netlify.com](https://netlify.com) and create a free account
2. Create a **new site** → "Deploy manually" (just drag an empty folder — we won't use Netlify for hosting)
3. Go to **Site Settings → Identity** → Enable Identity
4. Go to **Identity → Registration** → Set to "Invite only"
5. Go to **Identity → Services → Git Gateway** → Enable it
6. Note your Netlify site URL e.g. `https://your-netlify-site.netlify.app`

### Step 4 — Update config.yml
Open `admin/config.yml` and change these two lines:

```yaml
backend:
  name: github
  repo: abhishekgit-hub/abhishekgit-hub.github.io   # ← YOUR github-username/repo-name
  branch: main
  base_url: https://your-netlify-site.netlify.app    # ← YOUR Netlify site URL
```

Commit and push the change.

### Step 5 — Create a GitHub OAuth App
1. Go to GitHub → **Settings → Developer Settings → OAuth Apps → New OAuth App**
2. Fill in:
   - Application name: `Portfolio CMS`
   - Homepage URL: `https://abhishekgit-hub.github.io`
   - Authorization callback URL: `https://your-netlify-site.netlify.app/.netlify/functions/auth/callback`
3. Click **Register application**
4. Copy the **Client ID** and generate a **Client Secret**

### Step 6 — Add OAuth credentials to Netlify
1. In Netlify → **Site Settings → Identity → External providers**
2. Add **GitHub** provider
3. Paste your Client ID and Client Secret

---

## Using the CMS

1. Visit `https://abhishekgit-hub.github.io/admin`
2. Click **Login with GitHub**
3. You'll see two collections:
   - **Projects** — add/edit/delete your projects
   - **Blog Posts** — write and publish posts

When you save in the CMS, it commits directly to your GitHub repo → GitHub Pages automatically rebuilds → live in ~30 seconds.

---

## Adding a Project (No Code)

1. Go to `/admin` → click **Projects**
2. Click the existing list item to expand it, or add a new entry
3. Fill in: Title, Description, Icon (emoji), Tags, GitHub URL, Live URL
4. Click **Save** — done!

## Writing a Post (No Code)

1. Go to `/admin` → click **Blog Posts → New Blog Post**
2. Fill in: Title, Category, Date, Excerpt, Body (markdown supported)
3. Click **Publish** — done!

---

## EmbedAI Widget

The AI chat widget script is at the bottom of `index.html`:

```html
<script
  src="https://embedai-backend.onrender.com/widget.js"
  data-api-key="YOUR_API_KEY_HERE">
</script>
```

Replace `YOUR_API_KEY_HERE` with your real EmbedAI API key.

---

## Local Development

Since the site uses `fetch('/data/projects.json')`, you need a local server (not just opening the HTML file):

```bash
# Option 1 — Python
python -m http.server 8000

# Option 2 — Node
npx serve .
```

Then open `http://localhost:8000`
