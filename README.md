# Sangam Utsav — Indian Classical Events Website

A static website for listing and managing Indian classical music and dance events.

---

## Folder Structure

```
/
├── index.html              ← Public-facing events page
├── events.js               ← Event data (editable)
├── config.js               ← Site config/styling (editable)
├── admin/
│   └── index.html          ← Admin dashboard (password protected)
├── netlify/
│   └── functions/
│       └── save.js         ← Serverless function for GitHub push
├── netlify.toml            ← Netlify build + redirect config
└── README.md
```

---

## Admin Credentials

Edit `admin/index.html` — find the `ADMIN_USERS` array near the top of the `<script>` block:

```js
const ADMIN_USERS = [
  { username: 'admin',  password: 'sangam@2025' },
  { username: 'editor', password: 'utsav@2025'  }
];
```

Change these before deploying. Do NOT commit real credentials to a public repository.

---

## Hosting (Netlify — Free Tier)

### Step 1: Push to GitHub

1. Create a new GitHub repository (private recommended)
2. Push all files to it

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) → New site from Git
2. Connect your GitHub repo
3. Build settings are auto-detected from `netlify.toml`
4. Click Deploy

### Step 3: Set Environment Variables (for GitHub Push from Admin)

In Netlify → Site Settings → Environment Variables, add:

| Variable         | Value                          |
|-----------------|-------------------------------|
| `ADMIN_SECRET`   | Any secret string              |
| `GITHUB_TOKEN`   | Your GitHub personal access token (repo scope) |
| `GITHUB_REPO`    | `yourname/sangam-utsav`        |
| `GITHUB_BRANCH`  | `main`                         |

---

## Adding / Editing Events

### Option A: Admin UI (recommended)
1. Visit `yoursite.netlify.app/admin`
2. Log in with your credentials
3. Add, edit, or delete events using the form
4. Use the **Export tab** to either:
   - Download `events.js` and commit manually, OR
   - Enter your GitHub token and push directly from the browser

### Option B: Edit events.js directly
Open `events.js` and edit the `EVENTS_DATA` array. Each event:

```js
{
  id: "evt001",                          // Unique ID
  title: "Event Name",
  description: "Description text...",
  date: "2025-06-15",                    // YYYY-MM-DD
  time: "18:30",                         // 24-hour HH:MM
  category: "Carnatic Vocal",
  artists: ["Artist One", "Artist Two"],
  venue: {
    name: "Hall Name",
    address: "Full address, City, PIN",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=..."
  },
  registrationEnabled: true,             // Shows/hides booking button
  registrationUrl: "https://bookmyshow.com/...",
  image: "",                             // Optional banner image URL
  featured: false
}
```

### Getting a Google Maps Embed URL
1. Open Google Maps → search your venue
2. Click Share → Embed a map
3. Copy only the URL inside `src="..."` from the iframe code

---

## Styling

Edit `config.js` or use the Admin → Site Configuration panel to change:
- Site name, tagline, description
- Primary/accent/background colors
- Heading and body fonts
- Contact info

---

## Event Display Logic

- Events are **sorted by date + time** automatically
- Events with `registrationEnabled: true` show a **Register** button with the booking URL
- All events show a **WhatsApp Share** button
- Events in the **past** are shown in a separate "Past Events" section
- Google Maps is embedded per event if `mapEmbedUrl` is provided

---

## Cost

| Service       | Cost          |
|--------------|---------------|
| Netlify Free | $0/month      |
| GitHub Free  | $0/month      |
| Domain (optional) | ~₹800/year |
| **Total**    | **₹0 – ₹800/year** |
