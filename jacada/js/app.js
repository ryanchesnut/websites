

(function () {
    let data = '';
    $.ajax({
        url: 'js/customerData.json',
        dataType: 'json',
        success: function (data) {
            let JSONdata = JSON.stringify(data);
            for (var i = 0; i < data.customers.length; i++) {
                let pic = data.customers[i].profilePicture;
                let name = data.customers[i].name;
                let email = data.customers[i].email;
                let phoneNumber = data.customers[i].phoneNumber;
                let company = data.customers[i].company;
                let html = '<li id="customer-' + i
                    + '"><div class="customer-container"><div class="profile-pic"><img src=img/'
                    + pic +
                    ' class="w3-card-4" height="70px" ></div> &nbsp;<div class="customer-name">'
                    + name +
                    ''
                    + '<button class="w3-button w3-blue" id=button-' + i
                    + '> About Me </button></div>' +
                    '</div></li>';
                $('#customers').append($(html));
                html = '<div id=info-' + i +
                    ' style="display:none"><ul><li>' +
                    'Phone: ' + phoneNumber +
                    '</li><li>Email: ' + email +
                    '</li><li>Company: ' + company +
                    '</li></ul></div>';
                $('#customer-' + i).append($(html));
            }
        }
    });
})();

let clicked = [];
$(document).ready(function () {
    $('[id^="button-"]').click(function (event) {
        let selectedIdNumber = event.target.id[event.target.id.length - 1];
        if (clicked[selectedIdNumber] || clicked[selectedIdNumber] == undefined) {
            $('#info-' + selectedIdNumber).css("display", "block");
            clicked[selectedIdNumber] = false;
        }
        else {
            $('#info-' + selectedIdNumber).css("display", "none");
            clicked[selectedIdNumber] = true;
        }
    })
});