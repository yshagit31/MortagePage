

document.addEventListener('DOMContentLoaded', function () {

    inputID = document.getElementById("OnlineID");
    inputPassword = document.getElementById("Password")
    button = document.getElementById("login");
    midc=document.getElementById("mid-content");
    navtext=document.getElementById("text");
    navright=document.getElementById("rightnav");
    image=document.getElementById("animatepic");
    const logo = document.getElementById("logo");
    const img2=document.getElementById("hpic");
    const cn1=document.getElementById("cn1");
    const cn2=document.getElementById("cn2");

    // img2.style.display="none";
    // cn2.style.display="none";
    function checkInp() {
        if (inputID.value.trim() != '' && inputPassword.value.trim() != '') {
            button.disabled = false;
            button.style.backgroundColor = "green"
            button.addEventListener("click", function (e) {
                e.preventDefault();
                spinner.style.display = "inline-block";
                logintxt.style.display="none";
                setTimeout(function(){
                    spinner.style.display="none";
                    midc.style.display="none";
                    setTimeout(function()
                    {
                        navtext.style.display="none";
                        rightnav.style.display="none";
                        if (image) {
                            image.style.animation = 'transformAndFade 2s forwards';
                        } else {
                            console.error('Element with ID animatepic not found.');
                        }

                        if (logo) {
                            setTimeout(function() {
                                logo.style.animation = 'rotateAndCenter 2s forwards';
                            }, 1000);
                        } else {
                            console.error('Element with ID logo not found.');
                        }
                        // cn1.style.display="none";
                        // cn2.style.display = "block";
                        // img2.style.animation = 'transformAndEmerge 2s forwards';
                    },500);
                },1000);
            });
        }
        else {
            button.disabled = true;
        }
    }

    inputID.addEventListener('input', checkInp);
    inputPassword.addEventListener("input", checkInp);

});