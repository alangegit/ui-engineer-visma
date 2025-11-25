# Vite React Project - Senior UI Engineer

This is a **React** application built with **Vite**, **TypeScript**, and **Tailwind CSS**

## Getting Started

### 1. Install Requirements
Make sure you have **Node.js (v18 or later)** installed

### 2. Install Dependencies
From the project root, install all packages with `npm install`

### 3. Run Dev Server
Start the local dev server with `npm run dev` and navigate to http://localhost:5173

## UI/UX Considerations

The task is to develop a form that supports a hiring process.

There are three mandatory criteria: applicants must live in Europe, speak English, and be available within 90 days. Other than that we need a name, a way of establishing contact and also some way of understanding if they have the competencies we're after. 

Comparing the provided html/js/css bundle to the task, my first thought was to scope hammer the solution (inspired by Shape Up) so that it lived up to the criteria and was somewhat achievable within the time constraint.

This means that I've been cheeky and discarded the following elements:

- Password input: Creating a profile isn't strictly a necessity for sending an application
- Country dropdown: We are only interested in applicants living in Europe
- Language checkboxes: We are only interested in English speaking applicants
- Date input: We are only interested in applicants who can start within the next 90 days
- Reset button: The simplicity of the solution does not really warrant a reset button

But I also needed to add one UI element for the solution to be useful:

+ A URL input: So that the applicant can link to a professional website/profile

After cleaning up the UI, I hoped to build the solution within the time limit.

## Dev/DX Considerations

I decided to build the application with Vite as the CLI has support for React and the configuration is pretty straightforward when adding other packages. 

I chose TypeScript because it provides a better developer experience, strong type safety, and it’s a familiar ecosystem for me in React projects.

I went with TailwindCSS for speedy, utility-first styling, which allowed me to move quickly within the time constraint.

## The Result

After spending ~3-4 hours focussed dev/design time on the task, I've created a handful of reusable components with very simple properties. These are found in the components folder and there's a view in the views folder `Submission.tsx` that consumes all of them and is in turn consumed in `App.tsx`.

With the main points described in the original README.md, my time was spent on components, structure, ui, etc. which means that the form is visible and clickable, but does not validate, nor send any data.

## Future Considerations

If I had more time to finish the task I would:

- Improve input components with autocomplete, validation messages and error handling
- Spend more time tweaking the UI to provide better feedback to the user
- Develop robust layout components with spacing patterns 
- Split components into more meaningful folder structures depending on responsibility
- Use semantic tokens (text-foreground, bg-surface, spacing-lg, etc.) for theming
- Add functionality so that tapping the submit button actually sends the data
- Evaluate and tweak any redundant functional code so that it is more readable
- Write more focussed, descriptive commit messages for a better git history