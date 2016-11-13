function previewchange(i){
    var objID = document.getElementById('Preview_Box');
    switch(i){
        case 'Item1' : 
            objID.style.backgroundImage = "url(image/2016-08-17.png)";
            break;
        case 'Item2' : 
            objID.style.backgroundImage = "url(image/2016-08-21.png)";
            break;
        case 'Item3' : 
            objID.style.backgroundImage = "url(image/2016-09-16.png)";
            break;
        case 'Item4' : 
            objID.style.backgroundImage = "url(image/2016-11-05.png)";
            break;
    }
        
}
