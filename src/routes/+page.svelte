<script lang="ts">
  import { onMount } from "svelte";
  import { getCountryFromBrowserSettings } from "$lib/utils/detectCountry";
  import countriesOfTheWorld from "../data/countries";
  import worldStatusQuestions from "../data/worldWealthStatus";

  // Use a reactive statement to determine the initial message
  let detectedCountryName: string | null = null;
  let selectedCountryCode: string | null = null;

  // Flatten the nested object into a single array for easier iteration
  const allQuestions = Object.values(worldStatusQuestions).flatMap(
    (category) => category.questions
  );

  // State variables
  let currentQuestionIndex = 0;
  let totalScore = 0;
  let quizFinished = false;
  let percentileResult = "";

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
      percentileResult = `Top ${101 - totalScore}%`;
    }
  }

  onMount(() => {
    const detectedCountry = getCountryFromBrowserSettings();
    if (detectedCountry) {
      detectedCountryName = detectedCountry.name;
      selectedCountryCode = detectedCountry.code;
    }
  });

  $: displayMessage = detectedCountryName
    ? `${detectedCountryName}`
    : `Choose your country:`;

  // A helper to get the country name from its code
  function getCountryNameByCode(code: string | null): string {
    if (!code) return "Choose your country:";
    const foundCountry = countriesOfTheWorld.find((c) => c.code === code);
    return foundCountry ? foundCountry.name : "Choose your country:";
  }
</script>

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
      <button
        on:click={() => (currentQuestionIndex = 0)}
        disabled={!quizFinished}>Restart Quiz</button
      >
    </div>
  </div>
</div>

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
    margin: 0 0.5rem;
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
</style>
