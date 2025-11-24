# Vite React Project - Senior UI Engineer Visma

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

Comparing the provided html/js/css bundle to the task, my first thought was to scope hammer (inspired by Shape Up) the solution so that it lived up to the criteria and was somewhat achievable within the time constraint.

This means that we can be cheeky and discard the following elements:

- Password input: Creating a profile isn't strictly a necessity for sending an application
- Country dropdown: We are only interested in applicants living in Europe
- Language checkboxes: We are only interested in English speaking applicants
- Date input: We are only interested in applicants who can start within the next 90 days
- Reset button: The simplicity of the solution does not really warrant a reset button

+ Adding an input so that the applicant can link to a professional website/profile is important

Now that we've removed a substantial part of the UI, we can build the solution and hopefully deliver it within the time limit.

## Development Considerations

I decided to build the application with Vite as the CLI has support for React and the configuration is pretty straightforward when adding other packages. 

I chose TypeScript because it provides a better developer experience, strong type safety, and it’s a familiar ecosystem for me in React projects.

I chose TailwindCSS for speedy, utility-first styling, which allowed me to move quickly within the time constraint.

## The Result

After spending some 3.5 hours focused dev/design time on the task, I've created a handful of reusable components with very simple properties. These are found in the components folder and there's view in the views folder `Submission.tsx` that consumes all of them and is in turn displayed in the `App.tsx`.

The focus described in the original README.md was on component structure, scalability and developer experience, accessibility and usability and code quality. Which meant that I did not manage to create a fully working form within three hours. 

## Future Considerations

If I had more time to finish the assignment I would:

- Improve input components with additional features such as autocomplete, validation messages and error handling
- Add functionality so that tapping the submit button actually sends the data input in the form
- Spend more time tweaking the design and to aid the user (loading component, better focus/interaction states, etc.)
- Develop robust layout components with spacing patterns (grid gap controlled)
- Split components into more meaningful folder structures (depending on responsibility)
- Use semantic tokens (e.g., text-foreground, bg-surface, spacing-lg, etc.) to ensure consistent theming
- Write more focused, descriptive commit messages to make the Git history more understandable