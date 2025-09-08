<script lang="ts">
  import { onMount } from "svelte";
  import "shareon/css"; // most bundlers will transpile this CSS

  import { getCountryFromBrowserSettings } from "$lib/utils/detectCountry";
  import { getTranslation } from "$lib/utils/i18n";
  import countriesOfTheWorld from "../data/countries";
  import worldStatusQuestions from "../data/translations/en/worldStatusQuestions";

  const country = getCountryFromBrowserSettings();
  const lang = navigator.language; // e.g. "de-DE" or "en-GB"
  const worldStatus = getTranslation(lang);

  // Use a reactive statement to determine the initial message
  let detectedCountryName: string | null = null;
  let selectedCountryCode: string | null = null;
  let url = "https://www.worldlyworth.org/";

  // Flatten the nested object into a single array for easier iteration
  $: allQuestions = Object.values(worldStatus).flatMap(
    (category) => category.questions
  );

  // State variables
  let currentQuestionIndex = 0;
  let totalScore = 0;
  let quizFinished = false;
  let percentileResult = "";

  // Copy URL to clipboard function
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  // A function to handle the user's answer
  function handleAnswer(isYes: boolean) {
    if (quizFinished) return;

    const currentQuestion = allQuestions[currentQuestionIndex];
    currentQuestion.answer = isYes;

    if (isYes) {
      totalScore += currentQuestion.points;
    }

    if (currentQuestionIndex < allQuestions.length - 1) {
      currentQuestionIndex += 1;
    } else {
      quizFinished = true;
      // Calculate the percentile result
      totalScore < 100
        ? (percentileResult = `Top ${101 - totalScore}%`)
        : totalScore === 100
          ? (percentileResult = "Top 1%")
          : (percentileResult = "Under 1%");
    }
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    quizFinished = false;
    percentileResult = "";
    // Resetting the answers in the original array is good practice too
    allQuestions.forEach((q) => (q.answer = false));
  }

  onMount(async () => {
    const detectedCountry = getCountryFromBrowserSettings();
    if (detectedCountry) {
      detectedCountryName = detectedCountry.name;
      selectedCountryCode = detectedCountry.code;
    }

    const { shareon } = await import("shareon");
    shareon.init();
  });

  $: displayMessage = detectedCountryName
    ? `${detectedCountryName}`
    : `Choose your country:`;
</script>

<div class="sphere-overlay">
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>globe</title>
    <path
      d="M22.658 10.988h5.172c0.693 1.541 1.107 3.229 1.178 5.012h-5.934c-0.025-1.884-0.181-3.544-0.416-5.012zM20.398 3.896c2.967 1.153 5.402 3.335 6.928 6.090h-4.836c-0.549-2.805-1.383-4.799-2.092-6.090zM16.068 9.986v-6.996c1.066 0.047 2.102 0.216 3.092 0.493 0.75 1.263 1.719 3.372 2.33 6.503h-5.422zM9.489 22.014c-0.234-1.469-0.396-3.119-0.421-5.012h5.998v5.012h-5.577zM9.479 10.988h5.587v5.012h-6.004c0.025-1.886 0.183-3.543 0.417-5.012zM11.988 3.461c0.987-0.266 2.015-0.435 3.078-0.469v6.994h-5.422c0.615-3.148 1.591-5.265 2.344-6.525zM3.661 9.986c1.551-2.8 4.062-4.993 7.096-6.131-0.715 1.29-1.559 3.295-2.114 6.131h-4.982zM8.060 16h-6.060c0.066-1.781 0.467-3.474 1.158-5.012h5.316c-0.233 1.469-0.39 3.128-0.414 5.012zM8.487 22.014h-5.29c-0.694-1.543-1.139-3.224-1.204-5.012h6.071c0.024 1.893 0.188 3.541 0.423 5.012zM8.651 23.016c0.559 2.864 1.416 4.867 2.134 6.142-3.045-1.133-5.557-3.335-7.11-6.142h4.976zM15.066 23.016v6.994c-1.052-0.033-2.067-0.199-3.045-0.46-0.755-1.236-1.736-3.363-2.356-6.534h5.401zM21.471 23.016c-0.617 3.152-1.592 5.271-2.344 6.512-0.979 0.271-2.006 0.418-3.059 0.465v-6.977h5.403zM16.068 17.002h5.998c-0.023 1.893-0.188 3.542-0.422 5.012h-5.576v-5.012zM22.072 16h-6.004v-5.012h5.586c0.235 1.469 0.393 3.126 0.418 5.012zM23.070 17.002h5.926c-0.066 1.787-0.506 3.468-1.197 5.012h-5.152c0.234-1.471 0.398-3.119 0.423-5.012zM27.318 23.016c-1.521 2.766-3.967 4.949-6.947 6.1 0.715-1.276 1.561-3.266 2.113-6.1h4.834z"
    ></path>
  </svg>
</div>

<main>
  <div>
    <h1>
      {#if detectedCountryName}
        {`I live in the ${displayMessage}`}
      {:else}
        Choose your country:
        <select class="country-select" bind:value={selectedCountryCode}>
          <option value="">{displayMessage}</option>
          {#each countriesOfTheWorld as country}
            <option value={country.code}>{country.name}</option>
          {/each}
        </select>
      {/if}
    </h1>

    <div class="quiz-container">
      {#if !quizFinished}
        <div class="question-card">
          <h2>{allQuestions[currentQuestionIndex].question}</h2>

          <div class="buttons">
            <button class="yes-button" on:click={() => handleAnswer(true)}
              >Yes</button
            >
            <button class="no-button" on:click={() => handleAnswer(false)}
              >No</button
            >
          </div>
          <p>Question {currentQuestionIndex + 1} of {allQuestions.length}</p>
        </div>
      {:else}
        <div class="results">
          <h2>Quiz Complete!</h2>
          <p>Your total score is: <strong>{totalScore}</strong></p>
          <p>
            This puts you in the: <strong>{percentileResult}</strong> of the world's
            population.
          </p>
        </div>
      {/if}
      <div class="quiz-navigation">
        <button on:click={() => restartQuiz()} disabled={!quizFinished}
          >Restart Quiz</button
        >
      </div>
    </div>
  </div>
  <div class="shareon">
    <a
      class="facebook"
      href="https://www.facebook.com/sharer/sharer.php?u={url}"
      target="_blank"
      rel="noopener noreferrer">Share on Facebook</a
    >
    <a
      class="linkedin"
      href="https://www.linkedin.com/sharing/share-offsite/?url={url}"
      target="_blank"
      rel="noopener noreferrer">Share on LinkedIn</a
    >
    <a
      class="pinterest"
      href="https://www.pinterest.com/pin/create/button/?url={url}"
      target="_blank"
      rel="noopener noreferrer">Share on Pinterest</a
    >
    <a
      class="twitter"
      href="https://twitter.com/intent/tweet?url={url}"
      target="_blank"
      rel="noopener noreferrer">Share on Twitter</a
    >
    <button
      class="copy-url"
      type="button"
      on:click={() => copyToClipboard(url)}
    >
      Copy URL
    </button>
    <a
      class="whatsapp"
      style="background-color: green;"
      href="https://api.whatsapp.com/send?text={url}"
      target="_blank"
      rel="noopener noreferrer">Share on WhatsApp</a
    >
  </div>
</main>

<style lang="scss">
  $text-color: #333;
  $bg-color: #f9f9f9;
  $button-bg: #007bff;
  $button-text-color: #fff;
  $button-disabled-bg: #ccc;
  $button-disabled-text-color: #666;
  $h1-text-color: #ffffff;
  $h1-bg-color: #0e6612;

  @media (prefers-color-scheme: dark) {
    $text-color: #f0f0f0;
    $bg-color: #1e1e1e;
    $button-bg: #1a73e8;
    $button-text-color: #fff;
    $button-disabled-bg: #555;
    $button-disabled-text-color: #aaa;
    $h1-text-color: #ff6f61;
    $h1-bg-color: #3b3b3b;
  }

  * {
    font-family: "Roboto", sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $bg-color;
    color: $text-color;
    min-height: 100vmin;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 0;
    padding: 2rem;
    color: $h1-text-color;
    background-color: $h1-bg-color;
  }

  .country-select {
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    background-color: $h1-bg-color;
    color: $h1-text-color;
    border: 1px solid transparent;
    border-radius: 5px;
    appearance: none;
    position: relative;
    width: 300px;
  }

  .country-select option {
    background-color: $bg-color;
    color: $text-color;
  }

  .quiz-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .quiz-container button,
  .quiz-navigation button {
    margin: 0.5rem 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: $bg-color 0.3s;
    background-color: $button-bg;
    color: $button-text-color;
  }

  .quiz-navigation button:disabled {
    background-color: $button-disabled-bg;
    color: $button-disabled-text-color;
    cursor: not-allowed;
  }

  .sphere-overlay {
    /* Position the SVG over the entire viewport */
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center the element */
    width: 100vh; /* Make the size responsive to the viewport height */
    height: 100vh;
    pointer-events: none; /* Prevents the overlay from blocking clicks on elements beneath it */
    z-index: 100; /* Place the SVG on top of everything else */
    mix-blend-mode: soft-light;
  }

  /* Optional: Add a subtle animation */
  .sphere-overlay svg {
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotateY(0deg) skew(30deg);
    }
    to {
      transform: rotateY(189deg) skew(-150deg);
    }
  }

  .shareon {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
</style>
