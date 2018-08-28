var validateOption = {
    //debug: true, // debug mode
    ignore: ".ignore",
    onclick: false, //Validate checkboxes and radio buttons on click
    errorClass: "invalid",
    errorElement: "span",
    onfocusout: false,
    messages: {
        name: {
            required: "Введите имя"
        },
        email: {
            required: "Введите E-mail адрес"
        },
        phone: {
            required: "Введите телефон"
        },
        data: {
            required: "Введите дату"
        },
        number: {
            required: "Введите номер домика"
        }
    },

};

$(function() {

    var $form = $(".js-validate");
    // custom error messages
    jQuery.extend(jQuery.validator.messages, {
        required: "Поле не может быть пустым.",
        remote: "Поле заполнено неверно.",
        email: "Введите корректный E-mail адрес, например energoclub@gmail.com",

    });

    $form.each(function() { // <- selects every <form> on set
        // init validation plugin
        $(this).validate(validateOption);

        // prevent default form submitted
        $(this).on("submit", function(e) {
            e.preventDefault();
        });
    });

}); //ready