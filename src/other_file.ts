import * as vscode from 'vscode';

export function coveredFunction(): string {
    vscode.window.showInformationMessage('This function is covered!');
    return 'This function is covered!';
}

function uncoveredFunction(): string {
    vscode.window.showInformationMessage('This function is not covered!');
    return 'This function is not covered!';
}
