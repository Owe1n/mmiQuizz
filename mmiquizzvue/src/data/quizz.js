export const list_theme = [
    {
        id: 1,
        titre: "Les profs",
        listeQuiz: [
            {
                id: 1,
                titre: "Les profs 1 ",
            },
            {
                id: 2,
                titre: "Les profs 2  ",
            }


        ]
    },
    {
        id: 2,
        titre: "Les cours",
        listeQuiz: [
            {
                id: 1,
                titre: "Quiz 1 ",
            },
            {
                id: 2,
                titre: "Quiz 2 ",
            }


        ]
    },
    {
        id: 3,
        titre: "L'asso",
        listeQuiz: [
            {
                id: 1,
                titre: "Quiz 1 ",
            },
            {
                id: 2,
                titre: "Quiz 2 ",
            }


        ]
    }

];

export function getTheme(id) {
    return list_theme.find(item => item.id == id);
}


export function getQuiz(id) {
    return list_theme.listeQuiz.find(item => item.id == id);
}

export function get_listTheme(){
    return list_theme;
}