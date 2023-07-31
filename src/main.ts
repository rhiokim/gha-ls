import * as core from '@actions/core'
import {glob} from 'glob'
import {join} from 'path'

async function run(): Promise<void> {
  try {
    // const root: string = core.getInput('root')
    const pattern: string = core.getInput('glob')

    core.debug(new Date().toTimeString())

    core.debug(`root: ${join(process.cwd(), pattern)}`)
    const files = await glob.glob(pattern, {cwd: process.cwd()})
    core.debug(files.join('\n'))

    core.debug(new Date().toTimeString())

    core.setOutput('files', files)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
