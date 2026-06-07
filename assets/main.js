// ═══════════════════════════════════════════════
//   ABHISHEK CHAUDHARY — PORTFOLIO MAIN SCRIPT
// ═══════════════════════════════════════════════

// CONFIGURATION: Replace with your exact GitHub username and repo name
const GH_USER = "abhishekgit-hub";
const GH_REPO = "abhishek-portfolio";

// Helper to convert Raw Markdown frontmatter metadata to JS Objects
function parseMarkdownFile(mdText) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = mdText.match(frontmatterRegex);
  const result = { body: mdText.replace(frontmatterRegex, '').trim() };
  
  if (match && match[1]) {
    match[1].split('\n').forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        let value = parts.slice(1).join(':').trim();
        // Remove surrounding quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.substring(1, value.length - 1);
        }
        // Handle explicit boolean tags
        if (value === 'true') value = true;
        if (value === 'false') value = false;
        // Handle tags list array string conversion [A, B, C]
        if (key === 'tags' && value.startsWith('[') && value.endsWith(']')) {
          value = value.substring(1, value.length - 1).split(',').map(t => t.trim().replace(/['"']/g, ''));
        }
        result[key] = value;
      });
  }
  return result;
}

// ── FALLBACK DATA (shown instantly as a placeholder) ──
const FALLBACK_PROJECTS = [
  {
    id: "embedai-saas",
    title: "EmbedAI SaaS",
    description: "Plug-and-Play AI Chat Assistant and Widget for any business website — powered by Google Gemini. Businesses can embed an intelligent chatbot with zero backend setup on their end.",
    tags: ["Node.js", "React", "Gemini AI", "SaaS", "MongoDB"],
    github: "https://github.com/abhishekgit-hub/embedai-saas",
    live: "https://bizqueryai.abhishekh-chaudhary.com.np/",
    icon: "🤖",
    featured: true,
    date: "2025-01-01"
  }
];

const FALLBACK_POSTS = [
  {
    id: "gemini-developer-friend",
    title: "Why Google Gemini is quietly becoming a developer's best friend",
    category: "AI",
    date: "2025-05-01",
    excerpt: "After building EmbedAI with the Gemini API, here's what surprised me about working with Google's AI platform day-to-day...",
    body: "After spending weeks building EmbedAI — a plug-and-play AI chat widget powered by Google Gemini — I came away with a surprisingly strong appreciation for Gemini's developer experience..."
  }
];

// ── FORMAT DATE ──
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

// ── RENDER PROJECTS ──
function renderProjects(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !projects || projects.length === 0) return;

  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal">
      <div class="project-card-header">
        <div class="project-icon">${p.icon || '🚀'}</div>
        <div class="project-links">
          ${p.github ? `
          <a class="project-link" href="${p.github}" target="_blank" title="GitHub" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
          </a>` : ''}
          ${p.live ? `
          <a class="project-link" href="${p.live}" target="_blank" title="Live Demo" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>` : ''}
        </div>
      </div>
      <h3 class="project-name">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${(p.tags || []).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');

  observeReveal();
}

// ── RENDER POSTS ──
function renderPosts(posts) {
  const grid = document.getElementById('postsGrid');
  if (!grid || !posts || posts.length === 0) return;

  window._posts = posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  grid.innerHTML = window._posts.map((p, i) => `
    <div class="post-card reveal" onclick="openPost(${i})">
      <div class="post-meta">
        <span class="post-category">${p.category || 'General'}</span>
        <span class="post-date">${formatDate(p.date)}</span>
      </div>
      <h3 class="post-title">${p.title}</h3>
      <p class="post-excerpt">${p.excerpt || (p.body ? p.body.substring(0, 120) + '...' : '')}</p>
      <span class="post-read-more">Read more →</span>
    </div>
  `).join('');

  observeReveal();
}

// ── POST MODAL ──
function openPost(index) {
  const post = window._posts[index];
  if (!post) return;
  document.getElementById('modalCategory').textContent = post.category || 'General';
  document.getElementById('modalTitle').textContent = post.title;
  document.getElementById('modalDate').textContent = formatDate(post.date);
  
  const bodyHtml = (post.body || '')
    .split(/\n\n+/)
    .filter(p => p.trim())
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('');
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePost() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closePost();
}

// ── SCROLL REVEAL ──
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu && hamburger && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePost(); });

// ── FETCH COLLECTION DATA DIRECTLY VIA GITHUB REPO API ──
async function fetchFolderCollection(folderPath) {
  const apiUrl = `https://api.github.com/repos/${GH_USER}/${GH_REPO}/contents/${folderPath}`;
  const res = await fetch(apiUrl);
  if (!res.ok) return [];
  const filesList = await res.json();
  
  // Filter for valid markdown configuration files
  const mdFiles = filesList.filter(file => file.name.endsWith('.md'));
  
  const items = await Promise.all(mdFiles.map(async (file) => {
    const fileRes = await fetch(file.download_url);
    const mdText = await fileRes.text();
    return parseMarkdownFile(mdText);
  }));
  
  return items;
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', async () => {
  observeReveal();

  // Show static layout placeholders immediately 
  renderProjects(FALLBACK_PROJECTS);
  renderPosts(FALLBACK_POSTS);

  if (location.protocol !== 'file:') {
    try {
      // Pull structural models dynamically from Decap CMS generation directories
      const [livePosts, liveProjects] = await Promise.all([
        fetchFolderCollection('data/posts'),
        fetchFolderCollection('data/projects')
      ]);

      if (liveProjects.length > 0) renderProjects(liveProjects);
      if (livePosts.length > 0) renderPosts(livePosts);
    } catch (e) {
      console.info('Failed loading live folder collections, displaying local system values.', e);
    }
  }
});
 
