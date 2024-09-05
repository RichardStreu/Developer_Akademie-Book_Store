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

function renderBookCommentsAfterNewComment(currentBookIndex) {
  let commentBoxLowerPartRef = document.getElementById(
    `${"commentBoxLowerPart" + currentBookIndex}`
  );
  commentBoxLowerPartRef.innerHTML = "";
  for (
    let commentIndex = 0;
    commentIndex < books[currentBookIndex].comments.length;
    commentIndex++
  ) {
    let commentAutor = books[currentBookIndex].comments[commentIndex].name;
    let comment = books[currentBookIndex].comments[commentIndex].comment;
    commentBoxLowerPartRef.innerHTML += getBookCommentsTemplate(
      commentAutor,
      comment
    );
  }
}

function renderDividerTemplate() {
  getDividerTemplate();
}

// show comment section

function showComments(index) {
  let currentCommentContainerRef = document.getElementById(
    `${"commentContainer" + index}`
  );
  currentCommentContainerRef.classList.toggle("d-none");

  let currentCommentArrow = document.getElementById(
    `${"commentArrow" + index}`
  );
  currentCommentArrow.classList.toggle("commentArrowRotate");

  let showCommentButtonRef = document.getElementById(
    `${"showCommentButton" + index}`
  );
  showCommentButtonRef.classList.toggle("commentBackColorGray");
}

// save comment and assign to comments

function addComment(index) {
  let name = document.getElementById(`${"inputName" + index}`).value;
  let comment = document.getElementById(`${"inputComment" + index}`).value;
  if (name == "") {
    window.alert("Bitte gib deinen Namen an.");
    return;
  }
  if (comment == "") {
    window.alert("Bitte schreibe einen Kommentar.");
    return;
  }
  let newComment = {
    name: name,
    comment: comment,
  };

  books[index].comments.unshift(newComment);

  renderBookCommentsAfterNewComment(index);
  setDataToLocalStorage();
}

// functions for likes

function initLikeHeart(index) {
  let currentLikeHeartRef = document.getElementById(`${"likeHeart" + index}`);

  if (books[index].liked == true) {
    currentLikeHeartRef.src = "./assets/icons/heart-filled.png";
  } else {
    currentLikeHeartRef.src = "./assets/icons/heart-unfilled.png";
  }
}

function likeThisBook(index) {
  let currentLikeHeartRef = document.getElementById(`${"likeHeart" + index}`);
  let currentBookLikesRef = document.getElementById(
    `${"bookLikesBook" + index}`
  );
  let currentLikeAmount = books[index].likes;

  if (books[index].liked == false) {
    currentLikeHeartRef.src = "./assets/icons/heart-filled.png";
    books[index].liked = true;
    currentBookLikesRef.innerHTML = currentLikeAmount + 1;
    books[index].likes++;
  } else {
    currentLikeHeartRef.src = "./assets/icons/heart-unfilled.png";
    books[index].liked = false;
    currentBookLikesRef.innerHTML = currentLikeAmount - 1;
    books[index].likes--;
  }

  setDataToLocalStorage();
}

// ########## init Rendering ############

function initialRendering() {
  getDataFromLocalStorage();

  let bookWrapperRef = document.getElementById("bookWrapper");

  for (let index = 0; index < books.length; index++) {
    bookWrapperRef.innerHTML += renderBookContainerTemplate(index);
    bookWrapperRef.innerHTML += getDividerTemplate();
    initLikeHeart(index);
  }
}

initialRendering();

// funktions to filter the books

function getAllGenres(array) {
  let allGenres = [];
  for (let index = 0; index < array.length; index++) {
    if (!allGenres.includes(books[index].genre)) {
      allGenres.push(books[index].genre);
    }
  }
  return allGenres.sort();
}

function showFilterMenu() {
  let dropdownFilterButtonRef = document.getElementById("dropdownFilterButton");
  let filterMenuDropdownRef = document.getElementById("filterMenuDropdown");

  filterMenuDropdownRef.classList.toggle("d-none");
  dropdownFilterButtonRef.classList.toggle("commentBackColorGray");
}

function assignGenresToFilter(allgenres) {
  let filterMenuDropdownRef = document.getElementById("filterMenuDropdown");

  for (let index = 0; index < allgenres.length; index++) {
    let genre = allgenres[index];
    let newListItem = document.createElement("li");
    newListItem.innerHTML = genre;
    newListItem.addEventListener("click", function () {
      filterBooksByGenre(genre);
    });
    filterMenuDropdownRef.appendChild(newListItem);
  }
}

assignGenresToFilter(getAllGenres(books));

function filterBooksByGenre(genre) {
  console.log(genre);
}
