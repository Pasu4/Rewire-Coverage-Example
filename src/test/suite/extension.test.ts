import rewire from 'rewire';
import * as otherFile from '../../other_file';
import * as vscode from 'vscode';
import assert from 'assert';

suite('Extension Test Suite', () => {
    const rewiredOtherFile = rewire('../../other_file');

    test('activate', async function() {
        const ext = vscode.extensions.getExtension('pasu4.rewire-coverage-example');
        assert.ok(ext, 'Extension should exist');
        assert.strictEqual(ext.isActive, true, 'Extension should be active');
    });

    test('coveredFunction', async function() {
        const result = otherFile.coveredFunction();
        assert.strictEqual(result, 'This function is covered!', 'coveredFunction should return expected string');
    })

    test('uncoveredFunction', async function() {
        const uncoveredFunction: (() => void)
            = rewiredOtherFile.__get__('uncoveredFunction');

        const result = uncoveredFunction();
        assert.strictEqual(result, 'This function is not covered!', 'uncoveredFunction should return expected string');
    })
});
