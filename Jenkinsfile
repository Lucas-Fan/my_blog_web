pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                nodejs('node') {
                  sh 'echo start install!'
                  sh 'npm install -g yarn --registry=https://registry.npm.taobao.org'
                  sh "yarn config set registry https://registry.npm.taobao.org -g"
                  sh "yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g"
                  sh 'yarn'
                }
            }
        }
        stage('build') {
            steps {
                nodejs('node') {
                  sh 'echo start bulid!'
                  sh 'yarn build'
                }
            }
        }
    }
}
