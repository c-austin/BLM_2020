const CHECKMARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" focusable="false" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><path d="M14 21.5L9 16.54 10.59 14.97 14 18.35 21.41 11 23 12.58 14 21.5z"/><title>Checkmark outline</title></svg>`

document.getElementById('copyUrlButton').addEventListener('click', function (event) {
    var temp = document.createElement('textarea');
    temp.value = window.location.href;
    temp.setAttribute('readonly', '');
    temp.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    document.getElementById('copyIconContainer').innerHTML = CHECKMARK_SVG;
});