// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "vscplugin-comments-cleaner" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('vscplugin-comments-cleaner.helloWorld', function () {
		// 输入在package.json中命名的指令后，指令会启动此处的代码。
		vscode.window.showInformationMessage('Hello World from vscplugin-comments-cleaner!');
	});

	const clear = vscode.commands.registerCommand('vscplugin-comments-cleaner.commentsclear', function () {
		;
		vscode.window.showInformationMessage('Cleaned.');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(clear);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
