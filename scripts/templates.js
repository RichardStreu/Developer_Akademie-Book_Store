function getBookContainerTemplate(index, commentContent) {
  return `<div class="book-container">
            <div class="bookBox">
            
            </div>

            <div id="${"commentContainer" + index}" class="commentContainer">
              
              <div class="commentBoxUpperPart">
                <p><b>Bewerte jetzt dieses Buch</b></p>
                <div class="commentInputArea">
                  <input id="${"inputName" + index}" class="input-name" type="text" placeholder="Dein Name"></inpu>
                  <input id="${"inputComment" + index}" class="input-comment" type="text" placeholder="Deine Bewertung"></inpu>
                </div>
                <button onclick="addComment(${index})" id="${"commentSendButton" + index}" class="comment-send-button">Bewertung abgeben</button>
              </div>

              <div class="commentBoxLowerPart">
              ${commentContent}
              </div>

            </div>

          </div>`;
}

function getBookCommentsTemplate(autor, comment) {
  return `<div class="commentContent">
            <p><b>${autor}</b></p>
            <p>${comment}</p>
          </div>`;
}

function getDividerTemplate() {
  return `<div class="divider"></div>`;
}
