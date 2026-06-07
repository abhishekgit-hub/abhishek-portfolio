
// ═══════════════════════════════════════════════
//  ABHISHEK CHAUDHARY — PORTFOLIO MAIN SCRIPT
// ═══════════════════════════════════════════════
 
// ── FALLBACK DATA (shown immediately, even on file://) ──
const FALLBACK_PROJECTS = [
  {
    id: "embedai-saas",
    title: "EmbedAI SaaS",
    description: "Plug-and-Play AI Chat Assistant and Widget for any business website — powered by Google Gemini. Businesses can embed an intelligent chatbot with zero backend setup on their end.",
    tags: ["Node.js", "React", "Gemini AI", "SaaS", "MongoDB"],
    github: "https://github.com/abhishekgit-hub/embedai-saas",
    live: "",
    icon: "🤖",
    featured: true,
    date: "2025-01-01"
  },
  {
    id: "more-github",
    title: "More on GitHub →",
    description: "Check out my GitHub profile for more projects, experiments, and open-source contributions. I'm always building something new.",
    tags: ["Open Source", "Experiments"],
    github: "https://github.com/abhishekgit-hub",
    live: "",
    icon: "🌐",
    featured: false,
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
    body: "After spending weeks building EmbedAI — a plug-and-play AI chat widget powered by Google Gemini — I came away with a surprisingly strong appreciation for Gemini's developer experience.\n\nMost of the AI buzz still centers around OpenAI's GPT series, but Gemini has been quietly improving. The API is clean, the rate limits on the free tier are generous for prototyping, and the multimodal capabilities are genuinely impressive once you start using them.\n\nWhat stood out most for me was the context window. For a chatbot use case, being able to pass large amounts of context about a business — their FAQs, product info, tone of voice — without worrying about hitting a limit was a huge deal.\n\nIf you're a developer building AI-integrated products and haven't tried Gemini yet, I'd genuinely recommend giving it a shot. It's especially useful if you're already in the Google Cloud ecosystem."
  },
  {
    id: "rise-of-ai-agents",
    title: "The rise of AI agents: what it means for developers like us",
    category: "Tech News",
    date: "2025-04-01",
    excerpt: "AI agents are everywhere now. But as a developer, the question isn't 'what are they' — it's 'what can I build with them?'...",
    body: "AI agents are everywhere in 2025. Every week there's a new framework, a new autonomous agent demo, and a new think-piece about whether agents will replace developers.\n\nHere's my take as someone building with AI daily: agents are a tool, not a replacement. And right now, they're a really exciting tool.\n\nThe most interesting shift I see is how agents are changing what it means to write software. Instead of writing code that does a thing, you're writing prompts and orchestration logic that tells an AI how to do a thing. The skill set is evolving.\n\nFor developers interested in staying ahead: start experimenting with agent frameworks like LangChain, AutoGen, or even just the raw function-calling APIs from OpenAI and Gemini. Build small, break things, learn fast. That's still the best strategy."
  },
  {
    id: "learning-to-code-nepal",
    title: "Learning to code in Nepal: resources that actually helped me",
    category: "General",
    date: "2025-03-01",
    excerpt: "Being a CS student in Nepal has its challenges. Here are the resources, communities, and habits that genuinely made a difference...",
    body: "Being a computer engineering student in Nepal comes with a unique set of challenges. Slow internet on bad days, fewer local communities around cutting-edge tech, and a curriculum that sometimes lags behind industry trends.\n\nBut honestly? It's also made me resourceful. Here's what actually helped me level up:\n\nYouTube above everything. Fireship, Traversy Media, The Primeagen — these channels taught me more practical web dev than most textbooks. Free, fast, and current.\n\nBuild something real. The biggest leap I made was building EmbedAI. Not a tutorial project — a real product. The problems you hit when building for production are different from anything a course will show you.\n\nGitHub is your portfolio. Start committing code early, even if it's messy. Employers and collaborators look at your GitHub before your CV.\n\nIf you're a student in Nepal (or anywhere with limited local resources), don't let that be your excuse. The internet is a great equalizer. Use it."
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
 
  window._posts = posts;
 
  grid.innerHTML = posts.map((p, i) => `
    <div class="post-card reveal" onclick="openPost(${i})">
      <div class="post-meta">
        <span class="post-category">${p.category || 'General'}</span>
        <span class="post-date">${formatDate(p.date)}</span>
      </div>
      <h3 class="post-title">${p.title}</h3>
      <p class="post-excerpt">${p.excerpt}</p>
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
 
// ── ESC to close modal ──
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePost(); });
 
// ── INIT ──
document.addEventListener('DOMContentLoaded', async () => {
  observeReveal();
 
  // Show fallback data immediately so the page is never empty
  renderProjects(FALLBACK_PROJECTS);
  renderPosts(FALLBACK_POSTS);
 
  // Then try to fetch live JSON (works on GitHub Pages / any server)
  // If fetch fails (e.g. file:// protocol), fallback data stays — no problem
  if (location.protocol !== 'file:') {
    try {
      const [projRes, postsRes] = await Promise.all([
        fetch('data/projects.json'),
        fetch('data/posts.json')
      ]);
      if (projRes.ok) {
        const projects = await projRes.json();
        if (projects.length) renderProjects(projects);
      }
      if (postsRes.ok) {
        const posts = await postsRes.json();
        if (posts.length) renderPosts(posts);
      }
    } catch (e) {
      // fetch failed — fallback data already shown, nothing to do
      console.info('Running without server — showing built-in content.');
    }
  }
});
 