# Transcript Technical Test Challenge - Siobhan McKenzie

## Overview

In this Challenge, I've considered various aspects including accessibility, performance, and compliance with the design. Here are some key points:

- **Accessibility**: Made the Transcript block items tabbable with the AudioComponent having priority to enable navigation for keyboard users.
- **Performance**: Focused on optimising the React performance, have not implemented certain production-ready features such as caching.
- **Design Compliance**: Tried to adhere closely to the design specifications provided, with some exceptions noted that i'd request clarification on from Design.

## Learning

This technical test was used as an opportunity to learn and implement the TanStack Router, which i've never used before.

## Commits and Code Management

- **Conventional Commits**: Followed conventional commit messages to make the commit history clear and structured.
- **Rewindable Commits**: Ensured that commits are small and focused, making it easier for reviewers to go through the pull request commit by commit if desired.

## Challenge Setup and Dependencies

Started with a Challenge vite/ts scaffold from an online repo, and I had to perform several dependency upgrades and remove unnecessary dependancies during the Challenge.

## Comments

Left a small number of inline comments to ease the review process. Typically, such comments would not be included.

## Design Clarifications

There are a few design elements that were not fully implemented due to time-boxing as the Challenge was not intended to be pixel-perfect (MVP). I would normally seek clarification from the design team if certain elements were intended as part of the design, and look into implementation options - if there were unknowns, i'd discuss time-boxing investigation and whether a 90% solution is acceptable.

- **Highlight Colour**: In the design, the highlight colour is smoothly wrapped around the text. In my implementation I have used a highlight approach that results in square corners when text wraps onto two lines.
- **Multi-line Transcripts Indentation**: Did not comply with the indentation in the design for multi-line transcripts - subsequent lines in multi-line transcript block are not aligned as I used padding in my css.
- **Scrollbar Design**: It's unclear if a specific scrollbar design was required, or if the scrollbar design in the figma was simply built-in. I would seek further clarification around whether the native scrollbar is acceptable.
- **Scrolling behaviour**: The scrolling behaviour is not perfect - it doesn't always track to the correct location, and lags. If I continued working on this, I would look at improving the performance of scrolling. I would also look at implementing an intersection observer for performacne (check whether an element if already in the viewport before running the scrolling). I would also consider using a library to improve UX.

## Running the Challenge

Run the Challenge with `npm start` - it will open on port 3000.

## Urls

These URLs are provided, as per the acceptance criteria. There is a 404 fallback for non-implemented urls, and a basic loading skeleton on the transcripts page.

http://localhost:3000/ - base home page
http://localhost:3000/transcripts/so164652-c0ef-4991-b7cc-474cc0ea911
http://localhost:3000/transcripts/bk168068-93e8-4bb6-b762-dbc57d172111
http://localhost:3000/transcripts/gg1aa17c-0a31-495c-8e9d-6179de3d3111
