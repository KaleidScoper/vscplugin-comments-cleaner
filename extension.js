// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const editor = vscode.window.activeTextEditor;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "vscplugin-comments-cleaner" is now active!');

	const disposable = vscode.commands.registerCommand('vscplugin-comments-cleaner.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from vscplugin-comments-cleaner!');
	});

	const clear = vscode.commands.registerCommand('vscplugin-comments-cleaner.commentsclear', function () {
		if (1) {
            const document = editor.document;
            const languageId = document.languageId;
			const text = document.getText();
            const lines = text.split('\n');

            // 检查文档类型
            if (languageId === 'c') {
                vscode.window.showInformationMessage('Cleaning comments for C documents!');
				editor.edit(editBuilder => {
					lines.forEach((line, index) => {
						if (line.includes('//')) {
							const start = new vscode.Position(index, 0);
							const end = new vscode.Position(index, line.length);
							const range = new vscode.Range(start, end);
							editBuilder.delete(range);
						}
					});
				}).then(success => {
					if (success) {
						vscode.window.showInformationMessage('Comments removed successfully!');
					} else {
						vscode.window.showErrorMessage('Failed to remove comments.');
					}
				});
            } else if (languageId === 'html') {
				vscode.window.showInformationMessage('Not for HTML documents!');
			} else if (languageId === 'php') {
				;
			} else {
				;
			}
        }
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
