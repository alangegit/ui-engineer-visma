# Senior UI Engineer

As a part of the recruitment process we ask you to complete a practical development challenge. The challenge consists of two parts:

1. You solve the provided task.
2. We host a session where you present your solution to us, and we all have a nice talk about it.

## "solve" — what does that mean?

We suggest that you fork the repo to your personal Github profile and show off the solution. However, if you want to download the code and create your solution in another environment (ie. CodePen, CodeSandbox etc.) that is also acceptable.

Your solution is the foundation of our talk, not something that we do a technical review of — think of this as a session where we ask _why_ you've chosen the approach you have, and where we have a frank and open conversation.

## What's the task?

Imagine that we're in a hiring process, and the applicant has to fill out some personal details. The person we're looking for:

- lives in Europe
- is fluent in English
- can start within the next 90 days

We've created a very, very basic HTML form and some CSS and JavaScript for styling and functionality. (The pre-filled values and feedback messages are only there for the sake of example, so that you don't have to "invent" these.)

Your task is to take this and convert it into a React/Typescript application that validates the user input and provides a feedback response (success or failure).

### Considerations

Comparing the provided solution to the task, my initial thought is to scope the task so that it is achievable within the time constraint, whilst still delivering a solid solution.

There's something off- with the provided solution. It's trying to do too much, without providing the right guidance. Why should a person sign up, if they don't meet the requirements? At what stage are we in, in the hiring process? 

Some of the UI elements are irrelevant in the scenario of a finding an English speaking applicant who lives in Europe and can start within the next 90 days. For a more streamlined solution, I would remove the following elements:

> Password input: There is no indication of the applicant creating a profile.
> Massive dropdown: We are solely interested in a applicant living in Europe.
> Language checkboxes: We are solely interested in an English speaking applicant.
> Date input: We are only interested in a person who can start witin the next 90 days.
> Rest button: The simplicity of the solution, does not IMO warrant a reset button.

Now that we've removed +50% of the UI, we still need to aid the applicant and gather relevant data in the form. Since our criteria set a hard cut off and for the sake of everyone, we should allude to these in the start and ensure that the applicant signs off, prior to submitting. By guiding the user, we will only need a failure feedback response, if the data doesn't make it through and the issue is of a technical nature.

So the revised UI would consist of a title, explanatory text, name inputs, email input and a checkbox that when all filled, enables a submission. 

## Focus areas

As we're looking for someone to work in a design system team, your core focus should be on:

- component structure
- scalability and developer experience
- accessibility and usability
- code quality

This also means that not only are you free to question design decisions, it's something we expect you to do.

## Expectations

We expect you to use no more than three hours on this task, and we know that it will probably be a stretch to get done on time, but that's by design — we want you to focus on what _you_ think is the most important part, and then spend some time thinking about whatever is left.

Also, please send us a link to your solution two days in advance of the interview, so that we have time to look it over and prepare questions.

## Questions

If you have any questions or concerns please simply ask.
