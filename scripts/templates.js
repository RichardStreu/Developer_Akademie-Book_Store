function getBookContainerTemplate(index, commentContent) {
  return `<div class="book-container ${books[index].genre}">
            <div class="bookBox">
              <div onclick="likeThisBook(${index})" class="heartBox"><img id="${"likeHeart" + index}" src="./assets/icons/heart-unfilled.png" alt=""></div>
              <div class="bookImageBox">
                <img class="bookImage" src="./assets/img/krieg_und_frieden-leo_tolstoi.jpg" alt="">
              </div>
              <div class="book-content">
                <div class="book-content-info">
                  <div class="regText bookAuthorName">${books[index].author}</div>
                  <div class="regText bookTitle"><b>${books[index].name}</b></div>
                  <div class="regText bookPubYear">EJ: <span>${books[index].publishedYear}</span></div>
                  <div class="regText bookGenre">Genre: <span>${books[index].genre}</span></div>
                  <div class="bookPrice"><span>${books[index].price.toFixed(2)}</span>€</div>
                </div>
                <div class="book-content-likes">
                  <div class="regText bookLikes"><span id="${"bookLikesBook" + index}">${books[index].likes}</span> Lesern gefällt dieses Buch</div>
                  <div onclick="showComments(${index})" id="${"showCommentButton" + index}" class="bookToComment"><span>Bewertungen ansehen</span><img class="commentArrow" id="${"commentArrow" + index}" src="./assets/icons/arrow.png" alt=""></div>
                </div>
              </div>
            </div>

            <div id="${"commentContainer" + index}" class="commentContainer d-none">
              
              <div class="commentBoxUpperPart">
                <p><b>Bewerte jetzt dieses Buch</b></p>
                <div class="commentInputArea">
                  <input id="${"inputName" + index}" class="input-name" type="text" placeholder="Dein Name"></inpu>
                  <input id="${"inputComment" + index}" class="input-comment" type="text" placeholder="Deine Bewertung"></inpu>
                </div>
                <button onclick="addComment(${index})" id="${"commentSendButton" + index}" class="comment-send-button">Bewertung abgeben</button>
              </div>

              <div id="${"commentBoxLowerPart" + index}" class="commentBoxLowerPart">
              ${commentContent}
              </div>

            </div>
          <div class="divider"></div>
          </div>`;
}

function getBookCommentsTemplate(autor, comment) {
  return `<div class="commentContent">
            <p><b>${autor}</b></p>
            <p>${comment}</p>
          </div>`;
}
