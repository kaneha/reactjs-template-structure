module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('base', {
    description: 'Create a base component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your base component name?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/base/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: './base/base.props.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/base/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: './base/base.styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/base/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: './base/base.view.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/base/{{pascalCase name}}/index.tsx',
        templateFile: './base/index.tsx.hbs',
      },
    ], // array of actions
  });
  plop.setGenerator('module', {
    description: 'Create a module component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module component name?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/module/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: './base/base.props.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/module/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: './base/base.styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: './base/base.view.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/module/{{pascalCase name}}/index.tsx',
        templateFile: './base/index.tsx.hbs',
      },
    ], // array of actions
  });
  plop.setGenerator('layout', {
    description: 'Create a layout component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout component name?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/layout/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: './base/base.props.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/layout/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: './base/base.styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/layout/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: './base/base.view.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/layout/{{pascalCase name}}/index.tsx',
        templateFile: './base/index.tsx.hbs',
      },
    ], // array of actions
  });
  plop.setGenerator('page', {
    description: 'Create a page component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page component name?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/page/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: './base/base.props.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/page/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: './base/base.styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/page/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: './base/base.view.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/page/{{pascalCase name}}/index.tsx',
        templateFile: './base/index.tsx.hbs',
      },
    ], // array of actions
  });
};
