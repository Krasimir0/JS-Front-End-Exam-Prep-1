function solve(arr) {
    const herosCount = arr.shift();
    let herosObj = {};

    for (let i = 0; i < herosCount; i++) {
        let [name, hp, bullets] = arr.shift().split(' ');
        hp = Number(hp);
        bullets = Number(bullets);
        herosObj[name] = { hp,  bullets}
    }
    
    let command = arr.shift();
    while (command !== "Ride Off Into Sunset") {
        command = command.split(" - ");
        if (command[0] === "FireShot") {
            let heroName = command[1];
            let targetName = command[2]
            if (herosObj[heroName].bullets > 0) {
                herosObj[heroName].bullets -= 1;
                console.log(`${heroName} has successfully hit ${targetName} and now has ${herosObj[heroName].bullets} bullets!`);
            } else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${targetName}!`);
            }
        } else if (command[0] === "TakeHit") {
            let heroName = command[1];
            let demage = Number(command[2]);
            let attacker = command[3];
            let leftHp = herosObj[heroName].hp - demage;
            if (leftHp > 0) {
                herosObj[heroName].hp -= demage;
                console.log(`${heroName} took a hit for ${demage} HP from ${attacker} and now has ${herosObj[heroName].hp} HP!`);
            } else {
                herosObj[heroName].hp -= demage;
                console.log(`${heroName} was gunned down by ${attacker}!`)
            }
        } else if (command[0] === "Reload") {
            let heroName = command[1];
            if (herosObj[heroName].bullets < 6) {
                let amauntBulletsNeeded =  6 - herosObj[heroName].bullets;
                herosObj[heroName].bullets += amauntBulletsNeeded;
                console.log(`${heroName} reloaded ${amauntBulletsNeeded} bullets!`);
            } else {
                console.log(`${heroName}'s pistol is fully loaded!`);
            }
        } else if (command[0] === "PatchUp") {
            let heroName = command[1];
            let heroHp = Number(command[2]);
            let newHeroHp = herosObj[heroName].hp + heroHp
            if (newHeroHp <= 100) {
                herosObj[heroName].hp += heroHp;
                console.log(`${heroName} patched up and recovered ${heroHp} HP!`);
            } else {
                console.log(`${heroName} is in full health!`);
            }
        }
        command = arr.shift();
    }

    Object.entries(herosObj).filter(heros => heros[1].hp > 0).forEach(hero => {
        console.log(`${hero[0]}\n HP: ${hero[1].hp}\n Bullets: ${hero[1].bullets}`);
    })
    
}

solve(["2",
   "Gus 100 0",
   "Walt 100 6",
   "FireShot - Gus - Bandit",
   "TakeHit - Gus - 100 - Bandit",
   "Reload - Walt",
   "Ride Off Into Sunset"]
)