import * as core from '@actions/core'
import {glob} from 'glob'

async function run(): Promise<void> {
  try {
    // const root: string = core.getInput('root')
    const pattern: string = core.getInput('glob')

    core.debug(new Date().toTimeString())

    const files = await glob.glob(pattern, {cwd: process.cwd()})
    const output = files.join('\n')
    core.debug(output)

    core.debug(new Date().toTimeString())

    core.setOutput('files', output)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
