// get and set data from / to local storage
function getDataFromLocalStorage() {
  let dataFromStorage = JSON.parse(localStorage.getItem("books"));
  if (dataFromStorage != null) {
    books = dataFromStorage;
  }
}

function setDataToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// initial rendering

function initialRendering() {
  getDataFromLocalStorage();

  let bookWrapperRef = document.getElementById("bookWrapper");

  for (let index = 0; index < books.length; index++) {
    bookWrapperRef.innerHTML += renderBookContainerTemplate(index);
    bookWrapperRef.innerHTML += getDividerTemplate();
  }
}

// render templates

function renderBookContainerTemplate(index) {
  let commentContent = renderBookComments(index);
  return getBookContainerTemplate(index, commentContent);
}

function renderBookComments(currentBookIndex) {
  let commentBoxLowerPart = "";
  for (
    let commentIndex = 0;
    commentIndex < books[currentBookIndex].comments.length;
    commentIndex++
  ) {
    let commentAutor = books[currentBookIndex].comments[commentIndex].name;
    let comment = books[currentBookIndex].comments[commentIndex].comment;
    commentBoxLowerPart += getBookCommentsTemplate(commentAutor, comment);
  }
  return commentBoxLowerPart;
}

function renderDividerTemplate() {
  getDividerTemplate();
}


initialRendering();
