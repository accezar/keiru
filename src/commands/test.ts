import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'test',
  run: async (toolbox: GluegunToolbox) => {
    const { print, parameters } = toolbox
    console.log(parameters)

    print.error('teste')
  }
}
