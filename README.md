# Senior UI Engineer

As a part of the recruitment process we ask you to complete a practical [...]

## What's the task?

Imagine that we're in a hiring process, and the applicant has to fill out [...]

### Considerations

I used the vite CLI to build a react app with TypeScript and installed TailwindCSS.

Comparing the provided solution to the task, my initial thought was to scope the task so that it was achievable within the time constraint, whilst still delivering a solid solution.

There's something off- with the provided solution. It's trying to do too much, without providing the right guidance. Why should a person sign up, if they don't meet the requirements? At what stage are we in, in the hiring process? *Having just read Shape Up, I'm inspired by the idea of a scope hammer:

Some of the UI elements are irrelevant in the scenario of a finding an English speaking applicant who lives in Europe and can start within the next 90 days. For a more streamlined solution within scope, I would discard the following elements:

- Password input: Creating a profile isn't a core necessity for sending an application.
- Substantial dropdown: We are only interested in applicants living in Europe.
- Language checkboxes: We are only interested in English speaking applicants.
- Date input: We are only interested in applicants who can start witin the next 90 days.
- Reset button: The simplicity of the solution, does not IMO warrant a reset button.

+ Adding an input so that the application can as a minimum refer to a profile, such as linkedin, etc.

Now that we've removed +50% of the UI, we still need to aid the applicant and gather relevant data via the form. Since our criteria set a hard cut off and for the sake of everyone, we could instead allude to these in the start and ensure that the applicant signs off, prior to submitting.

## Focus areas

As we're looking for someone to work in a design system team, your core focus [...]

## Expectations

We expect you to use no more than three hours on this task [...]

### Considerations

If I had 2x the time to finish this assignment I would:

- Split components into more meaningful folder structures
- Develop robust layout compopnents with spacing patterns
- Spend more time tweaking the design and adding feedback
- Enhance the user experience by developing helpful functionality
- Rework wording to better suit the audience
- Add variants to some of the components to handle different use cases