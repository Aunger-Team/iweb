function htmlToElement(t){const e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild}function isJa(){return"ja"===navigator.language}const linkElem1=htmlToElement(`
  <link rel="preconnect" href="https://fonts.gstatic.com">
`),linkElem2=htmlToElement(`
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap" rel="stylesheet">
`);document.getElementsByTagName("head")[0].appendChild(linkElem1),document.getElementsByTagName("head")[0].appendChild(linkElem2);const ANSWER_SLOT="answerSlot",DIALOG_SLOT="dialogSlot",QUESTION_SLOT="questionSlot",ANSWER_PADDING="80px 32px 28px",INFO_WIDTH="310px",BUTTON_HOVER_COLOR="#e5dada",COLORS={blue:"#DBF0F0",blueHover:"#53C0C0",gray:"#F2F2F2",grayHover:"#474747",green:"#D8F2E2",greenHover:"#3AC06F",purple:"#E7E7FF",purpleHover:"#6461E0",red:"#FFE5DD",redHover:"#F97669",yellow:"#FFF2CF",yellowHover:"#FFA21A",primary:"#474747"},SHARED_STYLES=`
  .answerBubble, .questionBubble {
    align-self: flex-start;
    border-radius: 24px;
    color: ${COLORS.primary};
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    padding: 12px 16px;
    word-break: break-word;
  }

  .backButton {
    height: 24px;
    width: 24px;
  }

  .backButton:hover {
    cursor: pointer;
  }

  .backRow {
    align-items: center;
    background-color: white;
    box-sizing: border-box;
    color: ${COLORS.primary};
    display: flex;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 24px;
    justify-content: space-between;
    left: 0;
    line-height: normal;
    padding: 28px 22px 0px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    -webkit-tap-highlight-color: transparent;
  }

  .button {
    align-items: center;
    background-color: #F5F1F1;
    border-radius: 24px;
    border-style: none;
    color: ${COLORS.primary};
    column-gap: 8px;
    display: flex;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 16px;
    justify-content: center;
    line-height: normal;
    outline: none;
    padding: 12px 16px;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
  }

  .button:active {
    background-color: ${BUTTON_HOVER_COLOR};
    color: white;
    cursor: pointer;
  }

  @media (hover:hover) {
    .button:hover {
      background-color: ${BUTTON_HOVER_COLOR};
      color: white;
      cursor: pointer;
    }
  }

  .questionBubble {
    align-self: flex-end;
    color: white;
  }
`,CHEVRON_LEFT=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,CROSS_ICON=`
<svg
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M18 6L6 18"
  stroke="#7b7b7b"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M6 6L18 18"
  stroke="#7b7b7b"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
</svg>`,EDIT_ICON=`
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="editIconPath" d="M9.625 3.5H3.5C3.03587 3.5 2.59075 3.68437 2.26256 4.01256C1.93437 4.34075 1.75 4.78587 1.75 5.25V17.5C1.75 17.9641 1.93437 18.4092 2.26256 18.7374C2.59075 19.0656 3.03587 19.25 3.5 19.25H15.75C16.2141 19.25 16.6592 19.0656 16.9874 18.7374C17.3156 18.4092 17.5 17.9641 17.5 17.5V11.375" stroke="#474747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="editIconPath" d="M16.1875 2.1875C16.5356 1.8394 17.0077 1.64384 17.5 1.64384C17.9923 1.64384 18.4644 1.8394 18.8125 2.1875C19.1606 2.5356 19.3562 3.00772 19.3562 3.5C19.3562 3.99228 19.1606 4.4644 18.8125 4.8125L10.5 13.125L7 14L7.875 10.5L16.1875 2.1875Z" stroke="#474747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,MUSIC_ICON=`
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="musicIconPath" d="M9.5 18V5L21.5 3V16" stroke="#474747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="musicIconPath" d="M6.5 21C8.15685 21 9.5 19.6569 9.5 18C9.5 16.3431 8.15685 15 6.5 15C4.84315 15 3.5 16.3431 3.5 18C3.5 19.6569 4.84315 21 6.5 21Z" stroke="#474747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="musicIconPath" d="M18.5 19C20.1569 19 21.5 17.6569 21.5 16C21.5 14.3431 20.1569 13 18.5 13C16.8431 13 15.5 14.3431 15.5 16C15.5 17.6569 16.8431 19 18.5 19Z" stroke="#474747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;function backRowHtml(t){return`
    <div class="backRow">
      <div class="backButton" id="backButton">
        ${CHEVRON_LEFT}
      </div>
      <div>
        ${t}
      </div>
      <div class="backButton" style="visibility: hidden">
        ${CHEVRON_LEFT}
      </div>
    </div>
  `}function getTheme(t,e){return COLORS[`${t.getAttribute("theme")}${!0===e?"Hover":""}`]}function getButtonClassForTheme(t){return`
    .button {
      background-color: ${getTheme(t)};
    }

    .button:active {
      background-color: ${getTheme(t,!0)};
    }

    @media (hover:hover) {
      .button:hover {
        background-color: ${getTheme(t,!0)};
      }
    }
  `}function debugLog(){0}async function postRequest(t,e){const i=await fetch(`https://api.minymon.com${t}`,{cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify(e)});return 200<=i.status&&i.status<300?{body:await i.json()}:{error:!0,status:i.status}}function removeAllChildNodes(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function validateEmail(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}class Minymon extends HTMLElement{constructor(){debugLog("Minymon constructor"),super(),this.attachShadow({mode:"open"})}_addIcon(){var t=htmlToElement(`
      <div class="icon" id="icon" tabindex="0">
        <div id="overlay"></div>
        <div class="animation" id="feedAnimation" style="visibility:hidden"></div>
        <div class="animation" id="idleAnimation" style="visibility:hidden"></div>
        <div class="animation" id="introAnimation"></div>
      </div>
    `);this._wrapper.appendChild(t)}_addInfo(){const elem=htmlToElement(`
      <div class="info" id="info">
        <div class="half">
          <div class="infoTitleContainer">
            <button id="infoTitleCloseButton" type="button">
              ${CROSS_ICON}
            </button>
            <h3 id="infoTitle">${this.getAttribute("infoTitle")}</h3>
            <div style="visibility:hidden">
              ${CROSS_ICON}
            </div>
          </div>
          <div class="questions">
            <slot name="${QUESTION_SLOT}"></slot>
          </div> 
        </div>
        <div class="half">
          <div class="separator"></div>
          <div class="buttons">
            ${eval(this.getAttribute("enableFeed"))?'<button class="button" id="feedButton">Feed</button>':""}
            ${eval(this.getAttribute("enableTalk"))?'<button class="button" id="talkButton">Talk</button>':""}
            <button class="button" id="shrinkButton">${isJa()?"Small":"Shrink"}</button>
          </div>
          <a class="poweredBy" href="http://www.minymon.com">
            Powered by <span class="poweredByHighlight">Minymon</span>
          </a>
        </div>
        <div class="dialog" id="dialog">
          <slot name="${DIALOG_SLOT}"></slot>
        </div>
      </div>
    `);this._wrapper.appendChild(elem)}_addStyle(){const t=document.createElement("style");t.textContent=`
      ${SHARED_STYLES}
      ${getButtonClassForTheme(this)}

      * {
        outline: none;
      }

      .animation {
        display: inline-block;
        height: 100px;
        transition-duration: 0.6s;
        /* Don't want to apply this to visibility */
        transition-property: height, width;
        width: 100px;
      }

      .animation[shrink] {
        height: 50px;
        transition-duration: 0.6s;
        /* Don't want to apply this to visibility */
        transition-property: height, width;
        width: 50px;
      }

      .animation:hover {
        cursor: pointer;
      }

      .buttons {
        column-gap: 16px;
        display: flex;
        margin-top: 24px;
      }

      .dialog {
        display: none;
        overflow: auto;
      }

      .dialog::-webkit-scrollbar {
        width: 4px;
      }

      .dialog::-webkit-scrollbar-thumb {
        background-color: ${getTheme(this,!0)};
      }

      .dialog[visible] {
        background-color: white;
        border-radius: 10px;
        box-sizing: border-box;
        display: block;
        height: 100%;
        left: 0;
        padding: ${ANSWER_PADDING};
        position: absolute;
        top: 0;
        width: 100%;
      }

      .half {
        align-items: center;
        display: flex;
        flex-direction: column;
      }

      .icon {
        height: 100px;
        filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.32));
        position: relative;
        transition: 0.6s all;
      }

      .icon[shrink] {
        height: 50px;
        transition: 0.6s all;
      }

      .info {
        align-items: center;
        background: white;
        border-radius: 24px;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        color: ${COLORS.primary};
        display: none;
        flex-direction: column;
        font-size: 0.8rem;
        justify-content: space-between;
        line-height: normal;
        min-height: 376px;
        opacity: 0;
        /* Apply border-radius to dialog scrollbar */
        overflow: hidden;
        padding: 28px;
        position: absolute;
        right: 22px;
        top: -10px;
        transform: translateY(-100%);
        transition: 0.6s all;
        width: ${INFO_WIDTH};
        z-index: 3;
      }

      .info[visible] {
        display: flex;
        opacity: 1;
      }

      .infoTitleContainer {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .poweredBy {
        color: #7B7B7B;
        font-family: DM Sans;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        margin-top: 24px;
        text-decoration: none;
      }

      .poweredByHighlight {
        color: ${getTheme(this,!0)};
      }

      .questions {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        row-gap: 16px;
      }

      .separator {
        border-bottom: 1px solid #E3E3E3;
        margin-top: 24px;
        width: 100%;
      }

      .wrapper {
        bottom: 10px;
        position: fixed;
        right: 10px;
      }

      #infoTitle {
        font-family: 'DM Sans', sans-serif;
        font-size: 22px;
        line-height: normal;
        margin: 0;
        text-align: center;
      }

      #infoTitleCloseButton {
        background-color: transparent;
        border: none;
        height: 24px;
        outline: none;
        padding: 0px;
        width: 24px;
      }

      #infoTitleCloseButton:hover {
        cursor: pointer;
      }

      #overlay {
        background-color: transparent;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
        -webkit-tap-highlight-color: transparent;
      }

      #overlay:hover {
        cursor: pointer;
      }
    `,this.shadowRoot.appendChild(t)}async _loadAnimation(t,e,i){return bodymovin.loadAnimation({container:this.shadowRoot.getElementById(e),animationData:JSON.parse(t),renderer:"svg",loop:i??0,autoplay:!1})}async _loadAnimationJson(){const t=await fetch(`https://api.minymon.com/getMinymonAnimations?idsBase64=${this.getAttribute("idsString")}`);var e=await t.text();return JSON.parse(e)}_showAnimation(t){const e=this.shadowRoot.getElementById("feedAnimation"),i=this.shadowRoot.getElementById("idleAnimation"),o=this.shadowRoot.getElementById("introAnimation");var n=t.getAttribute("id");t.style.display="inline-block",t.style.visibility="visible","idleAnimation"!==n&&(i.style.display="none"),"introAnimation"!==n&&(o.style.display="none"),"feedAnimation"!==n&&(e.style.display="none")}_startAnimation(t,e){const i=this.shadowRoot.getElementById(t).contentDocument,o=i.getElementById(e);o.dispatchEvent(new Event("click"))}async _connectedCallbackAsync(){debugLog("Minymon connectedCallback"),this._addStyle(),this._wrapper=document.createElement("div"),this._wrapper.setAttribute("class","wrapper"),this._addIcon(),this._addInfo(),this.shadowRoot.appendChild(this._wrapper);var t=await this._loadAnimationJson();const[e,i,o]=await Promise.all([this._loadAnimation(t.feedAnimation,"feedAnimation",0),this._loadAnimation(t.idleAnimation,"idleAnimation",!0),this._loadAnimation(t.introAnimation,"introAnimation",1)]),n=this.shadowRoot.getElementById("dialog"),s=this.shadowRoot.getElementById("feedAnimation"),a=this.shadowRoot.getElementById("feedButton"),d=this.shadowRoot.getElementById("icon"),l=this.shadowRoot.getElementById("idleAnimation"),r=this.shadowRoot.getElementById("info"),c=this.shadowRoot.getElementById("introAnimation"),h=this.shadowRoot.getElementById("overlay"),m=this.shadowRoot.getElementById("shrinkButton"),u=this.shadowRoot.getElementById("talkButton"),p=this.shadowRoot.getElementById("infoTitleCloseButton");o.play();const b=()=>{i.play(),this._showAnimation(l)};o.addEventListener("complete",b),h.addEventListener("click",()=>{debugLog("icon click"),null!=d.getAttribute("shrink")?(d.removeAttribute("shrink"),s.removeAttribute("shrink"),c.removeAttribute("shrink"),l.removeAttribute("shrink")):r.hasAttribute("visible")?r.removeAttribute("visible"):r.setAttribute("visible",!0)}),document.addEventListener("mouseup",t=>{this.contains(t.target)||r.hasAttribute("visible")&&r.removeAttribute("visible")}),p.addEventListener("click",()=>{r.hasAttribute("visible")&&r.removeAttribute("visible")}),m.addEventListener("click",()=>{d.setAttribute("shrink",!0),s.setAttribute("shrink",!0),c.setAttribute("shrink",!0),l.setAttribute("shrink",!0),r.removeAttribute("visible")});let g=null;null!=a&&a.addEventListener("click",()=>{debugLog("feed"),o.removeEventListener("complete",b),e.goToAndPlay(0),this._showAnimation(s),e.removeEventListener("complete",g),g=()=>{i.goToAndPlay(0),this._showAnimation(l)},e.addEventListener("complete",g)}),null!=u&&u.addEventListener("click",()=>{n.setAttribute("visible",!0)}),this.shadowRoot.addEventListener("dialog-back",t=>{n.removeAttribute("visible")})}connectedCallback(){this._connectedCallbackAsync()}}customElements.define("minymon-body",Minymon);class MinymonQuestion extends HTMLElement{constructor(){debugLog("MinymonQuestion constructor"),super(),this.attachShadow({mode:"open"})}_addAnswer(){var t=htmlToElement(`
      <div id="answer">
        ${backRowHtml("FAQs")}
        <slot name="${ANSWER_SLOT}"></slot>
      </div>
    `);this.shadowRoot.appendChild(t)}_addQuestion(){var t=htmlToElement(`
      <div class="button" id="question">
        ${this.getAttribute("question")}
      </div>
    `);this.shadowRoot.appendChild(t)}_addStyle(){const t=document.createElement("style");t.textContent=`
      ${SHARED_STYLES}
      ${getButtonClassForTheme(this)}

      #answer {
        background-color: white;
        height: 100%;
        left: 0;
        overflow: auto;
        position: absolute;
        top: 0;
        visibility: hidden;
        width: 100%;
      }

      #answer::-webkit-scrollbar {
        width: 4px;
      }

      #answer::-webkit-scrollbar-thumb {
        background-color: ${getTheme(this,!0)};
      }

      #answer[visible] {
        visibility: visible;
      }
    `,this.shadowRoot.appendChild(t)}connectedCallback(){debugLog("MinymonQuestion connectedCallback"),this._addStyle(),this.setAttribute("slot",QUESTION_SLOT),this._addQuestion(),this._addAnswer();const t=this.shadowRoot.getElementById("answer"),e=this.shadowRoot.getElementById("backButton"),i=this.shadowRoot.getElementById("question");i.addEventListener("click",()=>{t.setAttribute("visible",!0)}),e.addEventListener("click",()=>{t.removeAttribute("visible")})}}customElements.define("minymon-question",MinymonQuestion);class MinymonAnswer extends HTMLElement{constructor(){debugLog("MinymonAnswer constructor"),super(),this.attachShadow({mode:"open"})}_addAnswer(){var t=htmlToElement(`
      <div class="answer" id="answer">
        <div class="questionBubble">
          ${this.getAttribute("question")}
        </div>
        <div class="answerBubble">
          ${this.getAttribute("answer")}
        </div>
      </div>
    `);this.shadowRoot.appendChild(t)}_addStyle(){const t=document.createElement("style");t.textContent=`
      ${SHARED_STYLES}

      .answer {
        background-color: white;
        border-radius: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-family: 'DM Sans', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        left: 0;
        padding: ${ANSWER_PADDING};
        position: absolute;
        row-gap: 16px;
        top: 0;
        width: 100%;
      }

      .answerBubble {
        background-color: white;
        border: 1px solid #E3E3E3;
        box-sizing: border-box;
        color: #474747;
      }

      .questionBubble {
        background-color: ${getTheme(this,!0)};
        box-sizing: border-box;
      }
    `,this.shadowRoot.appendChild(t)}connectedCallback(){debugLog("MinymonAnswer connectedCallback"),this._addStyle(),this.setAttribute("slot",ANSWER_SLOT),this._addAnswer()}}customElements.define("minymon-answer",MinymonAnswer);class MinymonDialog extends HTMLElement{constructor(){debugLog("MinymonDialog constructor"),super(),this.attachShadow({mode:"open"})}_addQuestionAndOptions(o,n){const s=JSON.parse(unescape(this.getAttribute("dialog")));debugLog("dialog",s);var t=htmlToElement(`
      <div class="question" question="${n}">
        ${s[n].prompt}
      </div>
    `);o.appendChild(t);const e=s[n].responses.map(i=>{const t=htmlToElement(`
        <p class="option" question="${n}">
          ${i.response}
        </p>
      `);return t.addEventListener("click",()=>{const t=o.querySelectorAll(`.option[question="${n}"]`);t.forEach(t=>o.removeChild(t));var e=htmlToElement(`
          <div class="option optionChosen" question="${n}">
            ${i.response}
          </div>
        `);o.appendChild(e),null!=i.nextPromptId&&this._addQuestionAndOptions(o,s.findIndex(t=>t.id===i.nextPromptId))}),t});e.forEach(t=>{o.appendChild(t)})}_addStyle(){const t=document.createElement("style");t.textContent=`
      ${SHARED_STYLES}

      @keyframes fadein {
        from {
          opacity: 0;
        }
      
        to {
          opacity: 1;
        }
      }

      .dialog {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        row-gap: 16px;
      }

      .option {
        align-self: flex-end;
        background-color: ${getTheme(this)};
        border-radius: 24px;
        color: ${COLORS.primary};
        font-family: 'DM Sans', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        margin: 0;
        opacity: 0;
        padding: 12px 16px;
        word-break: break-word;

        animation-delay: 0.5s;
        animation-duration: 1.6s;
        animation-fill-mode: forwards;
        animation-name: fadein;
      }

      p.option:nth-of-type(1) {
        animation-delay: 0.6s;
      }

      p.option:nth-of-type(2) {
        animation-delay: 0.8s;
      }

      p.option:nth-of-type(3) {
        animation-delay: 1s;
      }

      .option:active {
        background-color: ${getTheme(this,!0)};
        color: white;
        cursor: pointer;
      }

      @media (hover:hover) {
        .option:hover {
          background-color: ${getTheme(this,!0)};
          color: white;
          cursor: pointer;
        }
      }

      .optionChosen {
        background-color: ${getTheme(this,!0)};
        color: white;

        animation-delay: 0s;
        animation-duration: 0.5s;
      }

      .question {
        border: 1px solid #E3E3E3;
        border-radius: 24px;
        color: ${COLORS.primary};
        font-family: 'DM Sans', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        opacity: 0;
        padding: 12px 16px;
        word-break: break-word;

        animation-duration: 1.6s;
        animation-fill-mode: forwards;
        animation-name: fadein;
      }

      .question:nth-child(n+2) {
        animation-delay: 0.4s;
      }
    `,this.shadowRoot.appendChild(t)}_reset(){var t=this.shadowRoot.getElementById("dialog");removeAllChildNodes(t),this._addQuestionAndOptions(t,0)}connectedCallback(){debugLog("MinymonDialog connectedCallback"),this._addStyle(),this.setAttribute("slot",DIALOG_SLOT);var t=htmlToElement(backRowHtml("Talk"));this.shadowRoot.appendChild(t);const e=this.shadowRoot.getElementById("backButton");e.addEventListener("click",()=>{this._reset(),this.shadowRoot.dispatchEvent(new CustomEvent("dialog-back",{bubbles:!0,composed:!0,detail:"composed"}))});t=htmlToElement('<div class="dialog" id="dialog"></div>');this._addQuestionAndOptions(t,0),this.shadowRoot.appendChild(t)}}customElements.define("minymon-dialog",MinymonDialog);class MinymonFeedback extends HTMLElement{constructor(){debugLog("MinymonFeedback constructor"),super(),this.attachShadow({mode:"open"})}_addFeedbackForm(){var t=htmlToElement(`
      <div id="feedbackForm">
        ${backRowHtml(isJa()?"Send message":"Send feedback")}
        <div id="feedbackFormBody">
          <div class="feedbackFormTitle">
            ${this.getAttribute("description")}
          </div>
          <div class="feedbackFormInputs">
            <div class="feedbackFormInputGroup">
              <div class="feedbackFormInputTitle">
                Your email
              </div>
              <input class="emailInput" id="emailInput" type="text" />
            </div>
            <div class="feedbackFormInputGroup">
              <div class="feedbackFormInputTitle">
                Message
              </div>
              <textarea class="messageInput" id="messageInput" rows="2"></textarea>
            </div>
          </div>
          <div class="feedbackSubmitButtonContainer">
            <div class="button" id="feedbackSubmitButton">
              Submit
            </div>
          </div>
        </div>
        <div id="feedbackSent">
          <div>
            Feedback sent!
          </div> 
        </div>
      </div>
    `);this.shadowRoot.appendChild(t)}_addFeedbackButton(){var t=htmlToElement(`
      <div class="button" id="feedbackButton">
        ${EDIT_ICON}
        <div>
          ${isJa()?"Send a message":"I want to leave feedback"}
        </div>
      </div>
    `);this.shadowRoot.appendChild(t)}_addStyle(){const t=document.createElement("style");t.textContent=`
      ${SHARED_STYLES}
      ${getButtonClassForTheme(this)}

      .button:active .editIconPath {
        stroke: white;
      }

      @media (hover:hover) {
        .button:hover .editIconPath {
          stroke: white;
        }
      }

      #feedbackForm {
        visibility: hidden;
      }

      #feedbackForm[visible] {
        visibility: visible;
      }

      #feedbackFormBody, #feedbackSent {
        align-items: center;
        background-color: white;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        left: 0;
        padding: ${ANSWER_PADDING};
        position: absolute;
        top: 0;
        width: 100%;
      }

      #feedbackSent {
        visibility: hidden;
      }

      #feedbackSent[visible] {
        visibility: visible;
      }

      .emailInput, .messageInput {
        border: 1px solid #E3E3E3;
        border-radius: 4px;
        font-family: 'DM Sans', sans-serif;
        font-size: 13px;
        line-height: 17px;
        outline: none;
        padding: 10px 12px;
        -webkit-appearance: none;
      }

      .feedbackFormInputGroup {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
      }

      .feedbackFormInputTitle, .feedbackFormTitle, #feedbackSent {
        color: #7B7B7B;
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: normal;
      }

      .feedbackFormInputs {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        margin-top: 12px;
        row-gap: 16px;
      }

      .feedbackFormTitle {
        text-align: center;
      }

      .feedbackSubmitButtonContainer {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: flex-end;
        margin-top: 16px;
      }

      .messageInput {
        resize: none;
      }
    `,this.shadowRoot.appendChild(t)}connectedCallback(){debugLog("MinymonFeedback connectedCallback"),this._addStyle(),this.setAttribute("slot",QUESTION_SLOT),this._addFeedbackButton(),this._addFeedbackForm();const t=this.shadowRoot.getElementById("feedbackForm"),e=this.shadowRoot.getElementById("backButton"),i=this.shadowRoot.getElementById("feedbackButton"),a=this.shadowRoot.getElementById("feedbackSubmitButton"),d=this.shadowRoot.getElementById("feedbackSent");i.addEventListener("click",()=>{t.setAttribute("visible",!0)}),e.addEventListener("click",()=>{t.removeAttribute("visible"),d.removeAttribute("visible")}),a.addEventListener("click",async()=>{const t=this.shadowRoot.getElementById("emailInput");var e=t.value;const i=this.shadowRoot.getElementById("messageInput");var o=i.value,n=this.getAttribute("mid"),s=this.getAttribute("uid");if(validateEmail(e)&&null!=o&&""!==o&&null!=s&&null!=n){a.style.opacity=.3,a.style.pointerEvents="none";try{!0===(await postRequest("/sendFeedbackEmail",{email:e,message:o,mid:n,uid:s})).body?.success&&(d.setAttribute("visible",!0),t.value="",i.value="")}catch(t){}a.style.opacity=1,a.style.pointerEvents="auto"}})}}customElements.define("minymon-feedback",MinymonFeedback);class MinymonMusic extends HTMLElement{constructor(){debugLog("MinymonMusic constructor"),super(),this.attachShadow({mode:"open"})}_addMusicButton(){var t=htmlToElement(`
      <div class="button" id="musicButton">
        ${MUSIC_ICON}
        <div id="musicButtonText">
          ${isJa()?"Listen to song":"Play theme song"}
        </div>
      </div>
    `);this.shadowRoot.appendChild(t)}_addStyle(){const t=document.createElement("style");t.textContent=`
      ${SHARED_STYLES}
      ${getButtonClassForTheme(this)}

      .button:active .musicIconPath {
        stroke: white;
      }

      @media (hover:hover) {
        .button:hover .musicIconPath {
          stroke: white;
        }
      }
    `,this.shadowRoot.appendChild(t)}connectedCallback(){debugLog("MinymonMusic connectedCallback"),this._addStyle(),this.setAttribute("slot",QUESTION_SLOT),this._addMusicButton();const t=this.shadowRoot.getElementById("musicButton"),e=this.shadowRoot.getElementById("musicButtonText"),i=new Audio(this.getAttribute("src"));t.addEventListener("click",()=>{i.paused?(i.play(),e.innerText=isJa()?"Pause song":"Pause theme song"):(i.pause(),e.innerText=isJa()?"Listen to song":"Play theme song")})}}customElements.define("minymon-music",MinymonMusic);