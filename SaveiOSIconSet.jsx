/*
SaveiOSIconSet.jsx
Ryan Demo
Updated for iOS 10 on October 18, 2016

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

	// iPhone App
	exportFileToPNG24(60, "Icon-60@1x.png");
	exportFileToPNG24(120, "Icon-60@2x.png");
	exportFileToPNG24(180, "Icon-60@3x.png");

	// iPad App
	exportFileToPNG24(76, "Icon-76@1x.png");
	exportFileToPNG24(152, "Icon-76@2x.png");

	// iPad Pro App
	exportFileToPNG24(167, "Icon-83.5@2x.png");

	// iPad Spotlight
	exportFileToPNG24(40, "Icon-40@1x.png");
	exportFileToPNG24(80, "Icon-40@2x.png");
	exportFileToPNG24(120, "Icon-40@3x.png");

	// Notifications
	exportFileToPNG24(20, "Icon-20@1x.png");
	exportFileToPNG24(40, "Icon-20@2x.png");
	exportFileToPNG24(60, "Icon-20@3x.png");

	// Settings
	exportFileToPNG24(29, "Icon-29@1x.png");
	exportFileToPNG24(58, "Icon-29@2x.png");
	exportFileToPNG24(87, "Icon-29@3x.png");

	// iTunes Artwork
	exportFileToPNG24(512, "iTunesArtwork");
	exportFileToPNG24(1024, "iTunesArtwork@2x");

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

