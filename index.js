const contentContainer = document.getElementById("contentContainer");

const contentButtons = {
    "home": document.getElementById("homeContentButton"),
    "grouping": document.getElementById("groupingContentButton"),
    "bbs": document.getElementById("bbsContentButton"),
    "account": document.getElementById("accountContentButton"),
    "settings": document.getElementById("settingsContentButton")
};
const contentPages = {
    "home": document.getElementById("homePage"),
    "grouping": document.getElementById("groupingPage"),
    "bbs": document.getElementById("bbsPage"),
    "account": document.getElementById("accountPage"),
    "settings": document.getElementById("settingsPage"),
    "login": document.getElementById("loginPage")
};

let currentContentPage = "";
let userStatus = "CLI"; // "NLI": Not logged in; "LGI": Logged in; "CLI": Checking for local login information

function contentNavigateTo(contentPage) {
    if (contentPage == currentContentPage)
        return;

    contentButtons[currentContentPage].classList.remove("contentButtonActive");
    contentButtons[currentContentPage].classList.add("contentButtonInactive");
    contentPages[currentContentPage].classList.remove("displaying");
    contentPages[currentContentPage].classList.add("notDisplaying");

    contentButtons[contentPage].classList.remove("contentButtonInactive");
    contentButtons[contentPage].classList.add("contentButtonActive");
    contentPages[contentPage].classList.remove("notDisplaying");
    contentPages[contentPage].classList.add("displaying");

    currentContentPage = contentPage;
}

function contentButtonClicked(content) {
    contentNavigateTo(content);
}

function initFromHome() {
    contentButtons["home"].classList.remove("contentButtonInactive");
    contentButtons["home"].classList.add("contentButtonActive");
    contentPages["home"].classList.remove("notDisplaying");
    contentPages["home"].classList.add("displaying");

    currentContentPage = "home";
}

async function checkLocalLogin() {
    userStatus = "LGI";
}

function initialize() {
    initFromHome();
    checkLocalLogin().then(() => {
        if (userStatus == "LGI")
            contentNavigateTo("home");
        else
            contentNavigateTo("login");
    });
}

window.onload = initialize;