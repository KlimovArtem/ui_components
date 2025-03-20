/*
Поведение нативного элемента <select> с мышью:

      _ щелчек в любом месте элемента <- закрыть меню  <----фокус на элемент <-
		 |                                                   |                     |
			-> открываетсе выпадающее меню -> щелчек вне меню -         --------------
         фокус устанавливается на                                 |
				 выбранный элемент в меню                                 |
					|                                                       |
          -> щелчек по пункту меню                                |
						 (при наведении                                       |
						  пункт выделяется цветом)                            |
							|                                                   |
               -> значение пункта меню                            |
							    устанавливается как -------------------- -- - ---
	                 значение элемента
														  				
*/   

document.querySelectorAll(".select").forEach((select) => {
	/* инициализаци элементов  */
	const selectInput = select.querySelector(".select__input"),
		selectButton = select.querySelector(".select__button"),
		selectOptions = select.querySelector(".select__options");
	
	 let selectedOption = selectOptions.firstElementChild;
	
	
	
	/* открытие/закрытие выпадающего меню по клику на кнопку */
	selectButton.addEventListener("click", (event) => {
		if (selectOptions.style.visibility === "hidden") {
			selectOptions.style.visibility = "visible";
			selectedOption.focus();
		} else {
			selectOptions.style.visibility = "hidden";
			selectInput.focus();
		}
	});
	
	
/* открытие/закрытие выпадающего меню по клику на input */
	selectInput.addEventListener("click", (event) => {
		if (selectOptions.style.visibility === "hidden") {
			selectOptions.style.visibility = "visible";
			selectInput.blur();
			selectedOption.focus();
		} else {
			selectOptions.style.visibility = "hidden";
			selectInput.focus();
		}
	});

	
	selectOptions.childNodes.forEach(option => {

	/* установка в качестве значения селекта содержимого элемента списка по которому  кликнули */
		option.addEventListener("click", (event) => {
			selectInput.value = option.innerText;
			selectedOption = option;
			selectOptions.style.visibility = "hidden";
			selectInput.focus();
		});
	});
	
	
 /*  закрыть выпадающее меню если клик вне меню */
	document.addEventListener("click", event => {
		 if (!select.contains(event.target)){
     selectOptions.style.visibility = "hidden";
   };
	});
	
	/* выделение обекта установленного как выбранного */
	
});
