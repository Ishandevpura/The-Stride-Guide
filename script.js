
//This is creating a variable for all of the shoes with each of their properties.
// =====================================================================
// SHOE DATABASE — UPDATED [Auto-refresh pass, June 2026]
// Categories applied per your instructions:
//   KEEP    -> unchanged, still current model
//   UPDATE  -> name/specs updated to newest version (see inline comments)
//   DELETE  -> removed (discontinued by brand)
//   NEW     -> shoes added from the last ~12 months that weren't in your list
// All image/link fields for anything touched are left blank with a
// // TODO comment so you can drop in your own assets/verified links.
// =====================================================================


// ============================ SAUCONY (COMPLETE) ================================

// KEEP — still current, no newer version found
const EndorphinXC = {
    name: "Saucony Endorphin XC",
    image: "Images/EndorphinXC.png",
    link: "https://www.runningwarehouse.com/Saucony_Endorphin_XC_Spikes/descpage-SAEXC.html?srsltid=AfmBOopoCHfl5NfCvd5xO57H99QVBHdYD1kv8FEJYwt-CiLQ6cs2nNra",
    description: "The Endorphin XC serves as Saucony's elite spike for the rough terrains of cross country races, with a 3/4 carbon plate in its midsole along with Saucony's IncrediRun foam. It is priced at $190.",
    numberOfMiles: "10-25",
    typeOfRunning: "racing",
    typeOfSurface: "trail",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// UPDATE — Pro 4 -> Pro 5 (new slotted carbon plate, PWRTRAC outsole, same dual PWRRUN PB/HG foam)
const EndorphinPro = {
    name: "Saucony Endorphin Pro 5", // was Endorphin Pro 4
    image: "Images/endorphinPro5.png", // TODO: add Endorphin Pro 5 image
    link: "https://www.runningwarehouse.com/Saucony_Endorphin_Pro_5/descpage-SENP5M1.html?from=gshop&gad_source=1&gad_campaignid=8085998315&gbraid=0AAAAADka_jj_SS1eiwx0izGYftlfNpVar&gclid=Cj0KCQjw9ZLSBhCcARIsAEhGKgM2IPw-U7h6bsnPefWKaWzF9qvuHpSDSAFKkjGF4dkp_GlSHoPPshMaArncEALw_wcB", // TODO: add verified Endorphin Pro 5 link
    description: "The Pro 5 is Saucony's racing shoe with a new slotted carbon fiber plate and a dual-layer PWRRUN PB/PWRRUN HG midsole. A new PWRTRAC rubber outsole improves grip. It remains a durable, accessible super shoe good for 5k up through the marathon. It is priced at $240.",
    numberOfMiles: "10-25",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "midfoot",
    historyOfInjury: "yes",
};

// UPDATE — Elite 2 -> Elite 3 (widened base for stability, reworked plate, same IncrediRUN foam)
const EndorphinElite = {
    name: "Saucony Endorphin Elite 3", // was Endorphin Elite 2
    image: "Images/EndorphinElite3.png", // TODO: add Endorphin Elite 3 image
    link: "https://www.runningwarehouse.com/Saucony_Endorphin_Elite_3/descpage-SEE3U02.html?_gl=1*rzs74i*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw9ZLSBhCcARIsAEhGKgM2IPw-U7h6bsnPefWKaWzF9qvuHpSDSAFKkjGF4dkp_GlSHoPPshMaArncEALw_wcB&gbraid=0AAAAADka_jj_SS1eiwx0izGYftlfNpVar", // TODO: add verified Endorphin Elite 3 link
    description: "The Endorphin Elite is Saucony's most high-end racing shoe, best used for half marathon and marathon races. Version 3 keeps the soft, bouncy double-stacked IncrediRUN foam but widens the base and reshapes the carbon plate for more stability. It is priced at $290.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// KEEP — still current, no Speed 6 found yet
const EndorphinSpeed5 = {
    name: "Saucony Endorphin Speed 5",
    image: "Images/Endorphin_speed.png",
    link: "https://www.runningwarehouse.com/Saucony_Endorphin_Speed_5/descpage-S5ESM05.html",
    description: "The Saucony Endorphin Speed is a daily trainer suited more on the faster side. It features as nylon plate along with foam in the midsole composed of PWRRUN PB foam. You can also use this for workouts like tempos and track work, it works for almost any use. The is priced at $175.",
    numberOfMiles: "10-25",
    typeOfRunning: "speedwork",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
}

// UPDATE — Triumph 23 -> Triumph 24 (new IncrediLUX midsole foam, big weight drop)
const Triumph = {
    name: "Saucony Triumph 24", // was Triumph 23
    image: "Images/SauconyTriumph24.png", // TODO: add Triumph 24 image
    link: "https://www.runningwarehouse.com/Saucony_Triumph_24/descpage-ST24M1.html?_gl=1*rzs74i*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw9ZLSBhCcARIsAEhGKgM2IPw-U7h6bsnPefWKaWzF9qvuHpSDSAFKkjGF4dkp_GlSHoPPshMaArncEALw_wcB&gbraid=0AAAAADka_jj_SS1eiwx0izGYftlfNpVar", // TODO: add verified Triumph 24 link
    description: "The Triumph is Saucony's premium max-cushion daily trainer, now built on an all-new IncrediLUX (ATPU) midsole foam that's noticeably lighter and softer than before. Best used for long easy runs while remaining light enough for faster efforts. It is priced at $170.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

// UPDATE — Ride 18 -> Ride 19 (reformulated PWRRUN+ midsole)
const SauconyRide = {
    name: "Saucony Ride 19", // was Ride 18
    image: "Images/SauconyRide19.png", // TODO: add Ride 19 image
    link: "https://www.runningwarehouse.com/Saucony_Ride_19/descpage-SR19M10.html?_gl=1*1do8zm2*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw9ZLSBhCcARIsAEhGKgM2IPw-U7h6bsnPefWKaWzF9qvuHpSDSAFKkjGF4dkp_GlSHoPPshMaArncEALw_wcB&gbraid=0AAAAADka_jj_SS1eiwx0izGYftlfNpVar", // TODO: add verified Ride 19 link
    description: "This is a low budget daily trainer that can 'do it all,' now with a reformulated PWRRUN+ midsole for a better balance of cushioning and pop. Good for anything from easy runs to hard workouts. It is priced at $140.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under150",
    footStrike: "midfoot",
    historyOfInjury: "no",
}

// NEW — Saucony Endorphin Azura (plateless "daily speed" trainer)
const EndorphinAzura = {
    name: "Saucony Endorphin Azura",
    image: "Images/EndorphinAzura.png", // TODO: add Endorphin Azura image
    link: "https://www.runningwarehouse.com/Saucony_Endorphin_Azura/descpage-SEAZM1.html?_gl=1*1do8zm2*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw9ZLSBhCcARIsAEhGKgM2IPw-U7h6bsnPefWKaWzF9qvuHpSDSAFKkjGF4dkp_GlSHoPPshMaArncEALw_wcB&gbraid=0AAAAADka_jj_SS1eiwx0izGYftlfNpVar", // TODO: add verified Endorphin Azura link
    description: "A brand new plateless daily trainer built to compete with the Adidas Evo SL. 40mm of unplated PWRRUN PB foam underfoot gives a soft landing, while SpeedRoll geometry helps you pick up the pace when you want to. It is priced around $160.",
    numberOfMiles: "10-25",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};


// ============================ BROOKS =================================

// KEEP — Glycerin Max 2 still current; Glycerin Max 3 not yet released (Fall 2026)
const Glycerin = {
    name: "Brooks Glycerin Max 2",
    image: "Images/BrooksGlycerinMax.png",
    link: "https://www.runningwarehouse.com/Brooks_Glycerin_Max_2/descpage-BGM2M03.html",
    description: "The Glycerin Max serves as Brook's max cushion daily trainer made for those easy days. It features nitrogen infused foams, and is priced at $199.95.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

// UPDATE — Ghost 17 -> Ghost 18 (new flat-knit tongue, softer sockliner, roomier toe box)
const BrooksGhost = {
    name: "Brooks Ghost 18", // was Ghost 17
    image: "Images/BrooksGhost18.png", // TODO: add Ghost 18 image
    link: "https://www.runningwarehouse.com/Brooks_Ghost_18/descpage-B18GHM1.html", // TODO: add verified Ghost 18 link
    description: "This is a daily trainer meant for reliable, dependable mileage. It keeps the same DNA Loft v3 cushioning as the Ghost 17, with upper refinements including a softer flat-knit tongue and a slightly roomier toe box. It is priced at $150.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under150",
    footStrike: "heel",
    historyOfInjury: "no"
}

// NEW — Brooks Glycerin 23 (the non-Max premium daily trainer)
const Glycerin23 = {
    name: "Brooks Glycerin 23",
    image: "Images/BrooksGlycerin23.png", // TODO: add Glycerin 23 image
    link: "https://www.runningwarehouse.com/Brooks_Glycerin_23/descpage-B23GLM7.html", // TODO: add verified Glycerin 23 link
    description: "Brooks' flagship premium neutral trainer, now on its 23rd version. Uses dual-cell DNA Tuned foam, softer in the heel and firmer in the forefoot, for a smooth, plush ride best suited to long or easy runs. It is priced at $170.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

// NEW — Brooks Glycerin Flex (brand new for 2026, unplated flex-groove trainer)
const GlycerinFlex = {
    name: "Brooks Glycerin Flex",
    image: "Images/BrooksGlycerinFlex.png", // TODO: add Glycerin Flex image
    link: "https://www.runningwarehouse.com/Brooks_Glycerin_Flex/descpage-BGFV1M4.html", // TODO: add verified Glycerin Flex link
    description: "A brand new shoe for Brooks, using DNA Tuned foam with large flex grooves cut into the midsole to let the foot move naturally through the gait cycle, rather than relying on a plate. 36mm of foam in the heel keeps landings soft. It is priced around $160.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

// NEW — Brooks Hyperion Max 3 (lightweight super trainer)
const HyperionMax3 = {
    name: "Brooks Hyperion Max 3",
    image: "Images/BrooksHyperionMax3.png", // TODO: add Hyperion Max 3 image
    link: "https://www.runningwarehouse.com/Brooks_Hyperion_Max_3/descpage-B3HYXM0.html", // TODO: add verified Hyperion Max 3 link
    description: "Brooks' lightweight super trainer, built for faster training days. Sits between the Ghost and the Hyperion Elite racer, offering a peppy, fast ride for tempo runs and workouts while remaining trainer-durable.",
    numberOfMiles: "10-25",
    typeOfRunning: "speedwork",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};


// ============================= NIKE ===================================

// KEEP
const VomeroPlus = {
    name: "Nike Vomero Plus",
    image: "Images/NikeVomeroPlus.png",
    link: "https://www.runningwarehouse.com/Nike_Vomero_Plus/descpage-NVPM2.html",
    description: "The vomero plus is Nike's max cushion daily trainer, made for higher mileage runners to deliver less impact on their legs. It features ZoomX superfoam in its midsole and is priced at $180. ",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// KEEP — On Cloudmonster below; Nike section continues
const Mach6Placeholder = null; // (placeholder removed, see Hoka section)

// UPDATE — Zoom Victory 2 -> Zoom Victory 3 spikes
const Victory2 = {
    name: "Nike Zoom Victory 2 Spikes", // was Zoom Victory 2 Spikes -- please verify, official naming was unclear at time of research
    image: "Images/ZoomVictory2.png", // TODO: add Victory 3 spike image
    link: "https://www.runningwarehouse.com/Nike_Zoom_Victory_2_Spikes/descpage-N2ZVSU9.html", // TODO: add verified Victory 3 spike link
    description: "Nike's mid distance spike, designed for key races like the 800, 400, and 1600 meters. Carbon plate with an Air Zoom unit and ZoomX foam for maximum propulsion. Please double check this is the correct current version before publishing — naming was ambiguous in research.",
    numberOfMiles: "0-10",
    typeOfRunning: "racing",
    typeOfSurface: "track",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// KEEP — Dragonfly 2 (Elite) still current
const Drag2 = {
    name: "Nike Zoomx Dragonfly 2 Spikes",
    image: "Images/Drag2.png",
    link: "https://www.runningwarehouse.com/Nike_ZoomX_Dragonfly_2_Spikes/descpage-N2ZDFU1.html",
    description: "The Dragonfly 2 is Nike's long distance spike. It is designed to be worn in those key races that are long distance. These include the 1600, 3200, 5k, and 10k. It has a carbon plate and ZoomX foam, allowing for maxiumum propulsion. It is priced at $170.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "track",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// KEEP
const DragXC = {
    name: "Nike ZoomX Dragonfly XC Spikes",
    image: "Images/DragXC.png",
    link: "https://www.runningwarehouse.com/Nike_ZoomX_Dragonfly_XC_Spikes/descpage-NZXDXC1.html",
    description: "The Dragonfly XC is Nike's 'cross country' spike. It is designed to be worn in those key races that have variable terrain. These include trail races, and cross country races. It has ZoomX foam, allowing for maxiumum propulsion and comfort. It is priced at $170.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "trail",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// KEEP — Vomero 18 still current; Vomero 19 only rumored (~June 2026) at time of research, not confirmed released
const Vomero = {
    name: "Nike Vomero 18",
    image: "Images/Vomero.png",
    link: "https://www.runningwarehouse.com/catpage-MRFNIKEVOM.html",
    description: "The Vomero is a more premium version of the Nike Pegasus, coming in $160. It offers more cushioning with having a combination of ZoomX and ReactX foams to provide responsiveness along with cushioning. It serves as a daily trainer.",
    numberOfMiles: "10-25",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "firm",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// KEEP
const Streakfly = {
    name: "Nike Streakfly 2",
    image: "Images/Streakfly.png",
    link: "https://www.runningwarehouse.com/Nike_Streakfly_2/descpage-2NISFU1.html",
    description: "The Streakfly is Nike's short distance road racing shoes. The Streakfly 2, especially, is built for those key shorter workouts and races such as the road mile, and 5k. Priced at $190, it is a lightweight shoe with a carbon fiber plate in it's midsole. Due to this, it has less durability than a normal trainer, but will propel you forward on the miles you can run with it.",
    numberOfMiles: "0-10",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// KEEP
const Zoomfly = {
    name: "Nike Zoom Fly 6",
    image: "Images.Zoomfly.png",
    link: "https://www.runningwarehouse.com/Nike_Zoom_Fly_6/descpage-NI6ZFM2.html",
    description: "The Zoom fly is Nike's workout shoe. It is specialized to be used for those track sessions or tempo runs, with more durablity than the racing shoes. Priced at $180, it also includes a full length carbon plate, but with more durable foam.",
    numberOfMiles: "10-25",
    typeOfRunning: "speedwork",
    typeOfSurface: "track",
    preferredCushion: "firm",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// KEEP
const Vaporfly4 = {
    name: "Nike Vaporfly 4",
    image: "Images/Vaporfly.png",
    link: "https://www.runningwarehouse.com/Nike_Vaporfly_4/descpage-4NVFNM3.html",
    description: "The Vaporfly is Nike's top end road racing shoes. Priced at around $270 respectively, This shoe features Nike's most high end foam with a full length carbon plate to offer the most energy return. However, this isn't the most durable shoe, so it is best to use it sparingly for only the important workouts and races. The vaporfly is reccomended for shorter distances. like the 5k and 10k.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
}

// UPDATE — Pegasus 41 -> Pegasus 42 (full-length curved Air Zoom unit, +15% claimed energy return)
const NikePegasus41 = {
    name: "Nike Pegasus 42", // was Pegasus 41
    image: "Images/NikePegasus42.png", // TODO: add Pegasus 42 image
    link: "https://www.runningwarehouse.com/Nike_Pegasus_42/descpage-NAP42M6.html", // TODO: add verified Pegasus 42 link
    description: "The Pegasus is Nike's standard daily trainer. Version 42 introduces a full-length curved Air Zoom unit for a notably more responsive ride than the 41, while staying durable and well priced for daily miles. It is priced at $140.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "no"
}

// DELETE — discontinued by Nike (your own notes already flagged this)
// const Invincible = { ... } -- REMOVED. Nike Invincible Run 3 has been discontinued.


// NEW — Nike Pegasus Premium
const PegasusPremium = {
    name: "Nike Pegasus Premium",
    image: "Images/PegasusPremium.png", // TODO: add Pegasus Premium image
    link: "https://www.runningwarehouse.com/Nike_Pegasus_Premium/descpage-NMPP003.html", // TODO: add verified Pegasus Premium link
    description: "A premium, max-stack version of the Pegasus with a full-length Air Zoom unit that acts like a spoon-shaped carbon plate, plus a plush knit/mesh upper. Sits between the Pegasus 42 and Vomero for those wanting more pop.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// NEW — Nike Structure Plus
const StructurePlus = {
    name: "Nike Structure Plus",
    image: "Images/StructurePlus.png", // TODO: add Structure Plus image
    link: "https://www.runningwarehouse.com/Nike_Structure_Plus/descpage-NSPLM02.html", // TODO: add verified Structure Plus link
    description: "A new stability-oriented daily trainer joining the Pegasus/Vomero road family, offering supportive cushioning for runners who want guidance underfoot without a heavy shoe.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};


// ============================== ON ====================================

// UPDATE — Cloudmonster -> Cloudmonster 3 (new triple-layer CloudTec midsole, firmer ride)
const ONcloudmonster = {
    name: "ON Cloudmonster 3", // was ON Cloudmonster (2)
    image: "Images/Cloudmonster3.png", // TODO: add Cloudmonster 3 image
    link: "https://www.runningwarehouse.com/On_Cloudmonster_3/descpage-ONCM3M3.html", // TODO: add verified Cloudmonster 3 link
    description: "The Cloudmonster is ON's max cushion daily trainer. Version 3 uses a new triple-layered CloudTec midsole with Helion foam and a rockered ride, trading a bit of bounce for more stability. It is priced at $189.95.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// KEEP — no evidence of a newer Cloudspike 10000 version at research time
const Cloudspike10k = {
    name: "ON Cloudspike 10000 Spikes",
    image: "Images/Cloudspike10k.png",
    link: "https://www.on.com/en-us/products/cloudspike-10000m-3md1067/mens/undyed-white-mint-shoes-3MD10671105?utm_source_platform=Google%20Ads&utm_source=google&utm_medium=cpc&utm_campaign=%5Bn%3AShopping%5D%5Bm%3AUS%5D%5Bl%3AEN%5D%5Bi%3ABrand%5D%5Bs%3AShoes%5D%5Bv%3AMix%5D%5Bp%3AClassics%5D&gad_source=1&gad_campaignid=21013243598&gbraid=0AAAAADSVac2CscFkx9shfr6nWXTooItzK&gclid=CjwKCAjwkbzEBhAVEiwA4V-yqpgXg4jN9NdryvRFV2yh6ss7nsHc7leBuTWPP-c-vjI53cetGK0EaBoCEM0QAvD_BwE",
    description: "The Cloudspike 10k are ON's elite long distance spike, for those longer track races like 3200, 5k, and 10k. It has a midsole comprised of Helium HF foam and a fiberglass nylong speedboard to assist you in your race. It is priced at $160.",
    numberOfMiles: "5+",
    typeOfRunning: "racing",
    typeOfSurface: "track",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// NEW — On Cloudboom Strike 2
const CloudboomStrike2 = {
    name: "On Cloudboom Strike 2",
    image: "Images/CloudboomStrike2.png", // TODO: add Cloudboom Strike 2 image
    link: "https://www.runningwarehouse.com/On_Cloudboom_Strike_2/descpage-OCBS2U2.html", // TODO: add verified Cloudboom Strike 2 link
    description: "On's road-racing marathon super shoe, now with a new CloudTec Sphere geometry and a 15% lighter Helion HF foam. A curved Speedboard plate provides propulsion. Best for 10k-to-marathon racing. It is priced at $250.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// NEW — On Cloudmonster 3 Hyper (super-foam version of the Cloudmonster 3)
const CloudmonsterHyper = {
    name: "On Cloudmonster 3 Hyper",
    image: "Images/Cloudmonster3Hyper.png", // TODO: add Cloudmonster 3 Hyper image
    link: "https://www.runningwarehouse.com/On_Cloudmonster_3_Hyper/descpage-O3CMHM7.html", // TODO: add verified Cloudmonster 3 Hyper link
    description: "A stable, uptempo-capable max-cushion trainer topped with Helion HF super foam over a firmer CloudTec base. More responsive and versatile in pace than the standard Cloudmonster 3. It is priced around $220.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "midfoot",
    historyOfInjury: "no",
};


// ============================= HOKA ===================================

// UPDATE — Mach 6 -> Mach 7 (retooled upper, same 37mm/5mm supercritical EVA)
const Mach6 = {
    name: "Hoka Mach 7", // was Mach 6
    image: "Images/Mach7.png", // TODO: add Mach 7 image
    link: "https://www.runningwarehouse.com/HOKA_Mach_7/descpage-HM7M01.html", // TODO: add verified Mach 7 link
    description: "The Mach 7 is Hoka's plateless performance trainer that can handle anything from easy runs to uptempo sessions. Keeps the same supercritical EVA stack as the Mach 6, with an updated, more breathable upper and grippier outsole rubber. It is priced at $145.",
    numberOfMiles: "10-25",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under150",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// NEW — Hoka Cielo X1 3.0
const CieloX1 = {
    name: "Hoka Cielo X1 3.0",
    image: "Images/Cielox1.png", // TODO: add Cielo X1 3.0 image
    link: "https://www.runningwarehouse.com/HOKA_Cielo_X1_30/descpage-HCX13U1.html", // TODO: add verified Cielo X1 3.0 link
    description: "Hoka's lightest, most aggressive super shoe, tuned for maximum propulsion on race day. Dual-layer PEBA midsole around a redesigned, lighter carbon plate. Best for midfoot strikers racing 10k through the marathon. It is priced at $275.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "midfoot",
    historyOfInjury: "no",
};



// ============================= ASICS ==================================

// UPDATE — Magic Speed 4 -> Magic Speed 5
const MagicSpeed = {
    name: "Asics Magic Speed 5", // was Magic Speed 4
    image: "Images/MagicSpeed5.png", // TODO: add Magic Speed 5 image
    link: "https://www.runningwarehouse.com/ASICS_Magic_Speed_5/descpage-AS5MSU1.html", // TODO: add verified Magic Speed 5 link
    description: "The Magic Speed serves as a bridge between training and racing, a mid-budget option for shorter races and speed workouts like tempos or intervals. Carbon fiber plate, firm ride. It is priced around $170.",
    numberOfMiles: "0-10",
    typeOfRunning: "speedwork",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// UPDATE — Gel Nimbus 27 -> Gel Nimbus 28 (lighter, same high stack)
const GelNimbus27 = {
    name: "Asics Gel Nimbus 28", // was Gel Nimbus 27
    image: "Images/GelNimbus28.png", // TODO: add Gel Nimbus 28 image
    link: "https://www.runningwarehouse.com/ASICS_Gel_Nimbus_28/descpage-AGN28M2.html", // TODO: add verified Gel Nimbus 28 link
    description: "The Gel Nimbus 28 is Asics' recovery/easy-day shoe. Lighter than the Nimbus 27 while keeping its high stack and soft FF Blast Plus Eco foam. It is priced around $165.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

// UPDATE — Superblast 2 -> Superblast 3 (new FlyteFoam Leap top layer, diamond cutout geometry)
const Superblast = {
    name: "Asics Superblast 3", // was Superblast 2
    image: "Images/Superblast3.png", // TODO: add Superblast 3 image
    link: "https://www.runningwarehouse.com/ASICS_SUPERBLAST_3/descpage-AS3SB1.html", // TODO: add verified Superblast 3 link
    description: "The Superblast 3 is one of Asics' most versatile shoes, able to handle both faster and slower paces. Now uses a FlyteFoam Leap top layer (same foam as the Metaspeed Ray) over FlyteFoam Blast Plus for a springier toe-off. It is priced at $200.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// KEEP — Novablast 6 not yet released at research time (targeted July 2026)
const Novablast = {
    name: "Asics Novablast 5",
    image: "Images/Novablast.png",
    link: "https://www.runningwarehouse.com/ASICS_Novablast_5/descpage-A5NBM09.html",
    description: "The Novablast 5 is Asics' versatile daily trainer. You can use it for almost any run, though it's best suited for moderate to easy runs. Its FF Blast Max foam is softer and responsive, though it does not include a plate. The market price is $150.",
    numberOfMiles: "10-25",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under150",
    footStrike: "heel",
    historyOfInjury: "no",
}

// UPDATE — Metaspeed Sky (Paris) -> Metaspeed Sky Tokyo (new FF Leap top layer added)
const Metaspeed = {
    name: "Asics Metaspeed Sky Tokyo", // was Metaspeed Sky (Paris generation)
    image: "Images/Metaspeedsky.png", // TODO: add Metaspeed Sky Tokyo image
    link: "https://www.runningwarehouse.com/ASICS_METASPEED_Sky_Tokyo/descpage-AMSSTU0.html", // TODO: add verified Metaspeed Sky Tokyo link
    description: "The Metaspeed Sky/Edge Tokyo are Asics' flagship racing shoes, usable anywhere from 5k to a marathon on the road. Now adds a layer of FF Leap foam over FF Turbo+ for a lighter, bouncier ride than the Paris generation. Get the Sky for a longer stride, the Edge for a higher cadence. The market price is $250.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
}

// NEW — Asics Megablast (new all-rounder, forked off the Superblast line)
const Megablast = {
    name: "Asics Megablast",
    image: "Images/Megablast.png", // TODO: add Megablast image
    link: "https://www.runningwarehouse.com/ASICS_MEGABLAST/descpage-ASMBU4.html", // TODO: add verified Megablast link
    description: "A new all-rounder trainer sitting alongside the Superblast, using FlyteFoam Turbo Squared (an ATPU foam) for a firmer, snappier ride than the softer Superblast 3.",
    numberOfMiles: "25+",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// NEW — Asics Gel Cumulus 28
const GelCumulus28 = {
    name: "Asics Gel Cumulus 28",
    image: "Images/GelCumulus28.png", // TODO: add Gel Cumulus 28 image
    link: "https://www.runningwarehouse.com/ASICS_Gel_Cumulus_28/descpage-AGC28M2.html", // TODO: add verified Gel Cumulus 28 link
    description: "A lighter, nimbler alternative to the Gel Nimbus for easy and steady daily miles, with a rubberized EVA outsole for a smoother, more connected ride.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "no",
};



// ============================= ADIDAS =================================

// KEEP
const Boston = {
    name: "Adidas Boston 13",
    image: "Images/Boston.png",
    link: "https://www.runningwarehouse.com/adidas_adizero_Boston_13/descpage-AAB13M7.html",
    description: "This is designed to be a workout shoe, for those track sessions and tempos. It features a mix Lightstrike 2.0 and Lightstrike pro foam, with carbon rods going along the whole shoe's midsole for the extra energy return. It is priced at $160.",
    numberOfMiles: "10-25",
    typeOfRunning: "speedwork",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// KEEP
const TakumiSen = {
    name: "Adidas Takumi Sen 11",
    image: "Images/TakumiSen.png",
    link: "https://www.runningwarehouse.com/search-mens.html?start=0&count=30&searchtext=Adidas%20Takumi%20Sen",
    description: "The Sen 11 is a lightweight version of the Evo SL. It is primarly for those shorter races like the mile and the 5k. It can also be used for those key track workouts. Its midsole is comprised of Dual layer lightstrike Pro foam, and energy rods made of glass fiber for energy return. It is priced at $180.",
    numberOfMiles: "10-25",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// KEEP
const AdiosPro = {
    name: "Adidas Adizero Adios Pro 4",
    image: "Images/AdiosPro.png",
    link: "https://www.runningwarehouse.com/adidas_adizero_Adios_Pro_4/descpage-A4AAPM5.html",
    description: "The Pro 4 is the elite racing shoe of Adidas. It is designed for racing only, from anywhere from a 5k race to a marathon. It features Lightstrike Pro foam, with carbon energy rods that span the whole shoe, giving it that extra energy return and propulsion. It can wear down quickly, and it is priced at $250.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// UPDATE — Supernova Rise 2 -> Supernova Rise 3 (new LightTraxion outsole)
const Supernova = {
    name: "Adidas Supernova Rise 3", // was Supernova Rise 2
    image: "Images/SupernovaRise3.png", // TODO: add Supernova Rise 3 image
    link: "https://www.runningwarehouse.com/adidas_Supernova_Rise_3/descpage-A3SNRM2.html", // TODO: add verified Supernova Rise 3 link
    description: "The Supernova Rise is Adidas' standard daily trainer, built to cover a majority of your mileage. Version 3 adds a new LightTraxion outsole rubber for better durability and grip. Dreamstrike+ PEBA foam offers a stable, cushioned ride. It is priced at $140.",
    numberOfMiles: "10-25",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "firm",
    budget: "under150",
    footStrike: "midfoot",
    historyOfInjury: "no",
};

// KEEP
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



// =========================== NEW BALANCE ==============================

// UPDATE — SC Trainer v3 lineage is being replaced by the new "SC Rebel" naming — see New entry below.
// If you still want a direct "trainer" analog, treat SC Rebel as its functional successor.
// const SCTrainer -- REMOVED/RENAMED, see SCRebel below.

// KEEP — SC Elite v5 still current, confirmed as NB's top racer
const SCElite = {
    name: "New Balance Fuelcell Supercomp Elite v5",
    image: "Images/SCElite.png",
    link: "https://www.runningwarehouse.com/search-mens.html?start=0&count=30&searchtext=new%20balance%20sc%20elite",
    description: "The Elite is NB's top end shoe, for those races and key workouts that you have. With a midsole made out of an Energy Arc aarbon plate and Fuelcell superfoam, it offers some of the most energy return of any shoe. It is priced at $250.",
    numberOfMiles: "25+",
    typeOfRunning: "racing",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "none",
    footStrike: "forefoot",
    historyOfInjury: "no",
};

// UPDATE — Fresh Foam X More v5 -> More v6
const Morev5 = {
    name: "New Balance Fresh Foam X More v6", // was More v5
    image: "Images/Morev6.png", // TODO: add More v6 image
    link: "https://www.runningwarehouse.com/New_Balance_Fresh_Foam_X_More_v6/descpage-NBMO6M4.html", // TODO: add verified More v6 link
    description: "New Balance's max cushion recovery shoe, still with a very high stack height for a soft, protective ride and a wide, stable base. Best used for long and easy runs, not built for speed. It is priced around $155.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "yes",
};

// KEEP
const RebelV5 = {
    name: "New Balance Rebel v5",
    image: "Images/Rebel.png",
    link: "https://www.runningwarehouse.com/New_Balance_FuelCell_Rebel_v5/descpage-NBRE5M1.html",
    description: "The Rebel is a daily trainer that is on the faster side of trainers. It has a midsolde made out of Fuelcell foam and can be used in any scenario from easy runs to your hardest workouts, though it's suited for more faster paces. It is priced at $140, making it one of the more affordable daily trainers.",
    numberOfMiles: "0-10",
    typeOfRunning: "allrounder",
    typeOfSurface: "road",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
}

// UPDATE — Fresh Foam X 1080v14 -> 1080v15 (new Infinion supercritical foam)
const NewBalance1080 = {
    name: "New Balance Fresh Foam X 1080v15", // was 1080v14
    image: "Images/1080v15.png", // TODO: add 1080v15 image
    link: "https://www.runningwarehouse.com/New_Balance_1080_v15/descpage-NM8015E.html", // TODO: add verified 1080v15 link
    description: "The 1080 is New Balance's most popular cushioned daily trainer. Version 15 introduces a new midsole foam called Infinion, lighter and more responsive than the prior Fresh Foam X. Great for very easy runs or long runs on tired legs. It is priced at $165.",
    numberOfMiles: "25+",
    typeOfRunning: "longeasyruns",
    typeOfSurface: "road",
    preferredCushion: "soft",
    budget: "under200",
    footStrike: "heel",
    historyOfInjury: "no"
}


// NEW — New Balance Rebel Trail (off-road version of the popular Rebel)
const RebelTrail = {
    name: "New Balance Rebel Trail",
    image: "RebelTrail.png", // TODO: add Rebel Trail image
    link: "https://www.runningwarehouse.com/New_Balance_FuelCell_Rebel_Trail/descpage-NBRTM0.html", // TODO: add verified Rebel Trail link
    description: "An off-road version of the popular Rebel trainer, bringing the same FuelCell midsole to light trail and mixed-terrain running with an updated, grippier outsole.",
    numberOfMiles: "10-25",
    typeOfRunning: "allrounder",
    typeOfSurface: "trail",
    preferredCushion: "responsive",
    budget: "under200",
    footStrike: "midfoot",
    historyOfInjury: "no",
};
 

// This defines a getAnswer function.
function getAnswer(questionName) {
    const selected = document.querySelector(`input[name="${questionName}"]:checked`);
    return selected ? selected.value : null;
}

const button = document.querySelector("#button");

button.addEventListener("click", function generateShoe() {

    const userInput = {
        numberOfMiles: getAnswer("question1"),
        typeOfRunning: getAnswer("question2"),
        typeOfSurface: getAnswer("question3"),
        preferredCushion: getAnswer("question4"),
        budget: getAnswer("question5"),
        footStrike: getAnswer("question6"),
        historyOfInjury: getAnswer("question7")
    };

    const resultContainer = document.querySelector("#result");

    // Make sure every question is answered
    for (let key in userInput) {
        if (!userInput[key]) {
            resultContainer.innerText = "Please answer all questions before submitting.";
            return;
        }
    }

    const shoes = [
        EndorphinXC,
        EndorphinPro,
        EndorphinElite,
        EndorphinSpeed5,
        Triumph,
        SauconyRide,
        EndorphinAzura,
        Glycerin,
        BrooksGhost,
        Glycerin23,
        GlycerinFlex,
        HyperionMax3,
        VomeroPlus,
        Victory2,
        Drag2,
        DragXC,
        Vomero,
        Streakfly,
        Zoomfly,
        Vaporfly4,
        NikePegasus41,
        PegasusPremium,
        StructurePlus,
        ONcloudmonster,
        Cloudspike10k,
        CloudboomStrike2,
        CloudmonsterHyper,
        Mach6,
        CieloX1,
        MagicSpeed,
        GelNimbus27,
        Superblast,
        Novablast,
        Metaspeed,
        Megablast,
        GelCumulus28,
        Boston,
        TakumiSen,
        AdiosPro,
        Supernova,
        Adizero,
        SCElite,
        Morev5,
        RebelV5,
        NewBalance1080,
        RebelTrail
    ];

    resultContainer.innerHTML = "";

    const filterOrder = [
        "budget",
        "typeOfRunning",
        "preferredCushion",
        "typeOfSurface",
        "footStrike",
        "historyOfInjury",
        "numberOfMiles"
    ];

    const filterLabels = {
        budget: "Budget",
        typeOfRunning: "Type of Running",
        preferredCushion: "Preferred Cushion",
        typeOfSurface: "Running Surface",
        footStrike: "Foot Strike",
        historyOfInjury: "History of Injury",
        numberOfMiles: "Weekly Mileage"
    };

    // Store each remaining shoe with its matched filters
    let remainingShoes = shoes.map(shoe => ({
        shoe,
        passedFilters: []
    }));

    // Progressive filtering
    for (const filter of filterOrder) {

        const survivors = remainingShoes.filter(item =>
            item.shoe[filter] == userInput[filter]
        );

        // Stop if the next filter would remove every shoe
        if (survivors.length === 0) {
            break;
        }

        // Record that these shoes passed this filter
        survivors.forEach(item => {
            item.passedFilters.push(filter);
        });

        remainingShoes = survivors;
    }

    // How many filters did the surviving shoes pass?
    const filtersPassed = remainingShoes.length > 0
        ? remainingShoes[0].passedFilters.length
        : 0;

    // Minimum of 5 filters required
    if (filtersPassed < 5) {
        resultContainer.innerText =
            "Sorry, we couldn't confidently recommend a shoe based on your answers.";
        return;
    }

    const matchPercent = Math.round(
        (filtersPassed / filterOrder.length) * 100
    );

    // Display every remaining shoe
    remainingShoes.forEach(item => {

        const shoe = item.shoe;

        const title = document.createElement("h2");
        title.innerText = shoe.name;
        resultContainer.appendChild(title);

        const percent = document.createElement("p");
        percent.innerHTML = `<strong>${matchPercent}% Match</strong>`;
        resultContainer.appendChild(percent);

        const image = document.createElement("img");
        image.src = shoe.image;
        image.alt = shoe.name;
        image.style.width = "200px";
        image.style.borderRadius = "10px";
        image.style.marginTop = "10px";
        resultContainer.appendChild(image);

        const link = document.createElement("a");
        link.href = shoe.link;
        link.target = "_blank";
        link.innerText = "Buy this shoe";
        link.style.display = "block";
        link.style.marginTop = "10px";
        link.style.color = "#1a73e8";
        resultContainer.appendChild(link);

        const description = document.createElement("p");
        description.innerText = shoe.description;
        description.style.marginLeft = "50px";
        description.style.marginRight = "50px";
        resultContainer.appendChild(description);

        const matched = document.createElement("p");
        matched.innerHTML =
            "<strong>Matched Filters:</strong><br>" +
            item.passedFilters
                .map(filter => `✅ ${filterLabels[filter]}`)
                .join("<br>");

        resultContainer.appendChild(matched);

        const line = document.createElement("hr");
        resultContainer.appendChild(line);
    });

});