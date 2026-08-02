# Tharin Edirisinghe — Portfolio

Personal portfolio site for **Tharin Edirisinghe** — software engineer and tech educator based in Colombo, Sri Lanka.

🔗 **Live site:** [tharinedirisinghe.github.io/portfolio](https://tharinedirisinghe.github.io/portfolio/)

## About this site

A single-page portfolio covering:

- **Home** — intro, quick stats, and highlights
- **About** — a short bio
- **Experience** — internship at Rootcode, freelance tech tutoring since 2023, B.Sc (Hons) IT at the University of Moratuwa
- **Projects** — SmartSchool, AuctiX, Automated Exam Delivery System, ScoreHub, Smart Exam Hall
- **Writing** — links out to Medium posts
- **Contact** — a working contact form (via [Web3Forms](https://web3forms.com/))

## Tech stack

Plain HTML, CSS and JavaScript — no framework, no build step, nothing to install. Typefaces (Switzer, Libre Baskerville) are self-hosted under `/fonts` rather than pulled from a font CDN. Hosted on GitHub Pages.

## Running locally

No dependencies or build tools required — just serve the folder statically:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Project structure

```
.
├── index.html          # the whole site — single scrolling page
├── style.css            # design system: colors, type, layout
├── script.js             # mobile nav toggle
├── fonts/                # self-hosted Switzer + Libre Baskerville
├── images/               # hero photo
└── google*.html          # Google Search Console verification file
```

## Contact form

The contact form posts to [Web3Forms](https://web3forms.com/), a free static-form backend — no server or account dashboard required. The access key embedded in `index.html` is meant to be public (per Web3Forms' own setup instructions), not a secret credential.

## License

This is a personal portfolio, shared for reference. Feel free to look, not to republish as your own.
