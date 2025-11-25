
//This is creating a variable for all of the shoes with each of their properties.

const MagicSpeed = {
    name: "Asics Magic Speed 4",
    image: "Images/MagicSpeed.png",
    link: "https://www.runningwarehouse.com/ASICS_Magic_Speed_4/descpage-AS4MSM2.html",
    description: "The Magic Speed 4 serves as a bridge between training and racing. It is a meduim budget option for shorter races, and can be used for speed workouts, like tempos or intervals. It features a carbon fiber plate and is on the firmer side. It is priced at $170",
    numberOfMiles: "0-10",
    typeOfRunning: "speedwork",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

const EndorphinPro = {
    name: "Saucony Endorphin Pro 4",
    image: "Images/EndorphinPro.png",
    link: "https://www.runningwarehouse.com/Saucony_Endorphin_Pro_4/descpage-S4EPM10.html",
    description: "The Pro is another one of Saucony's racing shoes with a carbon fiber plate and PWRRUN PB foam in its midsole. It is more versatile and can be taken out to various distance races from the 5k all the way up to the marathon. It is also very comfortable for a racer. It is priced at $240.",
    numberOfMiles: "10-25",
    typeOfRunning: "racing",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "midfoot",
    historyOfInjury: "yes",
};

const EndorphinElite = {
    name: "Saucony Endorphin Elite 2",
    image: "Images/EndorphinElite.png",
    link: "https://www.runningwarehouse.com/Saucony_Endorphin_Elite_2/descpage-SA2EEU0.html",
    description: "The Endorphin elite is the most high end racing shoe of saucony. It is best used for half marathon and marathon races, featuring a foam of IncrediRun foam with a carbon fiber plate in its midsole. It is priced at $290.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

const Triumph = {
    name: "Saucony Triumph 23",
    image: "Images/Triumph.png",
    link: "https://www.runningwarehouse.com/Saucony_Triumph_23/descpage-S23TM07.html",
    description: "This is a daily trainer shoe thats orientated more toward the comfier side. It also has the PWRRUN PB foam similar to the endorphin speed, but not plate in this one, but more foam. Due to its high cushioning, it is best used for those longer easy runs. It is priced at $170",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface:"road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

const Supernova = {
    name: "Adidas Supernova Rise 2",
    image: "Images/Supernova.png",
    link: "https://www.runningwarehouse.com/adidas_Supernova_Rise_2/descpage-ADSR2M6.html",
    description: "The Supernova is Adidas' standard daily trainer, built to cover a majority of your mileage. It features a Dreamstrike+ PEBA foam, it offers a stable and cushioned ride. It is priced at $140.",
    numberOfMiles: "10-25",
    typeOfRunning: "allrounder",
    typeOfSurface:"road",
    preferredCushion: "firm",
    budget: "under150",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

const Boston = {
    name: "Adidas Boston 13",
    image: "Images/Boston.png",
    link: "https://www.runningwarehouse.com/adidas_adizero_Boston_13/descpage-AAB13M7.html",
    description: "This is designed to be a workout shoe, for those track sessions and tempos. It features a mix Lightstrike 2.0 and Lightstrike pro foam, with carbon rods going along the whole shoe's midsole for the extra energy return. It is priced at $160.",
    numberOfMiles: "10-25",
    typeOfRunning: "speedwork",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

const TakumiSen = {
    name: "Adidas Takumi Sen 11",
    image: "Images/TakumiSen.png",
    link: "https://www.runningwarehouse.com/search-mens.html?start=0&count=30&searchtext=Adidas%20Takumi%20Sen",
    description: "The Sen 11 is a lightweight version of the Evo SL. It is primarly for those shorter races like the mile and the 5k. It can also be used for those key track workouts. Its midsole is comprised of Dual layer lightstrike Pro foam, and energy rods made of glass fiber for energy return. It is priced at $180.",
    numberOfMiles: "10-25",
    typeOfRunning: "racing",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

const AdiosPro = {
    name: "Adidas Adizero Adios Pro 4",
    image: "Images/AdiosPro.png",
    link: "https://www.runningwarehouse.com/adidas_adizero_Adios_Pro_4/descpage-A4AAPM5.html",
    description: "The Pro 4 is the elite racing shoe of Adidas. It is designed for racing only, from anywhere from a 5k race to a marathon. It features Lightstrike Pro foam, with carbon energy rods that span the whole shoe, giving it that extra energy return and propulsion. It can wear down quickly, and it is priced at $250.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

const SCTrainer = {
    name: "New Balance Fuelcell Supercomp Trainer v3",
    image: "Images/SCTrainer.png",
    link: "https://www.runningwarehouse.com/New_Balance_FuelCell_SuperComp_Trainer_v3/descpage-N3SCTM4.html",
    description: "The SC trainer is New Balance's 'supertrainer'. This is because it features a carbon fiber plate with the Fuelcell foam in its midsole. This shoe is built to go faster with its energy arc system. It is used for those long hard runs and workouts with the energy return you can get from it. It is priced at $190.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface:"road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

const SCElite = {
    name: "New Balance Fuelcell Supercomp Elite v5",
    image: "Images/SCElite.png",
    link: "https://www.runningwarehouse.com/search-mens.html?start=0&count=30&searchtext=new%20balance%20sc%20elite",
    description: "The Elite is NB's top end shoe, for those races and key workouts that you have. With a midsole made out of an Energy Arc aarbon plate and Fuelcell superfoam, it offers some of the most energy return of any shoe. It is priced at $250.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

const Morev5 = {
    name: "New Balance Fresh Foam X More v5",
    image: "Images/Morev5.png",
    link: "https://www.runningwarehouse.com/New_Balance_Fresh_Foam_X_More_v5/descpage-NB5MOM4.html",
    description: "The More v5 is New Balance's max cushion recovery shoe. It has a lot of cushioning with its foam of Fresh Foam, and it has a very high stack height (40 mm at the heel and 36 mm at the toe) to make you feel like you are running on clouds. It does not offer much speed though, and it is best used for those long and easy runs. It is priced at $155.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface:"road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

const Vomero = {
    name: "Nike Vomero 18",
    image: "Images/Vomero.png",
    link: "https://www.runningwarehouse.com/catpage-MRFNIKEVOM.html",
    description: "The Vomero is a more premium version of the Nike Pegasus, coming in $160. It offers more cushioning with having a combination of ZoomX and ReactX foams to provide responsiveness along with cushioning. It serves as a daily trainer.",
    numberOfMiles: "10-25",
    typeOfRunning: "allrounder",
    typeOfSurface:"road",
    preferredCushion: "firm",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

const Streakfly = {
    name: "Nike Streakfly 2",
    image: "Images/Streakfly.png",
    link: "https://www.runningwarehouse.com/Nike_Streakfly_2/descpage-2NISFU1.html",
    description: "The Streakfly is Nike's short distance road racing shoes. The Streakfly 2, especially, is built for those key shorter workouts and races such as the road mile, and 5k. Priced at $190, it is a lightweight shoe with a carbon fiber plate in it's midsole. Due to this, it has less durability than a normal trainer, but will propel you forward on the miles you can run with it.",
    numberOfMiles: "0-10",
    typeOfRunning: "racing",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

const Zoomfly = {
    name: "Nike Zoom Fly 6",
    image: "Images.Zoomfly.png",
    link: "https://www.runningwarehouse.com/Nike_Zoom_Fly_6/descpage-NI6ZFM2.html",
    description: "The Zoom fly is Nike's workout shoe. It is specialized to be used for those track sessions or tempo runs, with more durablity than the racing shoes. Priced at $180, it also includes a full length carbon plate, but with more durable foam.",
    numberOfMiles: "10-25",
    typeOfRunning: "speedwork",
    typeOfSurface:"track",
    preferredCushion: "firm",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

const Victory2 = {
    name: "Nike Zoom Victory 2 Spikes",
    image: "Images/Victory2.png",
    link: "https://www.runningwarehouse.com/Nike_Zoom_Victory_2_Spikes/descpage-N2ZVSU1.html",
    description: "The Victory 2 is Nike's mid distance spike. It is designed to be worn in those key races that are mid distance. These include the 800, 400, and the 1600 meters. It has a carbon plate and ZoomX foam, allowing for maxiumum propulsion. It is priced at $190.",
    numberOfMiles: "0-10",
    typeOfRunning: "racing",
    typeOfSurface:"track",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

const Drag2 = {
    name: "Nike Zoomx Dragonfly 2 Spikes",
    image: "Images/Drag2.png",
    link: "https://www.runningwarehouse.com/Nike_ZoomX_Dragonfly_2_Spikes/descpage-N2ZDFU1.html",
    description: "The Dragonfly 2 is Nike's long distance spike. It is designed to be worn in those key races that are long distance. These include the 1600, 3200, 5k, and 10k. It has a carbon plate and ZoomX foam, allowing for maxiumum propulsion. It is priced at $170.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface:"track",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};
//160
const Cloudspike10k = {
    name: "ON Cloudspike 10000 Spikes",
    image: "Images/Cloudspike10k.png",
    link: "https://www.on.com/en-us/products/cloudspike-10000m-3md1067/mens/undyed-white-mint-shoes-3MD10671105?utm_source_platform=Google%20Ads&utm_source=google&utm_medium=cpc&utm_campaign=%5Bn%3AShopping%5D%5Bm%3AUS%5D%5Bl%3AEN%5D%5Bi%3ABrand%5D%5Bs%3AShoes%5D%5Bv%3AMix%5D%5Bp%3AClassics%5D&gad_source=1&gad_campaignid=21013243598&gbraid=0AAAAADSVac2CscFkx9shfr6nWXTooItzK&gclid=CjwKCAjwkbzEBhAVEiwA4V-yqpgXg4jN9NdryvRFV2yh6ss7nsHc7leBuTWPP-c-vjI53cetGK0EaBoCEM0QAvD_BwE",
    description: "The Cloudspike 10k are ON's elite long distance spike, for those longer track races like 3200, 5k, and 10k. It has a midsole comprised of Helium HF foam and a fiberglass nylong speedboard to assist you in your race. It is priced at $160.",
    numberOfMiles: "5+",
    typeOfRunning: "racing",
    typeOfSurface:"track",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

const DragXC = {
    name: "Nike ZoomX Dragonfly XC Spikes",
    image: "Images/DragXC.png",
    link: "https://www.runningwarehouse.com/Nike_ZoomX_Dragonfly_XC_Spikes/descpage-NZXDXC1.html",
    description: "The Dragonfly XC is Nike's 'cross country' spike. It is designed to be worn in those key races that have variable terrain. These include trail races, and cross country races. It has ZoomX foam, allowing for maxiumum propulsion and comfort. It is priced at $170.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface:"trail",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

const GelNimbus27 = {
    name: "Asics Gel Nimbus 27",
    image: "Images/Gel_nimbus.png",
    link: "https://www.runningwarehouse.com/ASICS_Gel_Nimbus_27/descpage-A2N7M03.html",
    description: "The Gel Nimbus 27 is Asics' recovery shoe, for easy runs. It is extremely soft with a high stack height and generous amounts of FF Blast Plus Eco foam, one of the softest out there. It is priced at $165.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface:"road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

const Superblast = {
    name: "Asics Superblast 2",
    image: "Images/Superblast.png",
    link: "https://www.runningwarehouse.com/ASICS_SUPERBLAST_2/descpage-AS2SBU7.html",
    description: "The Superblast 2 is a more premium version of the Novablast. It is also one of the most versatile shoes, able to handle both faster and slower paces. However, it is priced at $200.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

const Novablast = {
    name: "Asics Novablast 5",
    image: "Images/Novablast.png",
    link: "https://www.runningwarehouse.com/ASICS_Novablast_5/descpage-A5NBM09.html",
    description: "The Novablast 5 is Asics' versatile daily trainer. You can use it for almost any run, though it's best suited for moderate to easy runs. Its FF Blast Max foam is softer and responsive, though it does not include a plate. The market price is $150.",
    numberOfMiles: "10-25",
    typeOfRunning: "longeasyruns",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "under150",
    footStrike: "heel",
    historyOfInjury: "no",
}

const Metaspeed = {
    name: "Asics Metaspeed Sky",
    image: "Images/Metaspeed.png",
    link: "https://www.runningwarehouse.com/ASICS_METASPEED_Sky_Paris/descpage-AMSS2US.html",
    description: "The Metaspeed Sky/Edge are the flagship racing shoes of Asics. You can use them anywhere from 5k to a marathon on the road. They have a carbon plate in their midsole made out of FF Blast Turbo Plus foam, Asics' most high-end foam to offer the most energy return of all their foam. You should get the Sky if you have a longer stride, and you should use the Edge if you have a higher cadence. The market price is $250.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
}

const EndorphinSpeed5 = {
    name: "Saucony Endorphin Speed 5",
    image: "Images/Endorphin_speed.png",
    link: "https://www.runningwarehouse.com/Saucony_Endorphin_Speed_5/descpage-S5ESM05.html",
    description: "The Saucony Endorphin Speed is a daily trainer suited more on the faster side. It features as nylon plate along with foam in the midsole composed of PWRRUN PB foam. You can also use this for workouts like tempos and track work, it works for almost any use. The is priced at $175.",
    numberOfMiles: "10-25",
    typeOfRunning: "speedwork",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
}

const RebelV5 = {
    name: "New Balance Rebel v5",
    image: "Images/Rebel.png",
    link: "https://www.runningwarehouse.com/New_Balance_FuelCell_Rebel_v5/descpage-NBRE5M1.html",
    description: "The Rebel is a daily trainer that is on the faster side of trainers. It has a midsolde made out of Fuelcell foam and can be used in any scenario from easy runs to your hardest workouts, though it's suited for more faster paces. It is priced at $140, making it one of the more affordable daily trainers.",
    numberOfMiles: "0-10",
    typeOfRunning: "allrounder",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
}

const Vaporfly4 = {
    name: "Nike Vaporfly 4",
    image: "Images/Vaporfly.png",
    link: "https://www.runningwarehouse.com/Nike_Vaporfly_4/descpage-4NVFNM3.html",
    description: "The Vaporfly is Nike's top end road racing shoes. Priced at around $270 respectively, This shoe features Nike's most high end foam with a full length carbon plate to offer the most energy return. However, this isn't the most durable shoe, so it is best to use it sparingly for only the important workouts and races. The vaporfly is reccomended for shorter distances. like the 5k and 10k.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface:"road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
}

const Adizero = {
  name: "Adidas Adizero Evo SL",
  image: "Images/Adizero.png",
  link: "https://www.runningwarehouse.com/adidas_adizero_Evo_SL/descpage-A1AESM1.html",
  description: "This is Adidas' faster daily trainer. It features a nylon plate and a Lightstrike pro foam, with a rather simple feel. Nonetheless, it is a great shoe targeted towards those tempo runs or track speed sessions and can even handle daily mileage. It is priced at $150.",
  numberOfMiles: "10-25",
  typeOfRunning: "allrounder",
  typeOfSurface: "road",
  preferredCushion: "responsive",
  budget: "under150",
  footStrike: "midfoot",
  historyOfInjury: "no"
}

const NikePegasus41 = {
  name: "Nike Pegasus 41",
  image: "Images/Pegasus.png",
  link: "https://www.runningwarehouse.com/Nike_Pegasus_41/descpage-N41PM01.html",
  description: "The Pegasus is Nike's standard daily trainer. It is priced at around $140 and can be used as a do it all trainer for any type of run. It is more on the firmer side, and offers plenty of value for your money.",
  numberOfMiles: "25+",
  typeOfRunning: "allrounder",
  typeOfSurface: "road",
  preferredCushion: "responsive",
  budget: "under200",
  footStrike: "heel",
  historyOfInjury: "no"
}

const BrooksGhost = {
  name: "Brooks Ghost 17",
  image: "Images/Ghost.png",
  link: "https://www.runningwarehouse.com/Brooks_Ghost_17/descpage-BG17M06.html",
  description: "This is a daily trainer/walking shoe meant for more easier, casual mileage. It is not reccomended for faster paces, and it is priced at $150.",
  numberOfMiles: "25+",
  typeOfRunning: "allrounder",
  typeOfSurface: "road",
  preferredCushion: "soft",
  budget: "under150",
  footStrike: "heel",
  historyOfInjury: "no"
}

const NewBalance1080 = {
  name: "New Balance Fresh Foam X 1080v14",
  image: "Images/Freshfoam.png",
  link: "https://www.runningwarehouse.com/New_Balance_Fresh_Foam_X_1080_v14/descpage-N141M00.html",
  description: "The 1080 is a daily trainer that is very comfortable. It features a fresh foam X foam and a wide toe box for more breathability and comfortability. Its best use case is for those very easy runs, or long runs if you are on tired legs. It is priced at $165.",
  numberOfMiles: "25+",
  typeOfRunning: "longeasyruns",
  typeOfSurface: "road",
  preferredCushion: "soft",
  budget: "under200",
  footStrike: "heel",
  historyOfInjury: "no"
}

const SauconyRide = {
  name: "Saucony Ride 18",
  image: "Images/Ride.png",
  link: "https://www.runningwarehouse.com/Saucony_Ride_18/descpage-SAR18M4.html",
  description: "This is a low budget daily trainer that can 'do it all'. It has good cushioning and speed, allowing you to do anything from easy runs to hard workouts. It is also priced fairly at $140.",
  numberOfMiles: "25+",
  typeOfRunning: "allrounder",
  typeOfSurface: "road",
  preferredCushion: "responsive",
  budget: "under150",
  footStrike: "midfoot",
  historyOfInjury: "no"
}

const Invincible = {
    name: "Nike Invincible Run 3",
    image: "Images/Invincible.png",
    link: "https://www.runningwarehouse.com/Nike_Invincible_Run_3/descpage-NZIR3MC.html",
    description: "This is Nike's recovery shoe for those easy miles. The midsole is made out of the lightweight ZoomX foam to provide maxium cushion. Although it fits a wider foot and discontinued, if offers a very soft ride, and it is priced at $180.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface:"road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "yes"

}
 

const weights = {
    numberOfMiles: 1,
    typeOfRunning: 3,
    typeOfSurface: 1,
    preferredCushion:2,
    budget:5,
    footstrike:1,
    historyOfInjury:2
}

//this defines a getAnswer function for use in the next lines of code.
function getAnswer(questionName) {
    const selected = document.querySelector(`input[name="${questionName}"]:checked`);
    return selected ? selected.value : null;}

    //This finds the button in the html
const button = document.querySelector('#button')
//When the button is clicked, the generate shoe function is run, collecting the user inputs of the questions.
button.addEventListener('click', function generateShoe() {
    const userInput = {
        numberOfMiles: getAnswer("question1"),
        typeOfRunning: getAnswer("question2"),
        typeOfSurface: getAnswer("question3"),
        preferredCushion: getAnswer("question4"),
        budget: getAnswer("question5"),
        footStrike: getAnswer("question6"),
        historyOfInjury: getAnswer("question7")
    };

        const resultContainer = document.querySelector('#result');
    for (let key in userInput) {
        if (!userInput[key]) {
            resultContainer.innerText = "Please answer all questions before submitting.";
            return;
        }
    }
    //This process matches the shoes with user answers - the shoe with the most amount of questions matched to it will be shown
    const shoes = [
            AdiosPro,
            Adizero,
            Boston,
            BrooksGhost,
            Cloudspike10k,
            Drag2,
            DragXC,
            EndorphinElite,
            EndorphinPro,
            EndorphinSpeed5,
            GelNimbus27,
            Invincible,
            MagicSpeed,
            Metaspeed,
            Morev5,
            NewBalance1080,
            NikePegasus41,
            Novablast,
            RebelV5,
            SCElite,
            SCTrainer,
            SauconyRide,
            Streakfly,
            Superblast,
            Supernova,
            TakumiSen,
            Triumph,
            Vaporfly4,
            Victory2,
            Vomero,
            Zoomfly
        ];



// Clear previous result
resultContainer.innerHTML = "";

// Create a scored list of shoes
function calculateScore(shoe, userInput)
{
    let score = 0;

    for (let key in userInput) 
    {
        if (shoe[key] == userInput[key])
        {
            score += weights[key] || 1;
        }
    }
    return score;
}
    //score and rank shoes
    const scoredShoes = shoes
    .map(shoe => ({
        ...shoe,
        score: calculateScore(shoe, userInput)
    }))
    .sort((a, b) => b.score - a.score);



// Take top 3
const top3 = scoredShoes.slice(0, 3);

// Display top 3 shoes
if (top3.length > 0 && top3[0].score > 0) {
    top3.forEach((shoe, index) => {
        // Title
        const title = document.createElement("p");
        title.innerText = `#${index + 1}: ${shoe.name}`;
        title.style.fontWeight = "bold";
        title.style.marginTop = index === 0 ? "0" : "20px";
        resultContainer.appendChild(title);

        // Image
        const image = document.createElement("img");
        image.src = shoe.image;
        image.alt = shoe.name;
        image.style.width = "200px";
        image.style.borderRadius = "10px";
        image.style.marginTop = "10px";
        resultContainer.appendChild(image);

        // Link
        const link = document.createElement("a");
        link.href = shoe.link;
        link.target = "_blank";
        link.innerText = "Buy this shoe";
        link.style.display = "block";
        link.style.marginTop = "10px";
        link.style.color = "#1a73e8";
        resultContainer.appendChild(link);

        //Description
        const description = document.createElement("p");
        description.innerText = `${shoe.description}`;
        description.style.marginTop = index === 0 ? "0" : "20px";
        description.style.marginLeft = "50px";
        description.style.marginRight = "50px";
        resultContainer.appendChild(description);

        //horizontal line
        const line = document.createElement("hr");
        resultContainer.appendChild(line);
    });
} else {
    resultContainer.innerText = "Sorry, we were not able to find a shoe recommendation for you.";
}
    });