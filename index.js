#!/usr/bin/env node
import { inspect } from 'util'
import getStdin from 'get-stdin'

if (process.stdout.setEncoding)
{
    process.stdout.setEncoding("utf-8")
}

!(async () =>
{
    const input = await getStdin()

    try
    {
        const parsed = JSON.parse(input)

        if (process.stdout.isTTY)
        {
            console.log(inspect(parsed, { colors: true, depth: null, maxArrayLength: Infinity }))
        }
        else
        {
            console.log(JSON.stringify(parsed, undefined, 2))
        }
    }
    catch (error)
    {
        console.error(error.message)
        process.exit(1)
    }
})()




