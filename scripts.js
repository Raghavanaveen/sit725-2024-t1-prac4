const cardList = [
    {
        title: "Buddy",
        image: "animal2.avif",
        link: "Learn more about Buddy",
        description: "Hi there! Have a wonderful day!"
    },
    {
        title: "Max",
        image: "animal3.avif",
        link: "Discover more about Max",
        description: "Hello! Meet Max, the friendly animal!"
    }
];

const submitForm = () => {
    let formData = {
        first_name: $('#first_name').val(),
        surname: $('#surname').val(),
        password_input: $('#password_input').val(),
        email_input: $('#email_input').val()
    };
    console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `<div class="col s4 center-align">
                                <div class="card">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator" src="${item.image}">
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title activator darkslategrey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                                        <p><a href="#">${item.link}</a></p>
                                    </div>
                                    <div class="card-reveal">
                                        <span class="card-title darkslategrey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                                        <p><a>${item.description}</a></p>
                                    </div>
                                </div>
                            </div>`;
        $("#card-section").append(itemToAppend);
    });
};

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#submit-form-btn').click(() => {
        submitForm();
    });
    addCards(cardList);
    $('#click-me-btn').click(() => { // Adding click event for the button
        alert("Thanks for clicking! Have a fantastic day!");
    });
    $('.modal').modal();
});
