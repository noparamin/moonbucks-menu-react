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
            return {
                espresso: [],
                frappuccino: [],
                blended: [],
                teavana: [],
                dessert: []
            };
        }
    }
};

export default store;