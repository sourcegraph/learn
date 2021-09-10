#!/usr/bin/env bash

set -euxo pipefail

DOCKER_COMPOSE_VERSION='1.27.4'
DEPLOY_SOURCEGRAPH_LEARN_CHECKOUT='/root/learn'
DEPLOY_SOURCEGRAPH_LEARN_BACKEND='/root/learn/backend'

# 🚨 Update these variables with the correct values!
DEPLOY_SOURCEGRAPH_LEARN_CLONE_URL='https://github.com/sourcegraph/learn.git'
DEPLOY_SOURCEGRAPH_LEARN_BRANCH=''

# Install git
sudo apt-get update -y
sudo apt-get install -y git

# Clone Docker Compose definition
git clone "${DEPLOY_SOURCEGRAPH_LEARN_CLONE_URL}" "${DEPLOY_SOURCEGRAPH_LEARN_CHECKOUT}"
cd "${DEPLOY_SOURCEGRAPH_LEARN_CHECKOUT}"
git checkout "${DEPLOY_SOURCEGRAPH_LEARN_BRANCH}"

# Install Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update -y
apt-cache policy docker-ce
apt-get install -y docker-ce docker-ce-cli containerd.io

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
curl -L "https://raw.githubusercontent.com/docker/compose/${DOCKER_COMPOSE_VERSION}/contrib/completion/bash/docker-compose" -o /etc/bash_completion.d/docker-compose
