var condition_1 = 10 - 10;
var condition_2 = false;


// if
// --
// if (condition_1)
// {
//     console.log("Structure IF");
// }


// if ... else
// --
// if (condition_1) {
//     console.log("Execution si condition_1 est VRAI");
// }
// else {
//     console.log("Execution du code alternatif (condition_1 n'est pas VRAI)");
// }


// if ... else if
// --
// if (condition_1)
// {
//     console.log("Execution si condition_1 est VRAI");
// }
// else if (condition_2) 
// {
//     console.log("Execution si condition_2 est VRAI - condition_1 n'est pas VRAI");
// }

// if ... else if ... else
// --

// if (condition_1)
// {
//     console.log("Execution si condition_1 est VRAI");
// }
// else if (condition_2) 
// {
//     console.log("Execution si condition_2 est VRAI - condition_1 n'est pas VRAI");
// }
// else {
//     console.log("Execution du code alternatif (condition_1 n'est pas VRAI, condition_2 n'est pas VRAI)");
// }


// if (trafficLight == "red")
// {
//     console.log("On stop");
// }
// else if (trafficLight == "orange")
// {
//     console.log("On s'arrete..");
// }
// else if (trafficLight == "green")
// {
//     console.log("On passe");
// }
// else // clignotant
// {
//     console.log("c'est le bordel !");
// }

// switch
// --

var trafficLight = "red";

switch (trafficLight)
{
    case 'red':
        console.log("On stop");
    break;

    case 'orange':
        console.log("On s'arrete..");
    break;

    case 'green':
        console.log("On passe");
    break;

    default:
        console.log("c'est le bordel !");
}

console.log('Suite du code'); // commentaire



// NE PAS FAIRE 
// -- 
// var note = 10;

// switch (note != 0)
// {
//     case note == 1: /* ... */ break;
//     case note == 2: /* ... */ break;
//     case note == 3: /* ... */ break;
//     case note == 4: /* ... */ break;
//     // ...
// }
