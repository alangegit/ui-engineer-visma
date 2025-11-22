# Senior UI Engineer

As a part of the recruitment process we ask you to complete a practical [...]

## What's the task?

Imagine that we're in a hiring process, and the applicant has to fill out [...]

### Considerations

I used the vite CLI to build a react app with TypeScript and then installed TailwindCSS.

Comparing the provided solution to the task, my initial thought was to scope the task so that it was achievable within the time constraint, whilst still delivering a working solution.

There's something off- with the provided solution. It's trying to do too much, without providing the right guidance. Why should a person sign up, if they don't meet the requirements? At what stage are we in, in the hiring process? Having just read Shape Up, I'm inspired by the idea of scoping ruthlessly create momentum. 

Some of the UI elements are irrelevant in the scenario of a finding an English speaking applicant who lives in Europe and can start within the next 90 days. For a more streamlined solution within scope, I would discard the following elements:

- Password input: Creating a profile isn't a core necessity for sending an application.
- Substantial dropdown: We are only interested in applicants living in Europe.
- Language checkboxes: We are only interested in English speaking applicants.
- Date input: We are only interested in applicants who can start witin the next 90 days.
- Reset button: The simplicity of the solution, does not IMO warrant a reset button.

+ Adding an input so that the application can as a minimum refer to a profile, such as linkedin

Now that we've removed +50% of the UI, we still need to aid the applicant and gather relevant data via the form. Since the critera (Europe, English speaking, 90 days) sets a hard cut off and for the sake of everyone, we could instead allude to these in the start and ensure that the applicant signs off, prior to submitting. That way nobody wastes their time.

## Focus areas

As we're looking for someone to work in a design system team, your core focus [...]

## Expectations

We expect you to use no more than three hours on this task [...]

### Considerations

If I had 2x the time to finish this assignment I would:

- Split components into more meaningful folder structures (depending on the amount, split into meaningful folders)
- Develop robust layout components with spacing patterns (grid gap controlled)
- Ensure better responsive design (mobile experience, full button)
- Work with semantic colours from a unified source (text-foreground, e.g.)
- Enhance components by developing helpful functionality (autocomplete, error handling, feedback)
- Spend more time tweaking the design and to aid the user (spinners, better focus states, etc.)
- Add variants to some components to handle different use cases (.e.g input validation messages)
- Rework copy to better suit the audience 