# Recipe Calculator App

A full-stack recipe calculator application with React frontend and Node.js Express backend. Features smart ingredient scaling based on chicken weight.

## Features

- 🍊 Chili Crisp Orange Chicken recipe with dynamic scaling
- 📊 Automatic serving calculations
- 🎨 Beautiful UI with Tailwind CSS
- 🚀 Production-ready Node.js backend with API endpoints

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Deployment**: Ready for xCloud hosting

## Local Development

### Install Dependencies
```bash
npm install
```

### Development Mode (Frontend + Backend)
```bash
# Run both frontend and backend simultaneously
npm run dev:all

# Or run separately:
npm run dev          # Frontend only (http://localhost:5173)
npm run dev:server   # Backend only (http://localhost:3000)
```

### Build for Production
```bash
npm run build
```

### Run Production Build
```bash
npm start
```

The app will be available at `http://localhost:3000`

---

## 🚀 Deploy to xCloud

Follow these steps to deploy your application on xCloud:

### Step 1: Create Site
1. Click **Create Site** from your xCloud dashboard
2. Choose your **Server** from the dropdown
3. Select **Node.js** from the application types
4. Choose **Clone a Git Repository**

### Step 2: Set Up Domain
- Choose **Demo Site** (or Live Site if you have a domain)
- Click **Next**

### Step 3: Configure Node.js Application

**Important Settings:**

- **Server-Side Rendering App**: Toggle **ON** ✅
- **Port**: `3000`
- **Start Command**: `npm start`
- **Web Root Path**: Leave blank (or enter `/` if required)

**Database**: Choose "No Database" (or add one if you plan to extend the app)

### Step 4: Connect Git Repository

Choose one of these options:

**Option A: Connected Git Provider (Recommended)**
1. Select "Connected Git Provider"
2. Choose your GitHub account
3. Select repository: `Aventerica89/Claude`
4. Select branch: `claude/convert-to-react-018Z5Cae5DNxsbPquKHBfdNP`

**Option B: Public Repository (Manual)**
1. Select "Public Repository (Manual HTTPS URL)"
2. Repository URL: `https://github.com/Aventerica89/Claude.git`
3. Branch: `claude/convert-to-react-018Z5Cae5DNxsbPquKHBfdNP`

### Step 5: Enable Push-to-Deploy
- Toggle **ON** the "Enable Push to Deploy" option
- Copy the Deployment URL
- Add it as a webhook in your GitHub repository settings

### Step 6: Deployment Script

Enter this in the **Deployment Script** field:
```bash
npm install && npm run build
```

This will:
1. Install all dependencies
2. Build the React frontend into static files
3. Prepare the app for production

### Step 7: Environment Variables

**.env File Path**: Leave blank or enter `/`

**File Content**: Copy this into the .env section:
```
NODE_ENV=production
PORT=3000
```

### Step 8: Start Deployment
1. Click **Start** to begin deployment
2. Monitor the progress in real-time
3. Wait for the success message

### Step 9: Visit Your Site
Once deployed, your Recipe Calculator app will be live! 🎉

---

## 📝 Configuration Summary for xCloud

| Setting | Value |
|---------|-------|
| **Application Type** | Node.js |
| **SSR Toggle** | ON |
| **Port** | 3000 |
| **Start Command** | `npm start` |
| **Deployment Script** | `npm install && npm run build` |
| **Web Root** | (blank) |
| **Branch** | `claude/convert-to-react-018Z5Cae5DNxsbPquKHBfdNP` |

---

## API Endpoints

The backend provides these API endpoints:

- `GET /api/health` - Health check
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get recipe by ID
- `POST /api/recipes/:id/calculate` - Calculate scaled ingredients

---

## Project Structure

```
Claude/
├── server/                 # Backend Express server
│   ├── index.js           # Main server file
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   └── data/              # Recipe data
├── src/                   # Frontend React app
│   ├── RecipeApp.jsx      # Main component
│   ├── main.jsx           # React entry point
│   └── index.css          # Styles
├── dist/                  # Built frontend (created after build)
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration

```

---

## Support

If you encounter any issues during deployment, contact xCloud support or check their documentation.

**GitHub Repository**: https://github.com/Aventerica89/Claude
