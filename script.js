
function ToggleHide(hide)
{
    let option=hide.path;
    let change_sign=option[0];
    let data=option[3].querySelector('.toggleclass');
    if(data.style.display!='none')
    {
        change_sign.src='Images/plus.jpg';
        data.style.display='none';
    }
    else{
        change_sign.src='Images/subtract.png';
        data.style.display='block';
    }
    let data1=option[3].querySelector('.toggleclass1');
    if(data1.style.display!='none')
    {
        data1.style.display='none';
    }
    else{
        data1.style.display='block';
    }

}