//@ts-check

import { spawnSync } from "child_process"

import assert from "assert";

const simpleJSON = `{ "test": "test" }`
const simpleExpectation = `{\n  "test": "test"\n}`

describe('CLI invocation', async () =>
{
    let command = spawnSync(`echo ${simpleJSON} | node .`, { shell: true })

    it(`should return 0 for valid JSON ${simpleJSON}.`, () =>
    {
        assert.equal(command.status, 0)
    })

    it(`should print\n${simpleExpectation}\non stdout`, () =>
    {
        assert.equal(command.stdout.toString().trim(), simpleExpectation)
    })
});
