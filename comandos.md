

## Install NVM
```py
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
```py
    $ nvm install node
    $ node -v

```
### Create readme.md
```py
    $ touch README.md
```
## Create project
```py
    $ npm create vite@latest
    $ cd event-platform
    $ npm install
    $ npm run dev
```
```py
    $ npm install tailwindcss postcss autoprefixer -D
    $ npx tailwindcss init -p
```
## GraphQL
```py
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
```py
    $ npm install @apollo/client graphql
```
```py
    $ npm install phosphor-react
```
```py
    $ npm install dayjs
```
```py
    $ npm install date-fns
```
#### VimeJS
```py
    $ npm i @vime/core @vime/react
    $ npm i @vime/core @vime/react --force
```
```py
    $ npm install react-router-dom
```
```py
    $ npm install classnames
```


Aula 03 - 21:00