# StoutLabs' Gatsby.js Starter

Opinionated barebones GatsbyJS starter, pre-installed with my preferred tools and structure.

Almost zero styling, almost zero layout - ready to edit, delete what you don't need!

[Demo Link](https://gatsby-starter-stoutlabs-demo.netlify.com/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/stoutlabs/gatsby-starter-stoutlabs)

Features/Includes:

- `styled-components`, already set up and configured
- Global 'normalizing' via `styled-components-normalize`
- Add your own global styles via styled-components' `createGlobalStyle` method. (Already set up!)
- Or, use SASS compilation and your own CSS files. That's set up, too!
- Universal importing from inside `/src` (e.g. `import thing from "components/thing"`)
- `react-icons`
- `gatsby-plugin-sharp`
- `gatsby-transformer-sharp`
- `gatsby-image`
- `react-helmet`
- `formik` (with `yup` validation) for forms
- `dotenv` for handling env vars
- `gatsby-plugin-sitemap`
- `gatsby-plugin-robots-txt`
- Also includes my `eslint + prettier + VS Code` configs, with autoformat/autofix on save

---

## Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    gatsby new [DIRECTORY NAME] https://github.com/stoutlabs/gatsby-starter-stoutlabs
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd [DIRECTORY NAME]/
    yarn develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## Learning Gatsby

Looking for more instructions?

- Full documentation for Gatsby can be found [on their website](https://www.gatsbyjs.org/) - and they are **FANTASTIC** docs!! 💜
- Shameless plug: I'll be writing more articles soon over at [Alligator.io](https://alligator.io/), primarily in their Gatsby section... but perhaps in other areas as well. (And it's truly a great site, if you've never visited!)
