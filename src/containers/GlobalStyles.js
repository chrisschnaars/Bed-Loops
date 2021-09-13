import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --border-radius-circle: 100%;
    --border-radius-default: 0.25rem;
    --border-radius-pill: 20rem;
    --box-shadow-hover: 0 8px 24px -8px hsla(240, 54%, 20%, 0.75);
    --color-white: hsla(0, 0%, 100%, 1);
    --color-black:hsla(240, 7%, 8%, 1);
    --color-gray100: hsla(240, 7%, 19%, 1);
    --color-gray200: hsla(240, 8%, 23%, 1);
    --color-gray700: hsla(240, 8%, 68%, 1);
    --color-gray900: hsla(240, 12%, 96%, 1);
    --color-purple: hsla(240, 100%, 68%, 1);
    --color-violet: hsla(255, 100%, 69%, 1);
    --color-cyan: hsla(190, 100%, 68%, 1);
    --font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
    --font-size-sm: 1rem;
    --font-size-md: 1.125rem;
    --font-size-lg: 1.375rem;
    --font-size-xl: 2rem;
    --font-weight-normal: 400;
    --font-weight-bold: 500;
    --gradient-primary: linear-gradient(to right, var(--color-purple), var(--color-violet));
    --gradient-secondary: linear-gradient(to right, var(--color-purple) 70%, var(--color-violet));
    --transition-speed-default: 200ms ease-out;
  }

  body[data-theme='dark'] {
    --color-text-primary: var(--color-white);
    --color-text-secondary: var(--color-gray700);
    --color-background-primary: var(--color-gray100);
    --color-background-secondary: var(--color-gray200);
    --color-background-elevation: hsla(240, 100%, 90%, 0.06);
    --color-action-default: var(--gradient-primary);
    --color-action-default-hover: var(--gradient-secondary);
    --color-action-secondary: var(--color-gray40);
    --color-icon-action-default: var(--color-text-primary);
    --color-icon-action-default-hover: var(--color-cyan);

  }

  body[data-theme='light'] {
    --color-text-primary: var(--color-black);
    --color-text-secondary: var(--color-gray700);
    --color-background-primary: var(--color-white);
    --color-background-secondary: var(--color-gray900);
    --color-background-elevation: hsla(240, 4%, 90%, 0.40);
    --color-action-default: var(--gradient-primary);
    --color-action-default-hover: var(--gradient-secondary);
    --color-action-secondary: var(--color-gray40);
    --color-icon-action-default: var(--color-text-primary);
    --color-icon-action-default-hover: var(--color-purple);
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    background: var(--color-background-primary);
    color: var(--color-text-primary);
    font-family: var(--font-family);
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  .waveform-container {
                max-width: 100%;
                width: 800px;
            }

            .waveform-bg {
                clip-path: url("#waveform-mask");
                fill: lightgray;
            }

            .waveform-progress {
                clip-path: url("#waveform-mask");
                fill: #44bc75;
            }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
     scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
