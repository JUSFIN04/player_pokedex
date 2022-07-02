class Pokemon {
    constructor(nameInput, abilitiesInput, speciesInput, heightInput, weightInput, typesInput) {
        this.name = nameInput;
        this.abilities = this.#cleanUpAbilities(abilitiesInput);
        this.species = speciesInput.name;
        this.height = heightInput;
        this.weight = weightInput;
        this.types = this.#cleanUpTypes(typesInput);
    }

    #cleanUpTypes(typeArr){
        //Should return a new array of Strings for the pokemon types
        //console.log(typeArr)
        let types = typeArr.map(element => element.type.name)
        return types;
    }

    #cleanUpAbilities(abilityArr){
        //Should return a new array of Strings for the abilites
        console.log(abilityArr);
        let abilites = abilityArr.map(element => element.ability.name)
        console.log(abilites);
        return abilites;
    }

    // #cleanUpSpecies(speciesArr){
    //     //Should return a new array of Strings for the species
    //     let species = speciesArr.Map(element => element.species)
    //     return species;
    // }
}

export default Pokemon;