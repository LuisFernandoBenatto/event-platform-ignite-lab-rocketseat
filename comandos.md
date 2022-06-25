

## Install NVM
```
    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    $ export NVM_DIR="$HOME/.nvm" && (
        git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
        cd "$NVM_DIR"
        git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
    ) && \. "$NVM_DIR/nvm.sh"
    $ nano ~/.bashrc
    $ source ~/.bashrc
    $ nvm -v
```
## Install Node
```
    $ nvm install node
    $ node -v

```
### Create readme.md
```
    $ touch README.md
```
## Create project
```
    $ npm create vite@latest
    $ cd event-platform
    $ npm install
    $ npm run dev
```
```
    $ npm install tailwindcss postcss autoprefixer -D
    $ npx tailwindcss init -p
```
## GraphQL
```
    $ query MyQuery {
       lessons {
        id
        slug
        title
        teacher {
         name
         bio
         avatarURL
        }
       }
      }
    $  
```
```
    $ npm install @apollo/client graphql
```
```
    $ npm install phosphor-react
```
```
    $ npm install dayjs
```
```
    $ npm install date-fns
```
#### VimeJS
```
    $ npm i @vime/core @vime/react
    $ npm i @vime/core @vime/react --force
```
```
    $ npm install react-router-dom
```
```
    $ npm install classnames
```
#### GraphQL codegen
```graphql
    $ npm install graphql
    $ npm install @graphql-codegen/cli

    $ npm install @graphql-codegen/typescript-react-query
    $ npm install @graphql-codegen/typescript
    $ npm install @graphql-codegen/typescript-operations
    $ npm install @graphql-codegen/typescript-react-apollo
    $ npm install @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```



Aula 05 - 