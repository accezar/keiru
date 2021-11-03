/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { GluegunToolbox } from 'gluegun'
import inquirer = require('inquirer')
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods'
import { Octokit } from '@octokit/core'
import { framworksData } from '../data/frameworks'

const GITHUB_TOKEN = ''

function buildTemplateChoices(framework: string) {
  const questionTemplates = [
    {
      name: 'template',
      type: 'list',
      message: 'Escolha entre os templates disponíveis:',
      choices: [],
      default: 'SPA',
    },
  ]

  const availableTemplates = framworksData[framework].templates
  availableTemplates.map((template) =>
    questionTemplates[0].choices.push(template.name)
  )

  return questionTemplates
}

module.exports = {
  name: 'new:project',
  alias: ['np'],
  run: async (toolbox: GluegunToolbox): Promise<void> => {
    const { parameters, print } = toolbox
    const questionProjectName = [
      {
        name: 'projectName',
        type: 'input',
        message: 'Qual o nome do projeto?',
      },
    ]

    const questionFrameworks = [
      {
        name: 'framework',
        type: 'list',
        message: 'Escolha entre os frameworks disponíveis:',
        choices: ['React', 'Vue'],
        default: 'React',
      },
    ]

    await inquirer
      .prompt(questionProjectName)
      .then(async ({ projectName }): Promise<void> => {
        console.log(projectName)

        await inquirer
          .prompt(questionFrameworks)
          .then(async ({ framework }) => {
            if (framework) {
              const templateChoices = buildTemplateChoices(framework)

              await inquirer
                .prompt(templateChoices)
                .then(async ({ template }) => {
                  console.log(template)

                  if (template) {
                    const templateRepo = framworksData[
                      framework
                    ].templates.find((t) => t.name === template).repo

                    const RestOctokit = Octokit.plugin(restEndpointMethods)
                    console.log(GITHUB_TOKEN)

                    const octokit = new RestOctokit({
                      auth: GITHUB_TOKEN,
                    })

                    print.success(`Cloning ${template} template. Please wait..`)

                    const repoTemplateContent =
                      await octokit.rest.repos.getContent({
                        owner: framworksData[framework].owner,
                        repo: templateRepo,
                        path: '',
                      })

                    print.success(`Repository content retrievied.`)
                    console.log(repoTemplateContent.data)
                    print.success('Okay, bye.')
                  }
                })
            } else {
              print.success('Okay, bye.')
            }
          })
      })

    if (parameters.first) {
      print.success('Has parameters informed')
    } else {
      print.error('No parameters informed')
    }
  },
}
