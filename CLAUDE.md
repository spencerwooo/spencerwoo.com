# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Spencer Woo's personal blog and portfolio website, built with MkDocs Material. The site is statically generated from Markdown content and features a blog with posts about deep learning, research, and open source.

## Development Commands

### Setup
```bash
# Create virtual environment and install dependencies
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies (using uv or pip)
uv pip install -r requirements.txt
# or: pip install -e .
```

### Build and Serve
```bash
# Serve locally with live reload (default: http://127.0.0.1:8000)
mkdocs serve

# Build static site (outputs to ./site)
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## Architecture

### Content Structure

- **docs/**: All content and assets
  - **blog/posts/**: Blog post markdown files
  - **blog/images/**: Blog post images (organized by post)
  - **assets/**: Global assets (logo, images)
  - **index.md**: Homepage
  - **publications.md**: Research publications
  - **sponsor.md**: Sponsorship page

### Configuration

- **mkdocs.yml**: Main MkDocs configuration
  - Theme: Material for MkDocs
  - Plugins: search, awesome-pages, glightbox, blog, rss
  - Markdown extensions: pymdownx suite, admonitions, KaTeX support
  - Features: instant navigation, tabs, dark mode

- **.pages.yml**: Content management configuration for CMS-like editing interface
  - Defines media paths, collections, and field schemas
  - Categories: github, life, notion, open-source, research, vision

### Blog Post Format

Blog posts use YAML frontmatter with the following structure:

```markdown
---
title: 'Post Title'
date:
  created: YYYY-MM-DD
  updated: YYYY-MM-DD
categories:
  - category1
  - category2
slug: post-slug
---

Post content here...

<!-- more -->  # Excerpt delimiter for RSS feed

Rest of post...
```

### Customizations

- **overrides/partials/comments.html**: Giscus comments integration for blog posts
- **docs/javascripts/katex.js**: KaTeX math rendering configuration
- **docs/stylesheets/extra.css**: Custom styling
  - Arsenal SC font for headings
  - Custom primary color scheme
  - Dark theme (slate) customizations
  - Publication grid layout styles

### Theme Features

- Instant navigation with progress indicator
- Light/dark/system theme toggle
- Google Analytics integration
- RSS feed generation (feed.xml, feed_updated.xml)
- Giscus comments on blog posts
- KaTeX math rendering
- Code syntax highlighting with copy button
- Image lightbox (glightbox)

## Key Implementation Details

### Navigation
Navigation is configured in mkdocs.yml and uses the awesome-pages plugin for flexible organization. The blog uses Material's built-in blog plugin with post URL format "{slug}".

### RSS Feeds
RSS plugin generates feeds from blog posts matching "blog/posts/.*" pattern. The `<!-- more -->` delimiter in posts defines the excerpt/abstract for feed entries.

### Comments
Comments are conditionally loaded only on blog post pages (src_uri starts with 'blog/posts') using Giscus with the spencerwooo/giscus-discussions repository.

### Dark Theme
Custom dark theme uses a darker background (hsl(240, 12%, 14%)) and adjusted link colors for better contrast. Headers and tabs inherit the background color seamlessly.

### Math Rendering
KaTeX is configured to render math expressions with delimiters: $$...$$ and $...$ for inline, \[...\] and \(...\) for display math.
