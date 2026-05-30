# Tarsh Creative — website

The landing page for **tarshcreative.com** — wedding & business social media content.
Built with Next.js + Tailwind CSS.

---

## How to run it on your laptop

### 1. Install Node.js (one-time)
Download the **LTS** version from <https://nodejs.org> and install it.
(This is what runs the website locally — you only do this once.)

### 2. Open the project in a terminal
- Unzip this folder somewhere easy (e.g. your Desktop).
- Open **Terminal** (Mac) or **Command Prompt / PowerShell** (Windows).
- Type `cd ` (with a space), then drag the unzipped folder onto the window and press **Enter**.

### 3. Install the bits it needs (one-time per download)
```bash
npm install
```
This downloads the supporting packages. Takes a minute or two.

### 4. Start the website
```bash
npm run dev
```
Then open **http://localhost:3000** in your browser. 🎉

To stop it, press **Ctrl + C** in the terminal.

---

## Where to change things

Almost everything you'd want to tweak — **prices, package names, wording, contact
email, Instagram link** — lives in **one file**:

```
app/lib/content.ts
```

Open it in any text editor (or the free **VS Code** from <https://code.visualstudio.com>),
edit the text between the quote marks, save, and the website updates instantly while
`npm run dev` is running.

> ⚠️ The prices currently show **$POA** as placeholders — replace them with the real
> numbers. The contact email is set to `hello@tarshcreative.com` — update it if needed.

### The pages
| Page | What it is | File |
|------|------------|------|
| Home | Landing page with the two choices | `app/page.tsx` |
| Wedding | Wedding prices | `app/wedding/page.tsx` |
| Business | Business prices | `app/business/page.tsx` |

### Colours & fonts
Brand colours are defined in `app/globals.css` (look for the `@theme` block).

---

Questions? Send it back to Brent. 💛
