**Personal Portfolio**

An interactive portfolio showcasing projects, experience, and skills with responsive, animated project cards, searchable/filterable views, and detailed modal previews. Focused on clarity and accessibility, it delivers fast navigation, and convenient contact/resume access

**Key Features**
- **Sleek Home Screen** 
Hero section with a short introduction, rotating highlight text, and quick links to projects and resume; sets the visual tone and primary call-to-action. Emphasis on ease of navigation between pages. 
![Home Screenshot](static/Home.png)

- **Projects Overview** 
Grid of interactive project cards with short summaries and affordances to open detailed views. Each project overview is accompanied with details on technologies used.

- **Project Details** Expanded project presentation that users can navigate to from the projects page with key features, screenshots, and links (demo / repo); used for in-depth context without leaving the projects list.

- **Experience Page** Chronological timeline or list of roles and accomplishments with company/project highlights and concise impact statements.

- **Resume/Contact Page** Printable / downloadable resume view plus a concise summary of skills and certifications; includes a clear download or open-resume action.

Place your screenshots in the `public/` folder (or any folder you prefer) and replace the placeholders below with the actual image filenames.

- **Home / Hero:** ![Home Screenshot](public/screenshots/home.png)
- **Projects Grid:** ![Projects Screenshot](public/screenshots/projects.png)
- **Project Modal / Detail:** ![Project Modal Screenshot](public/screenshots/project-modal.png)
- **Resume Page:** ![Resume Screenshot](public/screenshots/resume.png)

**Getting Started**
1. Install dependencies:

```
cd Personal-Portfolio
npm install
```

2. Run the development server:

```
npm run dev
```

3. Open your browser to `http://localhost:3000` and view the site.

**Project Structure (high level)**
- **app/**: Main application pages and components.
- **public/**: Static assets and screenshots.
- **components/**: Reusable UI components and animations.
- **lib/**: Utility helpers.
- **package.json**: Scripts and dependencies.

See the project card component for the portfolio entry at [app/projects/PersonalPortolio/PersonalPortfolioProjectCard.tsx](app/projects/PersonalPortolio/PersonalPortfolioProjectCard.tsx).

**Contributing**
- Open an issue or submit a pull request with improvements or fixes.

**Contact**
- Replace this section with your preferred contact method (email, LinkedIn, etc.).

---

Update the image filenames in the Screenshots section after adding actual screenshots to the repository.
