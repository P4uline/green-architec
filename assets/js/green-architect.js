

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

function getRow(name) {

    var $row = $('<div/>', {
        'class':'row'
    });

    for (i = 0; i < 12; i++) {
        $row.append(getPlantSeasonByName("cornus-jaune", i));
    }

    console.log($row);
    return $row;
}

function getPlantSeasonByName(name, i) {
    console.log(plants[name].season[i]);
    var $child = $('<div/>', {
        'class':'col-xs-1'
    });
    var image = '<img src=' + plants[name].season[i] +' alt="feuillage" height="30" width="30"/>';
    console.log("image", image);
    $child.append(image);
    return $child;

}