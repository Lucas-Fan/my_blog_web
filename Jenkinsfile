pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                node('node') {
                  sh 'yarn'
                }
            }
        }
    }
}
