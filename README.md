# Muskan Gupta — Portfolio Site

A static one-page site built from the résumé and portfolio deck: profile, experience,
two interactive brand case files, projects, toolkit, certifications, and a downloadable résumé.

## Files
```
index.html      the page
style.css       styling
script.js       nav + accordion behaviour
assets/
  profile.jpg              your headshot
  Muskan_Gupta_Resume.pdf  downloadable résumé (swap this file to update it)
```

## 1. Put it on GitHub

```bash
cd site
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 2. Turn on GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Branch: `main`, folder: `/ (root)`. Save.
4. GitHub gives you a live URL in a minute or two:
   `https://<your-username>.github.io/<repo-name>/`

Every time you push a new commit, the live site updates automatically — that's
the "dynamic" part: edit the HTML/JS, push, and it's live.

## 3. Updating the résumé download

Replace `assets/Muskan_Gupta_Resume.pdf` with a new file of the **same name**
(or update the `href` in `index.html` if you rename it), then commit and push.

## 4. Adding the Pitambari Brass Streamlit dashboard

GitHub Pages only serves static files (HTML/CSS/JS) — it can't run a live
Python/Streamlit app. The dashboard needs to be hosted separately:

1. Push your Streamlit dashboard code (the `.py` file + `requirements.txt`) to
   its own GitHub repo (or a folder in this one).
2. Go to **share.streamlit.io** (Streamlit Community Cloud), sign in with
   GitHub, and deploy that repo. It's free and gives you a live URL like
   `https://your-app-name.streamlit.app`.
3. Open `script.js` in this project and paste that URL into:
   ```js
   const PITAMBARI_DASHBOARD_URL = 'https://your-app-name.streamlit.app';
   ```
4. Commit and push — the "View live dashboard" link on the Projects section
   will go live automatically.

If you'd rather embed it directly in the page instead of linking out, you can
drop an iframe into the Pitambari Brass project card in `index.html`:
```html
<iframe src="https://your-app-name.streamlit.app?embed=true" width="100%" height="600" style="border:1px solid #ccc;"></iframe>
```

## 5. Adding presentations or other files later

Drop new PDFs/images into `assets/`, then add a card to the Projects section
in `index.html` (copy an existing `<article class="project-card">` block) and
link to `assets/your-file.pdf`.
