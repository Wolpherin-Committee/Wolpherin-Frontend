class Navigator {
    static instance = new Navigator();

    contructor() {
        this.pages = {};
        this.currentPage = "home";
    }

    renderPage() {}
}