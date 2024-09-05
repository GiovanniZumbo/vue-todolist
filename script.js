const { createApp } = Vue;

createApp({
    data() {
        return {

            newItem: {
                text: ' ',
                done: false
            },

            itemList: [{
                text: " Fare la spesa",
                done: false,
            },
            {
                text: "Chiamare in ufficio",
                done: false,
            },
            {
                text: "Passeggiare il cane",
                done: false,
            },
            {
                text: "Guardare nuovo episodio serie",
                done: false,
            },
            {
                text: "Comprare regalo",
                done: false,
            },
            {
                text: "Studiare",
                done: false,
            },
            {
                text: "Salvare il mondo",
                done: false,
            }]

        }
    },

    methods: {
        // * Aggiunge il nuovo oggetto dentro l'array lista

        addNewItem(content) {
            this.itemList.push(content);
            clearNewItemText();
        },

        clearNewItemText() {
            this.newItem = {
                text: ' ',
                done: false
            }
        },

        // * Rimuove un elemento dalla lista

        deleteItem(itemIndex) {
            this.itemList.splice(itemIndex, 1);
            console.log(`é stato cancellato l\' item numero: ${itemIndex}`)
        },

    }


    // | Prendo quello che ho nell'input
    // | Lo metto dentro newItem.text
    // | Pusho newItem dentro itemList
    // | Resetto newItem



}).mount('#app')
