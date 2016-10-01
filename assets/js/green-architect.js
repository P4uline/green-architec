

var plants = {
    "cotoneaster" : {
        name:"Cotoneaster",
        season:["assets/images/fruit-rouge-feuille-fonce.png",
            "assets/images/fruit-rouge-feuille-fonce.png",
            "assets/images/feuille-fonce.png",
            "assets/images/feuille-fonce.png",
            "assets/images/feuille-fonce.png",
            "assets/images/feuille-fonce.png",
            "assets/images/feuille-fonce.png",
            "assets/images/feuille-fonce.png",
            "assets/images/feuille-fonce.png",
            "assets/images/feuille-fonce.png",
            "assets/images/fruit-rouge-feuille-fonce.png",
            "assets/images/fruit-rouge-feuille-fonce.png"]
    },
    "cornus-jaune" : {
        name:"Cornus à fauillage vert et jaune panache",
        season:["assets/images/branche-rouge.png",
            "assets/images/feuille-verte-panache-jaune.png",
            "assets/images/feuille-verte-panache-jaune.png",
            "assets/images/feuille-verte-panache-jaune.png",
            "assets/images/feuille-verte-panache-jaune.png",
            "assets/images/feuille-verte-panache-jaune.png",
            "assets/images/feuille-automne.png",
            "assets/images/feuille-automne.png",
            "assets/images/branche-rouge.png",
            "assets/images/branche-rouge.png",
            "assets/images/branche-rouge.png",
            "assets/images/branche-rouge.png"]
    }
}

function getPlantRow(plant) {
    var $row = $('<div/>', { 'class':'row' });

    for (i = 0; i < 12; i++) {
        var $plant = $('<div/>', { 'class':'col-xs-1' });
        $row.append($plant.append('<img src=' + plant.season[i] +' alt="feuillage" height="30" width="30"/>'));
    }
    return $row;
}
