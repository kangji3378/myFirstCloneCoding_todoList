const quotes=[
    {
        quote: `항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.`,
        author:`스페인 속담`,},
    {
        quote: `슬픔이 그대의 삶으로 밀려와 마음을 흔들고 소중한 것을 쓸어가 버릴 때면 그대 가슴에 대고 말하라. “이것 또한 지나가리라”`,
        author:`랜터 윌슨 스미스`,
    },
    {
        quote: `별은 바라보는 자에게 빛을 준다.`,
        author:`도서 ‘드래곤 라자’`,
    },
    {
        quote: `좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다`,
        author:`단테`,
    },
    {
        quote: `자신감 있는 표정을 지으면 자신감이 생긴다`,
        author:`찰스 다윈`,
    },
    {
        quote: `그대 자신의 영혼을 탐구하라. 다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요, 그대 혼자 가야할 길임을 명심하라. 비록 다른 이들과 함께 걸을 수는 있으나  다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라.`,
       author:`인디언 속담`,
    },
    {
        quote: `고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다`,
        author:`괴테`,
    }]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=(quotes[Math.floor(Math.random()*(quotes.length))]);
quote.innerText=todaysQuote.quote;
author.innerText=`- ${todaysQuote.author}`;