function include(script_filename) {
    document.write('<' + 'script');
    document.write(' type="text/javascript"');
    document.write(' src="./js/' + script_filename + '">');
    document.write('</' + 'script' + '>');
}

include('colorPicker.js')
include('textFieldEnter.js');
include('var.js');
include('draw.js');
include('setLineWidth.js');
include('setLineColor.js');
