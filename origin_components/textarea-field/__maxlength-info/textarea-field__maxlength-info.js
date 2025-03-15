document.querySelectorAll(".textarea-field").forEach(textarea => {
  const
  textareaInput = textarea.querySelector(".textarea-field__input"),
  maxlengthInfo = document.querySelector(".textarea-field__maxlength-info");
  
  textareaInput.addEventListener("input", event => {
    if (textareaInput.hasAttribute("maxlength")) {
      maxlengthInfo.innerText = `${textareaInput.value.length}/${textareaInput.maxLength}`;
    };
  });
});