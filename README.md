# AjTunes App Store Website

Welcome to AjTunes! This is your app store website hosted on GitHub Pages.

## 📁 Website Structure

```
website/
├── index.html      # Main HTML file
├── styles.css      # Styling/CSS
├── script.js       # JavaScript functionality
├── app-icon.png    # Your app icon (add your own)
└── app.apk         # Your app file to download (add your own)
```

## 🚀 How to Use

### 1. View Website Locally (Recommended)
Install the **"Live Server"** extension in VS Code:
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Live Server"
4. Install "Live Server" by Ritwick Dey
5. Right-click `index.html` and select "Open with Live Server"

### 2. Customize the App Details
Open `index.html` and update:
- App name (search for "Your Amazing App")
- App description
- Version number
- File size

### 3. Add Your App Files
1. Place your app's APK file in the `website/` folder and rename it to `app.apk`
2. Add your app icon as `app-icon.png` (recommended size: 512x512px)

### 4. Upload to GitHub
1. Create a new repository on GitHub (e.g., `ajtunes.github.io`)
2. Upload all files from the `website/` folder
3. Go to Repository Settings → Pages
4. Set Source to "main branch"
5. Your site will be live at `https://yourusername.github.io`

## 🎨 Customization

### Change Colors
Edit `styles.css` and modify the color variables:
```
css
:root {
    --primary-color: #6633ff;  /* Main color */
    --secondary-color: #4a25cc; /* Secondary color */
    --accent-color: #ff6b6b;    /* Accent color */
}
```

### Add More Apps
In `index.html`, copy and paste the entire `<div class="app-card">` section and modify for each new app.

## 📝 Notes

- The download button will work once you add your actual app file
- Make sure your app file is named `app.apk` or update the link in HTML
- For other file types, change the extension in the download link

## ✅ Checklist

- [ ] Replace `app-icon.png` with your app icon
- [ ] Replace `app.apk` with your actual app file
- [ ] Update app name and description in HTML
- [ ] Upload to GitHub repository
- [ ] Enable GitHub Pages in settings

---
Made with ❤️ for AjTunes
