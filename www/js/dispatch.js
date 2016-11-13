function previewchange(i){
    var objID = document.getElementById('Preview_Box');
    switch(i){
        case 'Item1' : 
            objID.style.backgroundImage = "url(image/Template_background.png)";
            break;
        case 'Item2' : 
            objID.style.backgroundImage = "url(image/Template_background_2.png)";
            break;
        case 'Item3' : 
            objID.style.backgroundImage = "url()";
            break;
        case 'Item4' : 
            objID.style.backgroundImage = "url()";
            break;
    }
        
}
