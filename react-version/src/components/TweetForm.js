import React from 'react';

function TweetForm() {
  const message = "What are you humming about"

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section class="newtweet">
    <form method="post" action="/tweets" class="newtweet__form" onSubmit={handleSubmit}>
      <textarea class="form__textarea" name="text" placeholder={message}></textarea>
      <input type="submit" value="Tweet" class="form__input" />
      <span class="form__counter">140</span>
    </form>
  </section>
  );
}

export default TweetForm;