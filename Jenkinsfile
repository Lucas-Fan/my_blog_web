pipeline {
    agent {
        docker { image 'node' }
    }
    stages {
        stage('build') {
            steps {
                sh "yarn config set registry https://registry.npm.taobao.org -g"
                sh "yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g"
                sh 'node -V'
                sh 'node -v'
            }
        }
    }
}
