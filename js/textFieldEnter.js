function textFieldEnterLineWidth(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        setLineWidthEnterField(parseInt(document.getElementById('lineWidthValue').value));
        return false;
    }
    return true;
}
