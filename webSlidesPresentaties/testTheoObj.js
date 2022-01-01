const docent = {
    voornaam: "Theo",
    achternaam: "den Blanken",
    site: "https://blanken5.home.xs4all.nl/",
    stelJeVoor() {
        console.log(`Hallo in ben ${this.voornaam} ${this.achternaam}`)
    },
    geefLes() {
        window.location.href = this.site;
    }
}