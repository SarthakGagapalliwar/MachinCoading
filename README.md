# 🍫 Smart Vending Machine

A modern, responsive vending machine simulation built with HTML, CSS, and JavaScript.

## 🚀 How to Run Locally

### Option 1: Python Server (Recommended)

```bash
# Navigate to the project folder
cd MachinCoading

# Start Python HTTP server
python -m http.server 8080

# Open in browser: http://localhost:8080
```

### Option 2: Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Opening

Simply double-click `index.html` to open in your browser (some features may not work due to CORS policies).

## 📁 File Structure

```
MachinCoading/
├── index.html          # Main HTML file
├── style.css          # Styling and responsive design
├── VendingMachine.js  # JavaScript logic
└── README.md          # This file
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (main)
4. Your site will be available at: `https://yourusername.github.io/MachinCoading/`

### Netlify

1. Drag and drop the project folder to netlify.com
2. Your site will get a random URL instantly

### Vercel

1. Connect your GitHub repository to Vercel
2. Deploy automatically

## 🎯 Features

- ✅ Product selection with visual feedback
- ✅ Real-time balance display
- ✅ Change calculation and dispensing
- ✅ Admin panel for adding products
- ✅ Responsive design (mobile-friendly)
- ✅ Modern UI with smooth animations
- ✅ Error handling and validation

## 🎮 How to Use

1. **Select a Product**: Click on any product (it will highlight in blue)
2. **Insert Money**: Enter amount in the money field and press Enter
3. **Collect Item**: The machine will dispense your product and show change
4. **Add Products**: Use the admin panel to add new products

## 🐛 Troubleshooting

### 404 Not Found Error

- Make sure you're accessing `http://localhost:8080` (not 8000)
- Ensure all files are in the same directory
- Check that the server is running

### Styling Issues

- Clear browser cache (Ctrl+F5)
- Check that `style.css` is in the same folder as `index.html`

### JavaScript Errors

- Open Developer Tools (F12) and check Console tab
- Make sure `VendingMachine.js` is in the same folder

## 🔧 Technical Details

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Responsive**: CSS Grid and Flexbox
- **Animations**: CSS transitions and keyframes
- **No Dependencies**: Pure JavaScript, no frameworks required

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

---

Made with ❤️ by [Your Name]
