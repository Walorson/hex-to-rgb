/// hexToRGB.js Library by Szymon Gniadek ///
function hexToRgb(hex) {
    if(typeof(hex) != "string") return console.error("The argument must be string!");
    else if(hex[0] != "#" || hex.length < 7 || hex.length > 9) return console.error("Invalid hex code");
    hex = hex.substr(1);
    
    const rgb = new Array(hex[0],hex[1],hex[2],hex[3],hex[4],hex[5]);
    for(i=0; i<=5; i++) {
        switch(rgb[i]) {
            case 'a': rgb[i] = "10"; break;
            case 'b': rgb[i] = "11"; break;
            case 'c': rgb[i] = "12"; break;
            case 'd': rgb[i] = "13"; break;
            case 'e': rgb[i] = "14"; break;
            case 'f': rgb[i] = "15"; break;
        }
    }
    const red = parseInt(rgb[0]*16) + parseInt(rgb[1]);
    const green = parseInt(rgb[2]*16) + parseInt(rgb[3]);
    const blue = parseInt(rgb[4]*16) + parseInt(rgb[5]);

    return red+","+green+","+blue;
}
function rgbToHex(r,g,b) {
    if(isNaN(r) || isNaN(g) || isNaN(b)) return console.error("Invalid rgb code");
    if(r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0) return console.error("Invalid rgb code");
    
    const red1 = parseInt(Math.floor(r/16));
    const red2 = parseInt(((r/16) - Math.floor(r/16))*16);
    const green1 = parseInt(Math.floor(g/16));
    const green2 = parseInt(((g/16) - Math.floor(g/16))*16);
    const blue1 = parseInt(Math.floor(b/16));
    const blue2 = parseInt(((b/16) - Math.floor(b/16))*16);

    const rgb = new Array(red1,red2,green1,green2,blue1,blue2);
    for(i=0; i<=5; i++) {
        switch(rgb[i]) {
            case 10: rgb[i] = "a"; break;
            case 11: rgb[i] = "b"; break;
            case 12: rgb[i] = "c"; break;
            case 13: rgb[i] = "d"; break;
            case 14: rgb[i] = "e"; break;
            case 15: rgb[i] = "f"; break;
        }
    }
    return "#"+rgb[0]+rgb[1]+rgb[2]+rgb[3]+rgb[4]+rgb[5];
}
///////////////////// CONVERT SINGLE COLOR ////////////////////////
function hexToRGBconvertColor(hex,num) {
    if(typeof(hex) != "string") { console.error("The argument must be string!"); return undefined; }
    else if(hex[0] != "#" || hex.length < 7 || hex.length > 9) { console.error("Invalid hex code"); return undefined; }

    hex = hex.substr(num);
    const rgb = new Array(hex[0],hex[1]);
    for(i=0; i<=1; i++) {
        switch(rgb[i]) {
            case 'a': rgb[i] = "10"; break;
            case 'b': rgb[i] = "11"; break;
            case 'c': rgb[i] = "12"; break;
            case 'd': rgb[i] = "13"; break;
            case 'e': rgb[i] = "14"; break;
            case 'f': rgb[i] = "15"; break;
        }
    }
    return new Array(rgb[0],rgb[1]);
}
function hexToRed(hex) {
    const rgb = hexToRGBconvertColor(hex,1); if(rgb == undefined) return;
    return (parseInt(rgb[0]*16) + parseInt(rgb[1]))+"";
}
function hexToGreen(hex) {
    const rgb = hexToRGBconvertColor(hex,3); if(rgb == undefined) return;
    return (parseInt(rgb[0]*16) + parseInt(rgb[1]))+"";
}
function hexToBlue(hex) {
    const rgb = hexToRGBconvertColor(hex,5); if(rgb == undefined) return;
    return (parseInt(rgb[0]*16) + parseInt(rgb[1]))+"";
}