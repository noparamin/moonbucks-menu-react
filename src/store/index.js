const store = {
    setLocalStorage(menu) {
        localStorage.setItem("menu", JSON.stringify(menu));
    },

    getLocalStorage() {
        let menu = localStorage.getItem("menu");
        if(menu) {
            return JSON.parse(localStorage.getItem("menu"));
        }
        else {
            return [];
        }
    }
};

export default store;