## Installation

#### Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/`     |

## Tech Stack

**JAVASCRIPT FRAMEWORKS**

- [Astro](https://astro.build/ "Astro")

**UI FRAMEWORKS**

- [TailwindCSS](https://tailwindcss.com/ "TailwindCSS")
- [daisyUI](https://daisyui.com/ "daisyUI")

## Use and editing of content

All content is in Markdown files classified in directories in `/src/pages`

To edit the content simply add, delete or modify the .md files.

### Adding or Removing a field

**Add a new field:**

Go to `Container.astro` in` src/components/`.

To add a new field, add a new `<AccordionLayout />` component with the appropriate properties and the corresponding child component.

**Remove an existing field:**

To remove an existing field, simply comment out the `<AccordionLayout />` component of that particular field or delete it.

