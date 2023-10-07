# AgentChat

A project to learn about LLM Agents and their capabilities:
- Python 3.9.13
- React/TypeScript
- Python
- _PostgreSQL?_

---

## Conda environment

### Why?

Python is bad at managing dependencies, especially when everything is run at a global level. We use conda environments to get around this.

### Conda environment setup

Conda environment created according to [this guide](https://conda.io/projects/conda/en/latest/user-guide/getting-started.html#starting-conda) and [this guide](https://saturncloud.io/blog/how-to-pip-install-a-package-under-a-conda-virtual-environment/).

1. Download Conda.
2. Open the Anaconda prompt (Anaconda terminal).
3. Setup a conda environment:
    - `conda create --name <environment name>` \
    - `Proceed ([y]/n)?` -> `Enter`
4. Activate it:
    - `conda activate agentchat`
    - if successful you terminal should look like this: `(<environment name) C:\`
5. Ensure pip version is up-to-date using `pip install --upgrade pip`.
6. Install packages using `pip install <packages>`.
7. Run program
8. Deactivate virtual environment with `conda deactivate`

## GitIgnore

### Why?

Sensitive information should not be available in a public repository. To avoid it being push to Github:

1. Add the filename to the `.gitignore` file.
2. Push the change to the `.gitignore` file.
3. Push the change to the sensistive file.

## Virtual environment (TODO: UPDATE THIS)

### Y though?

Python is bad at managing dependencies, especially when everything is run at a global level. We use virtual environments to get around this

### Virtual environment setup

Virtual environment created according to [this guide](https://realpython.com/python-virtual-environments-a-primer/)

1. Setup a virtual environment:
    - `python -m venv venv`
2. Activate it:
    - `source venv/bin/activate`
    - if successful you terminal should look like this: `(venv) $`

3. Install packages using `python -m pip install -r requirements.txt`
    - This should automatically install all relevant packages

4. Run program

5. Deactivate virtual environment with `deactivate`


### How to generate `requirements.txt`

1. Initiate virtual environment according to previous section 

2. Run `python -m pip freeze > requirements.txt`

### Further reading in package management

`venv` isn't deterministic and we may encounter errors in the future. This is an alternative should it be required:

- [Poetry - Python packaging and dependency management made easy](https://python-poetry.org/)

---

## Agents

### Resources

Created agents using:

- [Microsoft - AutoGen](https://microsoft.github.io/autogen/docs/Getting-Started/)
- [LangChain - Agents](https://python.langchain.com/docs/modules/agents.html)
- [LangChain - Agent Types](https://python.langchain.com/docs/modules/agents/agent_types/)

### Guides

Created using the following guides:

- [YT - AutoGen Custom AI Agent](https://www.youtube.com/watch?v=yFL6cBhIato)
- [YT - AutoGen Agents Overview](https://www.youtube.com/watch?v=PCr-uAjQHDQ)
- [YT - AutoGen Tutorial](https://www.youtube.com/watch?v=vU2S6dVf79M)
- [YT - AutoGen Multi Agent Framework](https://www.youtube.com/watch?v=Bq-0ClZttc8)
- [YT - MetaGPT & ChatDev Multi Agent Framework](https://www.youtube.com/watch?v=pJwR5pv0_gs)
- [DeepLearning.AI - LangChain for LLM Application Development](https://learn.deeplearning.ai/langchain/lesson/7/agents)

---

## Useful development plugins

- Python related:
    - [Python Environment Manager](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-environment-manager)
    - [Python Indent](https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent)
- Git (gud):
    - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
    - [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
    - [GitLens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- General QoL:
    - [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
    - [TODO Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
    - [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
    - [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
    - [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
- MongoDB
    - [MongoDB for VS Code](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)

- Styling
    - Uses ESLint and Prettier
