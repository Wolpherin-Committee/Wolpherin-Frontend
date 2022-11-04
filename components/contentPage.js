class Page {
    contructor(contentName) {
        this.contentName = contentName;
        this.rootElement = document.createElement("div");
        this.contentElements = [];
    }

    pageInitialize() {}
    pageRender() {}
}

class HomePage extends Page {
    constructor(contentName) {
        super(contentName);
    }
}