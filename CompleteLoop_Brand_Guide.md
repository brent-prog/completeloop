# CompleteLoop Brand Guide

This guide captures the core visual, verbal, and layout standards for CompleteLoop. Use it when creating new landing pages, app screens, blog posts, sales documents, pitch material, social content, email campaigns, and product UI.

## 1. Brand Foundation

### Core idea

CompleteLoop helps businesses use structured coaching to find what the business needs to fix.

The product is not just a coaching documentation tool. Coaching is the signal. The larger business value is that repeated coaching evidence reveals what is broken in knowledge, training, SOPs, standards, processes, handoffs, incentives, or accountability.

### Primary positioning statement

CompleteLoop helps managers coach specific behaviours, verify whether change happened, and turn repeated coaching patterns into the signal that fixes broken knowledge, training, standards, and processes.

### Plain language version

CompleteLoop helps managers coach the right way, verify behaviour change, and show the business what needs to be fixed so the same problems stop coming back.

### Short product message

Structured coaching. Better knowledge. Fewer repeat problems.

### Core message hierarchy

1. Managers coach observable behaviour.
2. Follow-up verifies whether behaviour changed.
3. Repeated coaching themes reveal what the business needs to fix.
4. Knowledge, training, SOPs, standards, and processes are corrected.
5. Repeat coaching decreases.
6. Execution improves.

### Key product language

Use these phrases consistently:

- Coaching is the signal.
- Find what needs fixing.
- Use coaching to find what the business needs to fix.
- The loop is not complete until the business improves what it knows.
- Structured coaching creates evidence the business can use.
- Repeated coaching themes show where knowledge stops matching reality.
- Correct knowledge. Reduce repeat coaching. Improve execution.

### Avoid saying

Avoid language that makes CompleteLoop sound like only a note-taking app or HR compliance tool.

Avoid:

- Coaching app
- Digital notebook
- Performance management paperwork
- Employee discipline tracker
- AI-powered transformation platform
- Revolutionary business transformation solution
- Generic operational excellence platform

Better alternatives:

- Structured coaching system
- Coaching evidence system
- Knowledge loop software
- Coaching signal layer
- Behaviour change verification system
- Manager coaching workflow

## 2. Brand Voice

### Voice traits

CompleteLoop should sound:

- Clear
- Direct
- Practical
- Business grounded
- Plain spoken
- Useful
- Calmly confident
- Evidence based

### Writing style

Use short sentences. Make the business value clear. Avoid hype. Avoid buzzwords. Do not make simple things sound complicated.

Use business language, but keep it human.

Preferred style:

> Coaching conversations may be happening. But the evidence disappears. CompleteLoop helps managers document what happened, follow up, verify behaviour change, and show the business what needs to be fixed.

Avoid style:

> CompleteLoop revolutionizes the coaching ecosystem through next-generation performance enablement and AI-driven transformation architecture.

### Punctuation preference

Use commas, periods, colons, semicolons, or simple hyphens where needed. Do not use em dashes in brand copy.

### Tone for different formats

#### Website and landing pages

- Direct
- Benefit first
- Problem-aware
- Short paragraphs
- Strong section headings

#### Blog posts

- Educational
- Practical
- Clear point of view
- Use examples from real management and operations
- Keep paragraphs short

#### App UI

- Action oriented
- Specific
- Calm
- No jargon
- No cleverness at the expense of clarity

#### Sales documents

- Executive-friendly
- Plain language
- Focus on operational value
- Connect coaching to business improvement

## 3. Logo System

### Primary logo files

Current logo assets in the repo:

- `/public/lightbg.png`
- `/public/darkbg.png`
- `/public/fav.png`
- `/public/favicon.png`

### Logo usage

#### Light backgrounds

Use:

```text
/public/lightbg.png
```

Best for:

- Website header
- White cards
- Light landing pages
- PDFs with white backgrounds
- Blog headers

#### Dark backgrounds

Use:

```text
/public/darkbg.png
```

Best for:

- Footer
- Dark presentation slides
- Dark CTA sections
- Dark app sidebars

#### Icon and favicon

Use:

```text
/public/fav.png
/public/favicon.png
```

Best for:

- Browser favicon
- Small app icon
- Social profile image
- UI badge
- Small circular brand mark

### Logo layout rules

The logo PNG files may include transparent space around the artwork. Do not let the image's natural canvas control layout height.

For web and app UI, place logos inside a controlled frame.

Recommended header logo frame:

```css
.logo {
  display: flex;
  align-items: center;
  width: 260px;
  height: 64px;
  overflow: visible;
}

.logo img {
  width: 260px;
  height: auto;
  object-fit: contain;
}
```

Recommended mobile header logo frame:

```css
@media (max-width: 520px) {
  .logo {
    width: 252px;
    height: 52px;
    flex-basis: 252px;
  }

  .logo img {
    width: 244px;
    height: auto;
    object-fit: contain;
  }
}
```

Recommended footer logo frame:

```css
.footer-logo {
  display: flex;
  align-items: center;
  width: 238px;
  height: 52px;
  overflow: hidden;
}

.footer-logo img {
  width: 238px;
  height: auto;
  object-fit: contain;
}
```

### Logo do's

- Use the correct logo for light or dark backgrounds.
- Keep enough clear space around the logo.
- Use the full logo in headers, footers, cover pages, and primary brand moments.
- Use the favicon/icon only when space is limited.
- Put the logo in a fixed frame so transparent canvas does not create unwanted whitespace.

### Logo don'ts

- Do not stretch the logo vertically.
- Do not crop the checkmark or right edge.
- Do not use typed text as a replacement for the logo.
- Do not place the logo over busy images.
- Do not add shadows, outlines, or effects unless needed for accessibility.
- Do not rely on the natural PNG canvas for layout sizing.

## 4. Color System

### Core palette

These are the primary CompleteLoop brand colors used on the current website.

| Token | Hex | Use |
|---|---:|---|
| Navy | `#102f43` | Primary dark brand color, hero cards, footer, dark CTA blocks |
| Dark | `#071c28` | Deep footer background, high-contrast dark areas |
| Ink | `#0f172a` | Primary text, headings |
| Muted | `#64748b` | Body copy, supporting text |
| Teal | `#089e98` | Primary action color, links, highlights, buttons |
| Teal Light | `#d9fbf8` | Light accent background, soft highlight areas |
| Background | `#f8fafc` | Page background, soft section background |
| White | `#ffffff` | Card backgrounds, light areas |
| Border | `#dbe3ea` | Light borders, dividers, card outlines |

### Supporting colors

| Color | Hex | Use |
|---|---:|---|
| Bright Aqua | `#9ff5ec` | Small text on dark navy, highlights, footer accent |
| Light Blue Text | `#dbeafe` | Text on dark backgrounds |
| Footer Muted | `#b7c9d6` | Footer body copy |
| Soft Card Border | `#cfdce6` | Problem card borders |
| Soft Teal Card | `#e9fbfa` | Light icon background, note blocks |

### CSS variables

Use these tokens as the default foundation:

```css
:root {
  --navy: #102f43;
  --ink: #0f172a;
  --muted: #64748b;
  --teal: #089e98;
  --teal-light: #d9fbf8;
  --bg: #f8fafc;
  --white: #ffffff;
  --border: #dbe3ea;
  --dark: #071c28;
}
```

### Color usage principles

#### Use navy for authority

Use navy for:

- Footer background
- Dark CTA sections
- Coaching signal cards
- Important message blocks
- Primary contrast sections

#### Use teal for action

Use teal for:

- Primary buttons
- Highlight text
- Step numbers
- Thin accent borders
- Active states
- Mobile menu accents

#### Use light teal sparingly

Use light teal for:

- Background glows
- Soft highlight cards
- Note blocks
- Accent panels

Do not use light teal as the main background for large text-heavy sections unless contrast is strong.

#### Use muted text for support copy

Use muted grey-blue for body copy. Avoid pure black for body text. Use ink for headlines.

## 5. Typography

### Primary font stack

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Headings

Headings should feel strong, compact, and confident.

Recommended heading styling:

```css
h1 {
  font-size: clamp(42px, 6vw, 76px);
  line-height: .98;
  letter-spacing: -.06em;
  font-weight: 900;
}

h2 {
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1.02;
  letter-spacing: -.05em;
  font-weight: 900;
}
```

### Body copy

Recommended body styling:

```css
p {
  color: var(--muted);
  font-size: 18px;
  line-height: 1.7;
}
```

Mobile body copy can reduce to 17px where needed.

### Kicker text

Use kicker text for section labels and short brand statements.

```css
.kicker {
  color: var(--teal);
  font-size: 13px;
  font-weight: 950;
  letter-spacing: .2em;
  text-transform: uppercase;
}
```

Examples:

- The Problem
- The CompleteLoop
- What the software does
- Why it matters
- Next step

## 6. Layout System

### General page structure

Preferred page rhythm:

1. Sticky header
2. Hero section
3. Problem section
4. Loop or solution section
5. Software/functionality section
6. Why it matters section
7. CTA/contact section
8. FAQ section
9. Footer

### Section spacing

Desktop:

```css
.section {
  padding: 76px 6vw;
}
```

Mobile:

```css
@media (max-width: 520px) {
  .section {
    padding: 58px 24px;
  }
}
```

### Cards

Cards should be simple, rounded, and lightly bordered.

```css
.card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: white;
  box-shadow: 0 16px 36px rgba(15,23,42,.07);
}
```

### Rounded corners

Use generous but controlled rounding.

| Element | Radius |
|---|---:|
| Small buttons | `999px` |
| Small badges | `12px - 16px` |
| Cards | `20px - 26px` |
| Large panels | `28px - 34px` |

### Shadows

Use soft, low-opacity shadows only.

Preferred:

```css
box-shadow: 0 18px 48px rgba(15,23,42,.07);
```

Avoid harsh shadows, heavy glows, or dramatic 3D effects.

## 7. Component Standards

### Header

Desktop header:

- Logo on left
- Desktop nav centered or right aligned
- CTA button on right
- Sticky top
- White background
- Subtle border

Mobile header:

- Logo left
- Hamburger right
- No full menu visible by default
- Menu closes when a user selects a link or taps outside
- Header should be compact but not cramped

Mobile header target:

```css
@media (max-width: 520px) {
  .site-header {
    height: 64px;
    padding: 4px 14px;
  }
}
```

### Buttons

Primary button:

```css
.button {
  border-radius: 999px;
  padding: 14px 22px;
  background: var(--teal);
  color: white;
  font-weight: 900;
  border: 2px solid var(--teal);
}
```

Secondary button:

```css
.button.outline {
  background: white;
  color: var(--ink);
  border-color: var(--border);
}
```

Primary CTA text:

```text
Talk About Your Knowledge Loop
```

Secondary CTA text:

```text
See How CompleteLoop Works
```

### Hero section

Hero should include:

- Kicker statement
- Strong H1
- Plain language lead paragraph
- Primary CTA
- Optional secondary CTA
- Optional supporting proof card

Current hero copy:

```text
Structured coaching. Better knowledge. Fewer repeat problems.

Use coaching to find
what the business
needs to fix.

CompleteLoop helps managers coach specific behaviours, verify whether change happened, and turn repeated coaching patterns into the signal that fixes broken knowledge, training, standards, and processes.
```

### Problem section

The problem section should clearly state the business pain before explaining the product.

Current problem headline:

```text
Your managers may be coaching, but the business still may not be learning.
```

Current problem insight:

```text
The issue is not just whether coaching happens. It is whether coaching creates useful evidence the business can act on.
```

Problem card style:

- Number badge
- Short bold statement
- Left teal accent
- White card
- Soft border

### Knowledge loop section

Avoid overly complex circular graphics for mobile. Use a clean process model unless a polished image is specifically designed.

Preferred loop copy:

```text
Coaching is the signal
Find what needs fixing.
```

Preferred loop steps:

1. Knowledge exists
2. Work happens
3. Coaching verifies reality
4. The business learns

Preferred outcome line:

```text
Correct knowledge → Reduce repeat coaching → Improve execution
```

### Footer

Footer should be dark, compact, and easy to scan.

Use:

- Dark background `#071c28`
- Dark-background logo `/public/darkbg.png`
- Short brand paragraph
- Contact links
- Connect links
- Copyright and tagline

Mobile footer should avoid dead space created by transparent logo canvas. Use a fixed logo frame.

Recommended mobile footer override:

```css
@media (max-width: 520px) {
  .site-footer {
    gap: 18px;
    padding: 30px 24px 20px;
  }

  .footer-logo {
    width: 226px;
    height: 48px;
    overflow: hidden;
  }

  .footer-logo img {
    width: 226px;
    height: auto;
    object-fit: contain;
  }
}
```

## 8. Responsive Design Standards

### Mobile priorities

On mobile:

- Hide full desktop nav.
- Use hamburger menu.
- Keep header compact.
- Keep hero readable above the fold.
- Stack cards vertically.
- Avoid complex graphics with tiny text.
- Avoid large empty logo canvas space.
- Make buttons full width only when needed.

### Breakpoints

Use two practical breakpoints:

```css
@media (max-width: 1000px) {
  /* tablet and mobile */
}

@media (max-width: 520px) {
  /* small phones */
}
```

### Mobile menu behaviour

The mobile menu should close when:

- The user taps the hamburger/X
- The user taps a menu link
- The user taps outside the menu
- The user presses Escape

Recommended JavaScript:

```html
<script>
  (() => {
    const menu = document.querySelector('.mobile-menu');
    if (!menu) return;

    const closeMenu = () => {
      menu.removeAttribute('open');
    };

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!menu.open) return;
      if (!menu.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  })();
</script>
```

## 9. Blog Formatting Standards

### Blog article structure

Use this structure for thought leadership and educational posts:

```text
Title
Short opening statement
Problem or observation
Why it matters
Practical example
What to do about it
Closing takeaway
CTA
```

### Blog headline style

Strong, direct, practical.

Examples:

- Coaching Is Not Complete Until Follow-Up Happens
- Your Managers Are Coaching. But Is the Business Learning?
- The Real Value of Coaching Data Is Not the Note. It Is the Pattern.
- Why Repeat Coaching Issues Usually Point to Broken Knowledge

### Blog CTA examples

```text
Want to see where coaching evidence can improve your knowledge loop? Let’s talk.
```

```text
If the same problems keep coming back, the issue may not be effort. It may be the knowledge behind the work.
```

## 10. App UI Standards

### App UI principles

The product UI should feel:

- Clean
- Fast
- Manager-friendly
- Not overdesigned
- Focused on action and follow-up

### App UI labels

Use action-based labels:

- Prepare coaching
- Document observation
- Set follow-up
- Verify change
- Recognize improvement
- View patterns
- Fix knowledge gap

Avoid vague labels:

- Insights hub
- Enablement dashboard
- Transformation center
- Engagement portal

### App status language

Use specific status labels:

- Follow-up due
- Behaviour verified
- Behaviour not yet verified
- Repeat theme detected
- Knowledge gap identified
- SOP update needed
- Training clarification needed
- Closed with recognition

### App colors

Use the brand palette carefully:

- Navy for primary panels and major headings
- Teal for actions and active states
- Light teal for positive highlights
- Muted text for descriptions
- White cards on soft grey backgrounds

## 11. Document and Presentation Standards

### One-pagers

One-pagers should use:

- Logo at top
- Strong headline
- Short problem statement
- Clear solution statement
- 3 to 5 benefit bullets
- One simple process model
- Strong CTA

### Slide decks

Slide decks should use:

- Large headlines
- Minimal text
- Navy and white contrast
- Teal as accent only
- One idea per slide
- Simple diagrams, not complex infographics

### PDFs and proposals

Use:

- White background
- Navy headings
- Teal accents
- Clear section dividers
- Short paragraphs
- Strong business outcomes

## 12. Visual and Graphic Direction

### Preferred graphic style

CompleteLoop visuals should be:

- Clean
- Flat or lightly dimensional
- Minimal
- Text-readable
- Business-friendly
- Built for mobile first

### Avoid

- Busy circular infographics with tiny text
- Overlapping arrows
- Complex diagram labels
- Large decorative graphics that crowd the message
- Unreadable text inside images
- Logo images embedded inside SVG files unless tested carefully

### Better visual pattern

Prefer simple process visuals:

```text
Knowledge → Work → Coaching Signal → Business Learning → Better Knowledge
```

Or:

```text
Correct knowledge → Reduce repeat coaching → Improve execution
```

## 13. SEO and Metadata Standards

### Recommended title pattern

```text
CompleteLoop | Structured Coaching and Knowledge Loop Software
```

### Recommended meta description

```text
CompleteLoop helps managers coach specific behaviours, verify whether change happened, and turn repeated coaching evidence into the signal that fixes broken knowledge, training, standards, and processes.
```

### Keyword themes

Use naturally. Do not stuff.

- Coaching documentation software
- Structured coaching system
- Manager coaching tool
- Behaviour change verification
- Coaching follow-up
- Knowledge loop
- SOP improvement
- Training gap analysis
- Frontline coaching software
- Coaching evidence
- Business process improvement

## 14. Reusable Copy Bank

### Headlines

```text
Use coaching to find what the business needs to fix.
```

```text
Your managers may be coaching, but the business still may not be learning.
```

```text
The loop is not complete until the business improves what it knows.
```

```text
A coaching system that improves behaviour and fixes the knowledge behind the work.
```

```text
Business problems repeat when knowledge stops matching reality.
```

### Short claims

```text
Coaching is the signal.
```

```text
Find what needs fixing.
```

```text
Correct knowledge. Reduce repeat coaching. Improve execution.
```

```text
Structured coaching creates evidence the business can use.
```

### CTA copy

```text
Talk About Your Knowledge Loop
```

```text
See How CompleteLoop Works
```

```text
Email info@completeloop.io
```

### Footer tagline

```text
Structured coaching for a stronger knowledge loop.
```

## 15. Do and Do Not Summary

### Do

- Use the actual CompleteLoop logo assets.
- Use fixed frames for logo images to avoid transparent canvas spacing issues.
- Use navy, teal, white, and soft grey consistently.
- Keep the copy direct and practical.
- Make mobile layout a priority.
- Use simple process visuals.
- Connect coaching to business learning.
- Use behaviour, follow-up, verification, and knowledge correction language.

### Do not

- Do not use complex circular graphics unless professionally designed and tested on mobile.
- Do not use the logo as regular text.
- Do not let transparent PNG canvas dictate layout spacing.
- Do not show full desktop nav on mobile.
- Do not overuse teal.
- Do not make CompleteLoop sound like generic HR software.
- Do not use hype, jargon, or inflated claims.
- Do not use em dashes in Brent-facing brand copy.

## 16. Quick Build Checklist

Before publishing a new page, app screen, or document:

- Is the core message clear within five seconds?
- Does the headline connect coaching to business improvement?
- Is the logo correct for the background?
- Are colors using the approved palette?
- Is the page readable on mobile?
- Is the mobile menu clean and functional?
- Are buttons clear and consistent?
- Are cards simple and not overcrowded?
- Is the footer compact and readable?
- Does the content avoid jargon?
- Is there a clear next step?

## 17. Current Contact and Link Standards

Use these as current defaults:

```text
Email: info@completeloop.io
Phone: 519-835-2374
Primary CTA: https://calendly.com/brent3p/30min
LinkedIn: https://www.linkedin.com/in/brent-pattison-canada/
Website: https://completeloop.io/
```

## 18. Brand Summary

CompleteLoop should look and sound like a practical business tool built by someone who understands coaching, operations, and accountability.

The brand should not feel flashy, abstract, or over-engineered. It should feel clear, useful, direct, and trustworthy.

The central idea is simple:

```text
Coaching is the signal. CompleteLoop helps the business find what needs fixing.
```
