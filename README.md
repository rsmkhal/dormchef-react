# DormChef Interactive Features
Name: Reem Khalid

Link to Video: https://drive.google.com/drive/folders/1GhVk-QccphA9rcundehSXv5vfuhvch_O?usp=drive_link
Link to Site: https://rsmkhal.github.io/dormchef-react/#/

Concept: DormChef is a small React app that helps college students find quick, budget-friendly recipes with clear steps and accessible UI.

# How to Run (from source)

Requirements: Node 18+ and npm

``
npm install
npm start
``
then open http://localhost:3000


# Build & Deploy to GitHub Pages (if making changes)

``
npm run build
npm run deploy
``

# Features of this site

Font Size Adjuster: A+/A– controls in the top nav to increase/decrease global font size

Recipe Filters: Single-select filters (Quick, Vegetarian, High Protein) with aria-pressed states; click it again to clear

Image Popup: Each recipe/about image has a dedicated button that opens a full-screen overlay; close with Esc or overlay click

Recipe Details Popup: Activate a recipe card with Enter/Space (or click) to view Ingredients and Instructions in a dialog; Esc closes

Contact Page: Validates email + message and opens the user’s email app via mailto:. A direct mail link is provided as fallback.

Responsive Design: Mobile-first layout; cards stack on small screens; large touch targets.

