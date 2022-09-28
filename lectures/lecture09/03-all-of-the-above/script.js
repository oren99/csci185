const changeColor = () => {
    document.querySelector('.panel').style.background = 'hotpink';
};

const changeTitle = () => {
    //what do we want to change?
    document.querySelector('h1').innerText = "words"
};

const addImage = () => {
    // adds the following image to each panel:
    // 1. what element do you want to select?
    // `<img src="https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg" />
    document.querySelector('#panel1').innerHTML = <img src="https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg"></img>;

};

const clearDiv = () => {
    // clears all of the panels of content
};