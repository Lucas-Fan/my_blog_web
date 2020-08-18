pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                nodejs('node') {
                  sh 'echo start bulid!'
                  sh 'yum -y install yarn'
                  sh "yarn config set registry https://registry.npm.taobao.org -g"
                  sh "yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g"
                  sh 'yarn'
                }
            }
        }
    }
}
