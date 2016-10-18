/*
SaveWatchOSIconSet.jsx
Script for use with Adobe Illustrator

Author: Ryan Demo
Updated for watchOS 3 on October 18, 2016

Originally forked from Jeremie Weldin's gist:
https://gist.github.com/jeremieweldin/577775
*/

var destFolder = null;
destFolder = Folder.selectDialog('Select the folder where you want to save the exported files.', app.activeDocument.path);

var baseDestName = app.activeDocument.name;

if (baseDestName.indexOf('.') < 0) {
    //nothing
} else {
    var dot = baseDestName.lastIndexOf('.');
    baseDestName = baseDestName.substring(0, dot);
}

var activeArtboard = app.activeDocument.artboards[app.activeDocument.artboards.getActiveArtboardIndex()];

if (destFolder != null) {

	// Home Screen
	exportFileToPNG24(80, "Icon-w-All-40@2x.png");  // can also be used for 38mm long look

	// Notification Center
	exportFileToPNG24(48, "Icon-w-38mm-24@2x.png");
	exportFileToPNG24(55, "Icon-w-42mm-27.5@2x.png");

	// Short Look
	exportFileToPNG24(172, "Icon-w-38mm-86@2x.png");
	exportFileToPNG24(196, "Icon-w-42mm-98@2x.png");

	// Long Look
	exportFileToPNG24(88, "Icon-w-42mm-44@2x.png");

	// Companion Settings
	exportFileToPNG24(58, "Icon-w-All-29@2x.png");
	exportFileToPNG24(87, "Icon-w-All-29@3x.png");

}

function exportFileToPNG24(iconSize, name)  { 
	var scale = iconSize / activeArtboard.artboardRect[2] * 100;
	
	if (app.documents.length > 0) {
		var exportOptions = new ExportOptionsPNG24();
		var type = ExportType.PNG24;
		var fileSpec = new File ("" + destFolder + "/" + name );
		exportOptions.verticalScale = scale;
		exportOptions.horizontalScale = scale;
		exportOptions.antiAliasing = true;
		exportOptions.transparency = true;
		exportOptions.artBoardClipping = true;
		app.activeDocument.exportFile (fileSpec, type, exportOptions);
	}
}

