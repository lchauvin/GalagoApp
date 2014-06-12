cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/com.kernix.pdfviewer/www/pdfviewer.js",
        "id": "com.kernix.pdfviewer.PDFViewer",
        "clobbers": [
            "PDFViewer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.splashscreen": "0.3.0",
    "com.kernix.pdfviewer": "1.1.0"
}
// BOTTOM OF METADATA
});