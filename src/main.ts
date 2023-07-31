import * as core from '@actions/core'
import {glob} from 'glob'

async function run(): Promise<void> {
  try {
    const root: string = core.getInput('root')
    const pattern: string = core.getInput('glob')
    core.debug(`Waiting ${root} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString())

    const files = await glob(pattern, {cwd: root})
    core.debug(files.join('\n'))
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
