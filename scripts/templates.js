function getBookContainerTemplate(index, commentContent) {
  return `<div class="book-container">
            <div class="bookBox">
            
            </div>

            <div class="commentContainer">
              
              <div class="commentBoxUpperPart">
                <p><b>Bewerte jetzt dieses Buch</b></p>
                <div class="commentInputArea">
                  <input class="input-name" type="text" placeholder="Dein Name"></inpu>
                  <input class="input-comment" type="text" placeholder="Deine Bewertung"></inpu>
                </div>
                <button id="commentSendButton" class="comment-send-button">Bewertung abgeben</button>
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
