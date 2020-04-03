
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;

  /*
  * we're padding the thing we want to replace to ensure we are capturing
  * just the word and not parts of other words e.g we want `he` and not
  * the `he` part of t`he`
  */
  newSentence = newSentence.replace(' the ', "<span style='color: purple;'> the </span>");

  newSentence = newSentence.replace(' his ', ' her ');

  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;
  newSentence = newSentence.replace(' Old Dudley folded into the chair he was gradually molding to his own shape and looked out the window fifteen feet away into another window framed by blackened red brick. ', "<span style='color: purple;'> Old Dudley folded into the chair he was gradually molding to his own shape and looked out the window fifteen feet away into another window framed by blackened red brick. </span>");
  newSentence = newSentence.toUpperCase();

  // modify the sentence

  output.innerHTML = newSentence;
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;
newSentence = newSentence.replace(' window ', "<span style='font-weight:bold; font-size:20pt;'> window </span>");
  // modify the sentence

  output.innerHTML = newSentence;
}

function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;
  newSentence = newSentence.replace(' red ', "<span style='color: red; font-size:30pt;'> red </span>");
newSentence = newSentence.slice(20);
  // modify the sentence

  output.innerHTML = newSentence;
}



let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

// also comput when the page loads
variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);
