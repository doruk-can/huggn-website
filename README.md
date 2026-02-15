# Huggn Website

AI Therapy Companion Landing Page.

## 🚀 How to Run Locally

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 🌐 How to Deploy (GitHub Pages)

This project is configured to deploy to `huggn.app` using the `gh-pages` package.

### 1. Setup GitHub Repository
- Create a new repository on GitHub named `huggn-website`.
- Connect your local folder to GitHub (if not already done):
  ```bash
  git init
  git remote add origin https://github.com/YOUR_USERNAME/huggn-website.git
  ```

### 2. Deploy to Live
Run the following command to build the project and push it to the `gh-pages` branch:
```bash
npm run deploy
```

### 3. Custom Domain Configuration (Squarespace)
The project includes a `public/CNAME` file for `huggn.app`. Ensure your DNS records are set as follows:

**A Records (@):**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME Record (www):**
- Name: `www`
- Data: `YOUR_USERNAME.github.io`

### 4. Final Check
Go to your GitHub Repository > **Settings > Pages** and:
- Verify **Custom Domain** is set to `huggn.app`.
- Ensure **Enforce HTTPS** is checked (may take a few minutes to become available).

---
© 2026 Ryon Labs LLC
